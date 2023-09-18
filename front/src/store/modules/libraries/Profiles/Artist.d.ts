import { geo } from "../Community/Chats/Template";
import { gig } from "../Content/Gig";
import { Date, LineUpQue, LineUpUnit, Option, sync } from "../Content/Sync";
import { exhangeAPIParams, user } from "./Template";
export declare class artist {
    constructor(id: string, providerTitle: string, providerType: string, logo: string, sourceType: string);
    id: string;
    providerTitle: string;
    providerType: string;
    logo: string;
    sourceType: string;
    vibes?: VibratingContent[];
    funds?: artistFinancialInterface;
    collectiveInterface?: collectiveArtistInterface;
}
export declare abstract class vibeTemplate {
    abstract title: string;
    abstract poster: string;
    abstract format: TemplateFormats | string;
}
export type TemplateFormats = 'concert' | 'stand up';
export declare class vibeCore extends vibeTemplate {
    constructor(vibeTemplate: vibeTemplate, emiterId: string, lineUp?: lineUpSummaryUnit[], description?: string, tags?: string[], media?: vibeMediaInterface | vibeMediaInterface[]);
    title: string;
    poster: string;
    format: string;
    emiterId: string;
    lineUp?: lineUpSummaryUnit[];
    description?: string;
    tags?: string[];
    media?: vibeMediaInterface | vibeMediaInterface[];
}
export interface lineUpSummaryUnit {
    artistId: string;
    artistLogo: string;
    artistTitle: string;
    artistDescription?: string;
}
export interface vibeMediaInterface {
    mediaReel: string[];
    emiterId: string;
}
export declare class Vibrations {
    constructor(totalAmmount: number, inputUserIds: string[], geoAllocation?: geoAllocation[]);
    totalAmmount: number;
    inputUserIds: string[];
    geoAllocation?: geoAllocation[];
}
export declare class geoAllocation {
    constructor(geo: geo, totalAmmount: number, inputUserIds: string[]);
    geo: geo;
    totalAmmount: number;
    inputUserIds: string[];
    frequencyAllocation: frequencyAllocation[];
    resonator?: number;
    setFrequencyAllocation(): frequencyAllocation[];
    setResonator(frAl: frequencyAllocation[]): void;
}
export declare class frequencyAllocation {
    constructor(frequency: number, audience: number);
    frequency: number;
    audience: number;
}
export declare class VibratingContent extends vibeCore {
    constructor(vibeTemplate: vibeTemplate, vibeCore: vibeCore, vibrations: Vibrations);
    isVibrating: boolean;
    vibrations: Vibrations;
    syncDrafts?: syncDraft[];
    syncs?: sync[];
    gigs?: gig[];
    setVibrationEmission(arg: boolean): void;
}
export declare class syncDraft {
    constructor(vibrationsSection: geoAllocation, initialOption: Option<Date, LineUpQue<LineUpUnit>>);
    vibrationsSection: geoAllocation;
    requestedOptions: Option<Date, LineUpQue<LineUpUnit>>[];
    intactOptions?: Option<Date, LineUpQue<LineUpUnit>>[];
}
export interface artistFinancialInterface {
    generalSpreadSheet: {
        assets: {
            total: number;
            cleared?: number;
            secured?: number;
        };
        liabilities?: number;
    };
    UnitSpreadSheet?: {
        Gigs: gigArtistFinancialInterface[];
        Liabilities?: liabilityArtistFinancialInterface[];
        Assets: assetArtistFinancialInterface[];
    };
    ProfitDistribution?: {};
    ShareDistribution?: {};
}
export interface gigArtistFinancialInterface {
}
export interface liabilityArtistFinancialInterface {
}
export interface assetArtistFinancialInterface {
}
export interface collectiveArtistInterface {
    crew: crewMember[];
    shares: shareInterfaceArtist;
    rights: rightsInterfaceArtist;
}
export declare class crewMember extends user {
    constructor(id: string, log: string, ex?: exhangeAPIParams);
    role?: string;
}
export interface shareInterfaceArtist {
}
export declare class crewmemberShare {
    constructor(id: string, log: string, nickname: string, shares: share[]);
    id: string;
    log: string;
    nickname: string;
    'type': 'quantity';
    setShareSheet(shares: share[]): void;
}
export declare class share {
    constructor(type: shareTypes, quantity: number);
    type: shareTypes;
    quantity: number;
}
export type shareTypes = 'profit' | 'operational cost' | 'revenue';
export interface rightsInterfaceArtist {
}
