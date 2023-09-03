


export interface Vibe {
    contentId:string,
    artist:string,
    artistId:string,
    logo:string,
    title:string,
    modality:string,
    audienceParams:AudienceParams<Aggregation>
}

export interface AudienceParams<Aggregation> {
    total:number;
    aggregated?:Aggregation
}
  export interface Aggregation {
        name:string;
        id:number;
        total:number;
    }


export interface Sync<Option, ChargedOption> extends Vibe {
    options:Option[],
    optionLoadQue:Option[],
    residualTime?:number,
    charge:ChargedOption[],
    bookedOption:null|ChargedOption,
    isSetBack:boolean

}


export interface Option<Date, LineUpQue> {
    venueTitle:string,
    venueId:string,
    isCharged:boolean,
    isIntact:boolean,
    date:Date,
    lineUpQue:LineUpQue,
    price:number

}

export interface Date {
    day:number,
    month:number,
    year:number
}

export interface LineUpUnit {
    artistTitle:string,
    artistId:number,
    soundCheckStart:number,
    soundCheckEnd:number,
    checkOut?:number,
    start:number,
    end:number,
    sequencePosition:number
}

export interface LineUpQue<LineUpUnit> {
    sequence:LineUpUnit[]
}

export interface TimeParams<Date, LineUpQue> {
    date:Date,
    start:number,
    end:number,
    lineUpQue?:LineUpQue
}

export interface chargingParams {
    requests:[],
    approvedRequests:[],
    rejections:[],
    chargeInitiators:number,
    chargeOptimum:number,
    chargeQuantity:number,
    commencedRequests:[],
    commencedInsufficientFunds:[]
}

export interface ChargedOption<chargingParams> extends Option<Date, LineUpQue<LineUpUnit>> {
    venueTitle:string,
    venueId:string,
    isCharged:boolean,
    isIntact:boolean,
    date:Date,
    lineUpQue:LineUpQue<LineUpUnit>,
    price:number,
    chargingStatus:chargingParams,
    isCommenced:boolean,
    isDetonated:boolean
}



export interface Gig<fundingParams> extends Sync<Option<Date,LineUpQue<LineUpUnit>>,ChargedOption<chargingParams>> {
    fixedPrice:number,
    initiatiors:[],
    withdrawals?:withdrawalParams,
    cancelation?:cancelationParams,
    purchasingStatus?:purchasingParams,
    funds:fundingParams
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
    messUpStatus?:messUpParams<penaltyParams>,
    clearingStatus?:clearingParams,


}

export interface alertParams {
    alerts:[],
    cancelationRequirement:number,
    fixTime:number,


}

export interface messUpParams<penaltyParams> {
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

export interface fundingParams<profitStructureParams> {
    TotalRevenue:number,
    core:coreParams,
    revenue: number,
    profit:number,
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

export interface profitStructureParams<contractStructureParams> {
    contracts:contractStructureParams,

}

export interface contractStructureParams<contractsCostsSpeadSheet> {
    contracts: contractParams[],
    costs:contractsCostsSpeadSheet,

}

export interface contractParams {

}
export interface contractsSpreadSheet {

}