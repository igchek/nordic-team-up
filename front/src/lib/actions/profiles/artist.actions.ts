"use server"

import Gig from "@/lib/models/content/gig.models"
import Sync from "@/lib/models/content/sync.models"
import Vibe from "@/lib/models/content/vibe.models"
import Media from "@/lib/models/discrete/media.models"
import Artist from "@/lib/models/profiles/artist.model"
import User from "@/lib/models/profiles/user.models"
import Venue from "@/lib/models/profiles/venue.model"
import { connectToDB } from "@/lib/validations/mongoose"


interface createArtistI{
    contributors:string[]
    description:{
        title:string
        subtitle?:{
            role?:string
            description?:string
        }
        tagLine?:{
            selfAdjusted?:string[]
        }
    }
    media:{
        logo?:string
        header?:string
    }
}

export interface ArtistCoreData {
    artistId:String
    contributors:string[]
    description:{
        title:string
        subtitle?:{
            role?:string
            description?:string
        }
        tagLine?:{
            selfAdjusted?:string[]
        }
    }
    media:{
        logo?:string
        header?:string
        reel?:string
    }
}

export async function createArtist({contributors, description, media}:createArtistI){
    connectToDB()
    try{
        
        const newArtist =  await Artist.create({
            artistId:Math.floor(Math.random()*10000).toString(),
            contributors:[...contributors],
            description:{
                title:description.title,
                subtitle:{
                    role:description.subtitle?.role,
                    description:description.subtitle?.description
                },
                tagLine:{
                    selfAdjusted:description.tagLine?.selfAdjusted
                }

            },
            media:{
                logo:media.logo,
                header:media.header
            },
            content:{
                vibes:[],
                gigs:[]
            }
        })
        // for (let userId of contributors){
        //     let filter = {_id:userId}
        //     await User.findOneAndUpdate(filter, {$push:{'engagement.artists.accounts':userId}}, {upsert:true})


        // }
        

        return newArtist
    }
    catch (error:any){
        throw new Error (`Crashed creating an artist profile: ${error.message}`)
    }
    
}


export async function fetchArtistContentEssentials({artistId}:{artistId:string}){
    try {
        await connectToDB()
        const artistData = await Artist.findOne({_id:artistId}).populate({
            // fetch base gigs
            path:'content',
                populate:{
                    path:'gigs',
                    model:Gig,
                    select:'_id vibeId deployment capacity'
                }
        }).populate(
            // fetch their base vibes
            {
            path:'content',
                populate:{
                    path:'gigs',
                    populate:{
                        path:'baseVibe',
                        select:'_id core'
                    }
                }
        })
        // fetch their venue base core data
        .populate({
            path:'content', 
                populate:{
                    path:'gigs',
                    populate:{
                        path:'deployment',
                        populate:{
                            path:'venue',
                            select:'_id description media',
                            model:Venue
                        }
                    }
                }
        })
        // fetch their vibes
        .populate({
            path:'content',
            populate:{
                path:'vibes',
                select:'_id core vibrations',
                model:Vibe
            }
        })

        
        const vibes = artistData.content.vibes

        const syncs = await Sync.find({baseVibe:{$in:artistData.content.vibes}})
        // fetch their base vibes
        .populate({
            path:'baseVibe', 
            select:'_id core geo',
            model:Vibe
        }) as Array<any>

        const gigs = artistData.content.gigs

        console.log('vibe data is', vibes)
        console.log('sync data is', syncs)
        console.log('gig data is', gigs)


        return {vibes, syncs, gigs}
        


        



        
    } catch (error:any) {
        throw new Error(`crashed fetching artist content essentials`)
    }
}