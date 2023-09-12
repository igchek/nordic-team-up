import { Chat, chatType, chatParams, moderationSettings, ChatUser, ModerationRule } from "./Template"




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
        inviteParams:inviteParams,
        privateRules?:ModerationRule[]
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
        this.inviteParams=inviteParams


    }
    userList?:ChatUser[]
    inviteParams:inviteParams
    privateRules?:ModerationRule[]

}

export interface inviteParams {

}

