import { ChatUser, standartMessage } from "../Chats/Template";
import {vibe} from '../../Content/Vibe'
import {sync} from '../../Content/Sync'
import { contractStructureParams, contractsSpreadSheet, coreParams, fundingParams, gig, operationalCostParams, profitStructureParams, securityParams, withdrawalParams, purchasingParams, cancelationParams } from "../../Content/Gig";
export class target {
    constructor (
        id:number,
        title:string,
        content:string,
        funding:targetFundingStream[]
    ){
        this.id=id,
        this.title=title
        this.content=content
        this.funding=funding
    }
    id:number
    title:string;
    content:string;
    funding:targetFundingStream[];

}

export class targetFundingStream {
    constructor (
        type:fundingTypes,
        quantity:number
    ){
        this.type=type
        this.quantity=quantity
    }
    type:fundingTypes
    quantity:number
}

export  type fundingTypes = 'wage' | 'advance' | 'Share'


export class targetOffer {
    constructor(
        targets:target[],
        contractorId:number,
        hostId:number,
        advances:number,
        wages:number,
        shares:number
    ){
        this.targets=targets,
        this.contractorId=contractorId
        this.hostId=hostId,
        this.spreadSheet.wages=wages,
        this.spreadSheet.advances=advances,
        this.spreadSheet.shares=shares
        this.reception.isRecieved=false,
        this.reception.isRejected=false,
        this.reception.isAgreed=false,
        this.reception.isNegotiated=false


    }
    targets:target[]
    contractorId:number
    hostId:number
    spreadSheet:{
        wages:number
        advances:number
        shares:number
    }
    reception:{
        isRecieved:boolean,
        isRejected:boolean,
        isAgreed:boolean,
        isNegotiated:boolean,
    }
}

export class targetOfferNegotiations {
    constructor(
        baseOffer:targetOffer,
        contractorNegotiators:ChatUser[],
        hostNegotiators:ChatUser[],
        initalCounterOffer:targetOffer
    ){
        this.orinigalTargetOffer=baseOffer
        this.contractorId=baseOffer.contractorId
        this.hostId=baseOffer.hostId
        this.contractorNegotiators=contractorNegotiators
        this.hostNegotiators=hostNegotiators
        this.counterOffers=[]
        this.counterOffers.push(initalCounterOffer)
    }
    orinigalTargetOffer:targetOffer
    contractorId:number
    hostId:number
    contractorNegotiators:ChatUser[]
    hostNegotiators:ChatUser[]
    counterOffers:targetOffer[]
    chat:standartMessage|targetOffer[]

    addCounterOffer(offer:targetOffer){
        this.counterOffers.push(offer)
    }
}

export class targetContract extends targetOffer {
    constructor (
        baseOffer:targetOffer,
        targetContent:vibe|sync|gig,


    ){
        super(
            baseOffer.targets,
            baseOffer.contractorId,
            baseOffer.hostId,
            baseOffer.spreadSheet.advances,
            baseOffer.spreadSheet.wages,
            baseOffer.spreadSheet.shares
        )
        this.reception=baseOffer.reception
        this.targetContent=targetContent
        this.isCleared=false
        this.isMessy=false
        
    }
    targetContent:vibe|sync|gig
    isCleared:boolean
    isMessy:boolean
    clearingStatus:clearingParams

}


export interface clearingParams {
    advances?:{
        total:advanceFundingStream[]
        cleared:advanceFundingStream[]
        pending:advanceFundingStream[]
    }
    wages?:{
        total:wageFundingStream[]
        cleared:wageFundingStream[]
        pending:wageFundingStream[]
    }
    shares?:{
        total:shareFundingStream[]
        cleared:shareFundingStream[]
        pending:shareFundingStream[]
    }

}


export class advanceFundingStream extends targetFundingStream {
    constructor(
        stream:targetFundingStream,
        targetId:string
    ){
        super (
            stream.type,
            stream.quantity
        )
        this.targetId=targetId
        this.isCleared=false


    }
    targetId:string
    isCleared:boolean
}

export class wageFundingStream extends targetFundingStream {
    constructor(
        stream:targetFundingStream,
        targetId:string
    ){
        super (
            stream.type,
            stream.quantity
        )
        this.targetId=targetId
        this.isCleared=false


    }
    targetId:string
    isCleared:boolean
}

export class shareFundingStream extends targetFundingStream {
    constructor(
        stream:targetFundingStream,
        targetId:string
    ){
        super (
            stream.type,
            stream.quantity
        )
        this.targetId=targetId
        this.isCleared=false


    }
    targetId:string
    isCleared:boolean
}