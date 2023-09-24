import { Chat, chatType, chatParams, moderationSettings, ChatUser, standartMessage, message } from "./Template"




export class PublicChat extends Chat {
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
        chat:standartMessage[]
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
        this.chat=chat

    }

    chatId:string
    hostContentId:string
    chatTitle:string
    hostContentTitle:string
    chatType:chatType
    audience:number
    chatParams:chatParams
    moderationSettings:moderationSettings
    messages: standartMessage[]
    chat:standartMessage[]
    userList?:ChatUser[]
    admins?:ChatUser[]


}

