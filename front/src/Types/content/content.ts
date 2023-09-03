export interface AudienceParams<Aggregation> {
    total:number;
    aggregated?:Aggregation
}
    export interface Aggregation {
        name:string;
        id:number;
        total:number;
    }

export interface vibe {
    id: number;
    title: string;
    author: string;
    AudienceParams:AudienceParams<Aggregation>;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;


}
export interface sync {
    id: number;
    title: string;
    author: string;
    AudienceParams:AudienceParams<Aggregation>;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;
}
export interface gig {
    id: number;
    title: string;
    author: string;
    AudienceParams:AudienceParams<Aggregation>;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;
}

export interface artist {
    id:number;
    providerTitle:string;
    providerType:string;
    logo: string;
    sourceType:string
}

export interface venue {
    id:number;
    providerTitle:string;
    providerType:string;
    logo:string;
    unitType:string
    sourceType:string
}

export interface PublicSearchSettings {
    indexInput:string;
}



export interface PublicLoad<contentTypes>  {
    content: Array <contentTypes>;
    publicSearchSettings:PublicSearchSettings;
    sortedContent:(contentTypes)[];

}

export type chatType = 'public' | 'local' | 'private' | 'target'

export interface chatParams {
    
}

export interface chat {
    chatId:number,
    hostContentId:number,
    chatTitle:string,
    hostContentTitle:string,
    chatType:chatType,
    audience:number,
    chatParams: chatParams

}

 export type contentTypes = vibe | sync | gig | artist | venue
    
export type publicContent = vibe | sync | gig
export type publicHost = artist | venue