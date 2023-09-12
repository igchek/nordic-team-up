import { Chat, chatType, chatParams, moderationSettings, ChatUser, standartMessage } from "./Template"




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
        this.chat=chat

    }
    chat:standartMessage[]
    userList?:ChatUser[]
    admins?:ChatUser[]


}

