import { vibe } from "./Vibe";

export class Date {
    constructor (
        day:number,
        month:number,
        year:number
    ){
        this.day=day
        this.month=month
        this.year=year
    }
    day:number;
    month:number;
    year:number
}

export class LineUpUnit {
    constructor(
        artistTitle:string,
        artistId:number,
        soundCheckStart:number,
        soundCheckEnd:number,
        start:number,
        end:number,
        sequencePosition:number,
        checkOut?:number
    ){
        this.artistTitle=artistTitle
        this.artistId=artistId
        this.soundCheckStart=soundCheckStart
        this.soundCheckEnd=soundCheckEnd
        this.start=start
        this.end=end
        this.sequencePosition=sequencePosition
        this.checkOut=checkOut
    }
    artistTitle:string;
    artistId:number;
    soundCheckStart:number;
    soundCheckEnd:number;
    checkOut?:number;
    start:number;
    end:number;
    sequencePosition:number
}

export interface LineUpQue<LineUpUnit> {
    sequence:LineUpUnit[]
}

export class Option<Date, LineUpQue> {
    constructor(
        venueTitle:string,
        venueId:string,
        isCharged:boolean,
        isIntact:boolean,
        date:Date,
        lineUpQue:LineUpQue,
        price:number
    ){
        this.venueTitle=venueTitle
        this.venueId=venueId
        this.isCharged=isCharged
        this.isIntact=isIntact
        this.date=date
        this.lineUpQue=lineUpQue
        this.price=price

    }
    venueTitle:string;
    venueId:string;
    isCharged:boolean;
    isIntact:boolean;
    date:Date;
    lineUpQue:LineUpQue;
    price:number

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


export class ChargedOption<chargingParams> extends Option<Date, LineUpQue<LineUpUnit>> {
    constructor(
        option:Option<Date,LineUpQue<LineUpUnit>>,
        price:number,
        chargingStatus:chargingParams,
        isCommenced:boolean,
        isDetonated:boolean
    ){
        super(
            option.venueTitle,
            option.venueId,
            option.isCharged,
            option.isIntact,
            option.date,
            option.lineUpQue,
            option.price
        )
        this.price=price
        this.chargingStatus=chargingStatus
        this.isCommenced=isCommenced
        this.isDetonated=isDetonated

    }
    price:number;
    chargingStatus:chargingParams;
    isCommenced:boolean;
    isDetonated:boolean
}

export class SyncParams<Option, ChargedOption> {
    constructor(
        options:Option[],
        optionLoadQue:Option[],
        charge:ChargedOption[],
        bookedOption:null|ChargedOption,
        isSetBack:boolean,
        residualTime?:number
    ){
        this.options=options
        this.optionLoadQue=optionLoadQue
        this.charge=charge
        this.bookedOption=bookedOption
        this.isSetBack=isSetBack
        this.residualTime=residualTime
    }
    options:Option[];
    optionLoadQue:Option[];
    residualTime?:number;
    charge:ChargedOption[];
    bookedOption:null|ChargedOption;
    isSetBack:boolean

}

export class sync extends vibe {
    constructor (
        vibe:vibe,
        syncParams?:SyncParams<Option<Date, LineUpQue<LineUpUnit>>,ChargedOption<chargingParams>>
    ){
        super(
            vibe.id,
            vibe.title,
            vibe.author,
            vibe.modality,
            vibe.promoLogo,
            vibe.sourceType,
            vibe.authorLogo,
            vibe.totalAudience
        )
        this.syncParams=syncParams
        this.vibe=vibe
    }
        vibe:vibe;
        syncParams?:SyncParams<Option<Date, LineUpQue<LineUpUnit>>,ChargedOption<chargingParams>>;
}