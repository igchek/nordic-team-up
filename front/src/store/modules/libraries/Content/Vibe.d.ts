import { Vibrations } from "../Profiles/Artist";
export interface AudienceParams {
    total: number;
    vibes?: Vibrations;
}
export declare class vibe {
    constructor(id: string, title: string, author: string, AudienceParams: AudienceParams, modality: string, promoLogo: string, sourceType: string, authorLogo: string);
    id: string;
    title: string;
    author: string;
    AudienceParams: AudienceParams;
    modality: string;
    promoLogo: string;
    sourceType: string;
    authorLogo: string;
}
