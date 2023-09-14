import { ChatUser, chatParams, chatType, standartMessage } from "./Template";
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
        messages:standartMessage[],
        geo:geo,
        userList:ChatUser[]

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
        this.messages=messages
        this.geo=geo
        this.userList=userList

    }
    chatId:string
    hostContentId:string
    chatTitle:string
    hostContentTitle:string
    chatType:chatType
    audience:number
    chatParams:chatParams
    moderationSettings:moderationSettings
    messages:standartMessage[]
    userList:ChatUser[]
    geo:geo
    admins?:ChatUser[]


}


