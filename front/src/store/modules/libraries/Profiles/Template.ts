import { LocalChat } from "../Community/Chats/Local"
import { PrivateChat } from "../Community/Chats/Private"
import { PublicChat } from "../Community/Chats/Public"
import { TargetChat } from "../Community/Chats/Target"
import { geo } from "../Community/Chats/Template"
import { gig } from "../Content/Gig"
import { sync } from "../Content/Sync"
import { vibe } from "../Content/Vibe"
import { artist, crewMember } from "./Artist"
import { venue } from "./Venue"


export abstract class user {
    profileId:string
    profileLog:string
    exchangeAPI?:exhangeAPIParams
}


export interface exhangeAPIParams{

}

export class standartUserProfile extends user {
    constructor(
        profileId:string,
        profileLog:string,
        password:string,
        token:string,
        nick:string,

        profileGeo?:geo,

    ){
        super()
        this.profileId=profileId
        this.profileLog=profileLog
        this.password=password
        this.token=token
        this.profileGeo=profileGeo
        this.profileFlavour.profileNick=nick
    }

    profileId: string
    profileLog: string
    password:string
    token:string

    profileGeo?:geo

    profileFlavour:{
        profilePic:string
        picHistory?:string[]
        profileNick:string
        profileNote?:string
        profileLinks?:string[]
        profileMail?:string[]
    }

    involvedContent?:userInvolvedContent
    involvedChats?:userInvolvedChats

    vibrationFrequency?:number
    purchaseHistory?:[]

    crews?:crewMembership[]







}



export interface userInvolvedContent {
    vibes:vibe[]
    syncs?:sync[]
    gigs?:gig[]

    artists?:artist[]
    venues?:venue[]


}

export interface userInvolvedChats {
    public:PublicChat|PublicChat[]
    local?:LocalChat
    private?:PrivateChat[]
    target?:TargetChat|TargetChat[]

} 

export interface involvedSearchSettings {

}

export interface publicSearchSettings {

}

export class crewMembership {
    constructor (
        crewType:crewTypes,
        crewTitle:string,
        crewId:string,

        crewInitialRole?:string
    ){
        this.crewType=crewType
        this.crewTitle=crewTitle
        this.crewId=crewId

        this.crewRole=[]
        if (crewInitialRole){
            this.setInitialRole(crewInitialRole)        }
    }

    crewType:crewTypes
    crewTitle:string
    crewId:string

    crewRole:string[]

    setInitialRole(crewInitialRole:string){
        this.crewRole.push(crewInitialRole)
    }
}

export type crewTypes = 'artist' | 'venue' | 'target group'

