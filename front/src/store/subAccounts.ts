import { gigData } from "@/lib/actions/content/gig.actions";
import { GigData } from "@/lib/models/content/gig.models";
import { SyncData } from "@/lib/models/content/sync.models";
import { vibeData } from "@/lib/models/content/vibe.models";
import { ArtistData } from "@/lib/models/profiles/artist.model";
import { VenueData } from "@/lib/models/profiles/venue.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface vibeDigest{
    vibe:{
        id:string
        // deployment:[]
        logo:string
        primaryTitle:string
        secondaryTitle?:string
        pushes:[]
        audience:number
    }
    aggregatedCommunitites?:{
        public:[]
        private:[]
        target:[]
        geographicalCommunities:{
            geo:string
            public:[]
            private:[]
            target:[]
        }[]
    }
}

export interface optionDigest{
    date:Date
    time:{
        start:Date
        end:Date
    }
    price:number
    
    
    
}

export interface syncDigest{
    baseVibe:{
        id:string
        logo:string
        title:string
    }

    distribution:{
        geo:string
        audience:number
        optionsDeployment:{
            vibeTitle:string
            baseVenue:{
                id:string
                title:string
                logo:string
            }
            options:{
                requested:optionDigest[]
                rejected:optionDigest[]
                approved:optionDigest[]
            }
        pushes:[]
        }[]
    pushes:[]
    }[]
    pushes:[]

    

}

export interface issueDigest{
    id:string
    immediacy:'standart'|'emergent'|'critical'
    title:string
    residualTime?:Date
    pic:string
    puhes:[]
    cancelationProbability:boolean
}

export interface gigDigest{
    id:string
    base:{
        vibe:vibeData
        sync:SyncData
    }
    deployment:{
        venue:{
            id:string
            logo:string
            title:string
        }
        proposition?:optionDigest
        audience:number
    }
    issues:issueDigest[]

}


export interface SyncOptionDigest {
    id:string

}

export interface CommunityDigest {
    id:string
    title:string
    logo:string
    pushes:[]
    audience:number
}


interface subAccount {
    artist:{
        vibes:vibeDigest[]
        syncs:syncDigest[]
        gigs:gigDigest[]
        
    }
    venue:{
        vibes:[]
        syncs:[]
        gigs:[]
    }
    targetGroup:null
}

interface vibeEssentialInput {

}

interface syncEssentialInput {

}

interface gigEssentialInput{

}

interface contentEssentialInput {
    modality:'vibe'|'sync'|'gig'
    payload:[]
}


const initialState:subAccount = {
    artist:{
        vibes:[],
        syncs:[],
        gigs:[]
    },
    venue:{
        vibes:[],
        syncs:[],
        gigs:[]
    },
    targetGroup:null
}

const SubAccountSlice = createSlice({
    name:'subAccount',
    initialState,
    reducers:{
        parseArtistContentsEssentials:(state, action:PayloadAction<{vibeData:any[], syncData:any[], gigData:any[]}>)=>{
            state.artist={
                vibes:[],
                syncs:[],
                gigs:[]
            }
            
            
                action.payload.vibeData.forEach((vibe:vibeData)=>{
                    state.artist?.vibes.push({
                        vibe:{
                            id:vibe._id,
                            logo:vibe.core.media.promoLogo,
                            primaryTitle:vibe.core.contentTitle,
                            secondaryTitle:vibe.core.format,
                            // TLDR:figure out either schema extension for client/server
                            //  push correspondece or a callback to get new pushes
                            pushes:[],
                            audience:vibe.vibrations.total.quantity

                        }
                    })
                })
            
            
                action.payload.syncData.forEach((sync:SyncData)=>{
                    if(!state.artist?.syncs.find((unit)=>unit.baseVibe.id===sync.baseVibe._id)){
                        state.artist?.syncs.push({
                            baseVibe:{
                                id:sync.baseVibe._id,
                                logo:sync.baseVibe.core.media.promoLogo,
                                title:sync.baseVibe.core.contentTitle
                            },
                            distribution:[{
                                geo:sync.geo,
                                audience:sync.audience,
                                optionsDeployment:[],
                                pushes:[]
                            }],
                            pushes:[]
                            // TLDR:configure a schema/async callback sollution for pushes fetch
                        })
                    
            
                        state.artist.syncs.find((unit)=>{
                            sync.baseVibe._id===unit.baseVibe.id
                        })?.distribution.push({
                            geo:sync.geo,
                            audience:sync.audience,
                            optionsDeployment:[],
                            pushes:[]
                        })
                    }
                })
            

            
                action.payload.gigData.forEach((unit:any)=>{
                    // TLDR:any is out of necessity. For some reason ts is not fine with'gigData'
                    // type in base field
                    state.artist.gigs.push({
                        id:unit._id,
                        base:{
                            vibe:unit.base.vibe,
                            sync:unit.base.sync
                        },
                        deployment:{
                            venue:{
                                id:unit.deployment.venue._id,
                                logo:unit.deployment.venue.media.logo,
                                title:unit.deployment.venue.description.title
                            },
                            audience:unit.capacity.deployed
                        },
                        issues:[]

                    })
                })
            
        }
    }
})

export const {parseArtistContentsEssentials} = SubAccountSlice.actions
export default SubAccountSlice.reducer