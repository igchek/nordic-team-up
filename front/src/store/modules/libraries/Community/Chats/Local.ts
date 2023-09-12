import { ChatUser, chatParams, chatType } from "./Template";
import { Chat, geo, moderationSettings } from "./Template";


export class LocalChat extends Chat {
    constructor (
        chatId:string,
        hostContentId:string,
        chatTitle:string,
        hostContentTitle:string,
        chatType:chatType,
        audience:number,
        chatParams:chatParams,
        moderationSettings:moderationSettings,
        geo:geo

    ){
        super()
        this.chatId=chatId
        this.hostContentId=hostContentId
        this.chatTitle=chatTitle
        this.hostContentTitle=hostContentTitle
        this.chatType=chatType
        this.audience=audience
        this.chatParams=chatParams
        this.moderationSettings=moderationSettings
        this.geo=geo

    }
    userList:ChatUser[]
    geo:geo
    admins?:ChatUser[]


}


