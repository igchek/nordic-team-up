export class AudienceParams {
    total:number;
    aggregated?:Aggregation
}
    export class Aggregation {
        name:string;
        id:number;
        total:number;
    }

export class vibe {
    constructor (
        id:string,
        title:string,
        author:string,
        AudienceParams:AudienceParams,
        modality:string,
        promoLogo:string,
        sourceType:string,
        authorLogo:string
    ){
        this.id=id
        this.title=title
        this.author=author
        this.AudienceParams=AudienceParams
        this.modality=modality
        this.promoLogo=promoLogo
        this.sourceType=sourceType
        this.authorLogo=authorLogo

    }
    id: string;
    title: string;
    author: string;
    AudienceParams:AudienceParams;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;


}