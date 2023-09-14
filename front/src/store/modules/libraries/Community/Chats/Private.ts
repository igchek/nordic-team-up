import { Chat, chatType, chatParams, moderationSettings, ChatUser, ModerationRule, standartMessage } from "./Template"




export class PrivateChat extends Chat {
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
        inviteParams:inviteParams
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
        this.inviteParams=inviteParams


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
    userList?:ChatUser[]
    inviteParams:inviteParams
    privateRules?:ModerationRule[]

}

export interface inviteParams {

}

