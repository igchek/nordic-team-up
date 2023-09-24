import { Vibrations } from "../Profiles/Artist";




export class vibe {
    constructor (
        id:string,
        title:string,
        author:string,
        modality:string,
        promoLogo:string,
        sourceType:string,
        authorLogo:string,
        totalAudience:number,
    ){
        this.id=id
        this.title=title
        this.author=author
        this.totalAudience=totalAudience
        this.modality=modality
        this.promoLogo=promoLogo
        this.sourceType=sourceType
        this.authorLogo=authorLogo
        

    }
    id: string;
    title: string;
    author: string;
    totalAudience:number;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;
    vibrations?:Vibrations;


}