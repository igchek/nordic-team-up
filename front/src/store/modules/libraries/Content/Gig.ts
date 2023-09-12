import {sync, ChargedOption, chargingParams} from './Sync'

export class gig extends sync {
    constructor (
        sync:sync,
        securedOption?:ChargedOption<chargingParams>,
        fixedPrice?:number,
        initiatiors?:[],
        funds?:fundingParams,
        withdrawals?:withdrawalParams,
        cancelation?:cancelationParams,
        purchasingStatus?:purchasingParams
        
    )
    {
        super(
            sync.vibe,
            sync.syncParams
        )
        this.securedOption=securedOption
        this.fixedPrice=fixedPrice
        this.initiatiors=initiatiors
        this.funds=funds

    }
    securedOption?:ChargedOption<chargingParams>
    fixedPrice?:Number
    initiatiors?:[]
    funds?:fundingParams
    withdrawals?:withdrawalParams
    cancelation?:cancelationParams
    purchasingStatus?:purchasingParams

}


export interface fundingParams {
    TotalRevenue:number;
    core:coreParams;
    revenue: number;
    profit:number;
    profitSructure:profitStructureParams
}


export interface coreParams {
    isCleared:boolean,
    isSecured:boolean,
    OperationalCosts:operationalCostParams,
    Securities:securityParams,
    secureTime:Date,
    ClearTime:Date
}

export interface operationalCostParams {
    total:number,
    isCleared:boolean
}

export interface securityParams {
    artistTotal:number,
    VenueTotal:number,
    isArtistCleared:boolean,
    isVenueCleared:boolean,
    isArtistWithheld:boolean,
    isVenueWithheld:boolean
}

export interface profitStructureParams {
    contracts:contractStructureParams,

}

export interface contractStructureParams{
    contracts: contractParams[],
    costs:contractsCostsSpeadSheet,

}
export interface contractsCostsSpeadSheet{

}

export interface contractParams {

}
export interface contractsSpreadSheet {

}

export interface withdrawalParams {
    requests:[],
    transactions:[],
    cancelationWithdrawals?:[]
}

export interface cancelationParams {
    isVenueInitiated:boolean,
    isArtistInitiated:boolean,
    time:Date,
    severity:string,
    withdrawalStatus:withdrawalParams,
    isAlerted?:boolean,
    alertStatus?:alertParams,
    isMessedUp:boolean,
    messUpStatus?:messUpParams,
    clearingStatus?:clearingParams,


}

export interface alertParams {
    alerts:[],
    cancelationRequirement:number,
    fixTime:number,


}

export interface messUpParams {
    isArtistIndited:boolean,
    isVenueIndited:boolean,
    isModerationOn:boolean,
    isArtistCulpable:boolean,
    isVenueCulpable:boolean,
    penalties:penaltyParams
}

export interface penaltyParams {
    restitution:number,
    penalty:number,
}

export interface clearingParams {

}


export interface purchasingParams {
    purchaseRequests:purchaseRequestParams[],
    purchaseList:purchaseRequestParams[],

}

export interface purchaseRequestParams {
    userId:string,
    time:Date,
    price:number,
    isWithdrawalExchanged?:boolean,
    isCompleted:boolean
}

export interface withdrawalParams{

}
export interface cancelationParams{

}

export interface purchasingParams {

}
