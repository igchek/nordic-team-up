import { geo } from "../Community/Chats/Template"
import { gig } from "../Content/Gig"
import { Date, LineUpQue, LineUpUnit, Option, sync } from "../Content/Sync"
import { exhangeAPIParams, user } from "./Template"


export class artist {
    constructor (
        id:string,
        providerTitle:string,
        providerType:string,
        logo:string,
        sourceType:string
    ) {
        this.id=id
        this.providerTitle=providerTitle
        this.providerType=providerType
        this.logo=logo
        this.sourceType=sourceType
    }
    id:string;
    providerTitle:string;
    providerType:string;
    logo: string;
    sourceType:string

    vibes?:VibratingContent[]
    funds?:artistFinancialInterface

    collectiveInterface?:collectiveArtistInterface


    
}



export abstract class vibeTemplate {
    
    abstract title:string
    abstract poster:string

    abstract format:TemplateFormats|string
}

export type TemplateFormats = 'concert' | 'stand up'

export class vibeCore extends vibeTemplate {
    constructor(
        
        vibeTemplate:vibeTemplate,

        emiterId:string,
        lineUp?:lineUpSummaryUnit[],
        description?:string,

        tags?:string[],

        media?:vibeMediaInterface|vibeMediaInterface[]



    ){
        super(
            
        )
        this.title=vibeTemplate.title
        this.poster=vibeTemplate.poster
        this.format=vibeTemplate.format
        this.emiterId=emiterId
        this.lineUp=lineUp
        this.description=description

        this.tags=tags

        this.media=media
    }

    title: string
    poster: string
    format: string
    emiterId:string
    lineUp?:lineUpSummaryUnit[]
    description?:string

    tags?:string[]

    media?:vibeMediaInterface|vibeMediaInterface[]



}

export interface lineUpSummaryUnit {
    artistId:string
    artistLogo:string
    artistTitle:string
    artistDescription?:string
}


export interface vibeMediaInterface {
    mediaReel:string[]
    emiterId:string


}


export class Vibrations {
    constructor (
        totalAmmount:number,
        inputUserIds:string[],
        geoAllocation?:geoAllocation[]
    ){
        this.totalAmmount=totalAmmount
        this.inputUserIds=inputUserIds
        this.geoAllocation=geoAllocation
    }

    totalAmmount:number
    inputUserIds:string[]

    geoAllocation?:geoAllocation[]
}


export class geoAllocation {
    constructor (
        geo:geo,
        totalAmmount:number,
        inputUserIds:string[]
    ){
        this.geo=geo
        this.totalAmmount=totalAmmount
        this.inputUserIds=inputUserIds
        this.frequencyAllocation=this.setFrequencyAllocation()
    }

    geo:geo
    totalAmmount:number
    inputUserIds:string[]
    frequencyAllocation:frequencyAllocation[]
    resonator?:number

    setFrequencyAllocation():frequencyAllocation[]{
        const frequencyAllocationSet:frequencyAllocation[] =[]
        return frequencyAllocationSet
    }

    setResonator(frAl:frequencyAllocation[]):void{
        let res:number=0
        this.resonator=res
    }

}

export class frequencyAllocation {
    constructor(
        frequency:number,
        audience:number
    ){
        this.frequency=frequency
        this.audience=audience
    }

    frequency:number
    audience:number

}

export class VibratingContent extends vibeCore{
    constructor(
        vibeTemplate:vibeTemplate,
        vibeCore:vibeCore,
        vibrations:Vibrations
    ){
        super(
            vibeTemplate,
            vibeCore.emiterId,
            vibeCore?.lineUp,
            vibeCore?.description,
            vibeCore?.tags,
            vibeCore?.media
        )
        this.vibrations=vibrations
        this.isVibrating=true
    }

    isVibrating:boolean
    vibrations:Vibrations
    syncDrafts?:syncDraft[]
    syncs?:sync[]
    gigs?:gig[]


    setVibrationEmission(arg:boolean):void{
        this.isVibrating=arg
    }
    
}


export class syncDraft {
    constructor(
        vibrationsSection:geoAllocation,
        initialOption:Option<Date,LineUpQue<LineUpUnit>>
    ){
        this.vibrationsSection=vibrationsSection,
        this.requestedOptions=[]
        this.requestedOptions.push(initialOption)
    }

    vibrationsSection:geoAllocation
    requestedOptions:Option<Date,LineUpQue<LineUpUnit>>[]
    intactOptions?:Option<Date,LineUpQue<LineUpUnit>>[]

}

export interface artistFinancialInterface{
    generalSpreadSheet:{
        assets:{
            total:number
            cleared?:number
            secured?:number
        }
        liabilities?:number
    }
    UnitSpreadSheet?:{
        Gigs:gigArtistFinancialInterface[]
        Liabilities?:liabilityArtistFinancialInterface[]
        Assets:assetArtistFinancialInterface[]
    }
    ProfitDistribution?:{

    }
    ShareDistribution?:{

    }



}


export interface gigArtistFinancialInterface {

}


export interface liabilityArtistFinancialInterface {

}

export interface assetArtistFinancialInterface {

}



export interface collectiveArtistInterface {
    crew:crewMember[]
    shares:shareInterfaceArtist
    rights:rightsInterfaceArtist
}

export class crewMember extends user {
    constructor(
        id:string,
        log:string,
        ex?:exhangeAPIParams
    )
    {
        super(
            id,
            log,
            ex
        )
        this.profileId=id
        this.profileLog=log
        this.exchangeAPI=ex
    }
    role?:string
}


export interface shareInterfaceArtist{

}

export class crewmemberShare {
    constructor(
        id:string,
        log:string,
        nickname:string,
        shares:share[]
        
    ){
        this.id=id
        this.log=log
        this.nickname=nickname
        this.setShareSheet(shares)

    }

    id:string
    log:string
    nickname:string

    'type':'quantity'

    setShareSheet(shares:share[]){
        for (let shareUnit of shares){
            Object.defineProperty(this, shareUnit.type, shareUnit.quantity)
        }
    }

}

export class share {
    constructor(
        type:shareTypes,
        quantity:number
    ){
        this.type=type
        this.quantity=quantity
    }
    type:shareTypes
    quantity:number
}
export type shareTypes = 'profit'|'operational cost' | 'revenue'

export interface rightsInterfaceArtist {

}








