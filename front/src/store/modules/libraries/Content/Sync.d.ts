import { vibe } from "./Vibe";
export declare class Date {
    constructor(day: number, month: number, year: number);
    day: number;
    month: number;
    year: number;
}
export declare class LineUpUnit {
    constructor(artistTitle: string, artistId: number, soundCheckStart: number, soundCheckEnd: number, start: number, end: number, sequencePosition: number, checkOut?: number);
    artistTitle: string;
    artistId: number;
    soundCheckStart: number;
    soundCheckEnd: number;
    checkOut?: number;
    start: number;
    end: number;
    sequencePosition: number;
}
export interface LineUpQue<LineUpUnit> {
    sequence: LineUpUnit[];
}
export declare class Option<Date, LineUpQue> {
    constructor(venueTitle: string, venueId: string, isCharged: boolean, isIntact: boolean, date: Date, lineUpQue: LineUpQue, price: number);
    venueTitle: string;
    venueId: string;
    isCharged: boolean;
    isIntact: boolean;
    date: Date;
    lineUpQue: LineUpQue;
    price: number;
}
export interface chargingParams {
    requests: [];
    approvedRequests: [];
    rejections: [];
    chargeInitiators: number;
    chargeOptimum: number;
    chargeQuantity: number;
    commencedRequests: [];
    commencedInsufficientFunds: [];
}
export declare class ChargedOption<chargingParams> extends Option<Date, LineUpQue<LineUpUnit>> {
    constructor(option: Option<Date, LineUpQue<LineUpUnit>>, price: number, chargingStatus: chargingParams, isCommenced: boolean, isDetonated: boolean);
    price: number;
    chargingStatus: chargingParams;
    isCommenced: boolean;
    isDetonated: boolean;
}
export declare class SyncParams<Option, ChargedOption> {
    constructor(options: Option[], optionLoadQue: Option[], charge: ChargedOption[], bookedOption: null | ChargedOption, isSetBack: boolean, residualTime?: number);
    options: Option[];
    optionLoadQue: Option[];
    residualTime?: number;
    charge: ChargedOption[];
    bookedOption: null | ChargedOption;
    isSetBack: boolean;
}
export declare class sync extends vibe {
    constructor(vibe: vibe, syncParams?: SyncParams<Option<Date, LineUpQue<LineUpUnit>>, ChargedOption<chargingParams>>);
    vibe: vibe;
    syncParams?: SyncParams<Option<Date, LineUpQue<LineUpUnit>>, ChargedOption<chargingParams>>;
}
