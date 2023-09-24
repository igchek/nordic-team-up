

export type chatType = 'public' | 'local' | 'private' | 'target'

export abstract class Chat {
    abstract chatId:string
    abstract  hostContentId:string
    abstract  chatTitle:string
    abstract  hostContentTitle:string
    abstract  chatType:chatType
    abstract  audience:number
    abstract  chatParams:chatParams
    abstract  moderationSettings:moderationSettings
    abstract  messages:standartMessage[]

    
}

export interface chatParams {

}

export class ChatUser {
    constructor(
        userId:string,
        userName:string,
        userLogo:string
    ){
        this.userId=userId
        this.userName=userName
        this.userLogo=userLogo
    }

    userId:string;
    userName:string;
    userLogo:string;
    
}

export interface geo {
    position:string
}

export interface moderationSettings {
    isModerated:boolean
    adminList?:ChatUser[]
    ruleList?:ModerationRule[]
}

export class ModerationRule {
    constructor(
        content:string,
        title:string
    ){
        this.content=content
        this.title=title
    }
    content:string
    title:string
}


export abstract class message {
    abstract messageId:string
    abstract emiterId:string
    abstract chatId:string
    abstract date:Date
    abstract time:TimerHandler
    text?:string
    isAReply?:boolean
    repliantId?:string
    isRead?:boolean

}

export class standartMessage extends message {
    constructor(
        messageId:string,
        emiterId:string,
        chatId:string,
        date:Date,
        time:TimerHandler,
        text?:string,
        isAReply?:boolean,
        repliantId?:string,
        isRead?:boolean,
        media?:[]

    ){
        super(
        )
        this.messageId=messageId
        this.emiterId=emiterId
        this.chatId=chatId
        this.date=date
        this.time=time
        this.text=text
        this.isAReply=isAReply
        this.repliantId=repliantId
        this.isRead=isRead
        this.media=media
    }
    
    messageId:string
    emiterId:string
    chatId:string
    date:Date
    time:TimerHandler
    media?:[]

}

export class standartChat extends Chat {
    constructor(
        chatId:string,
        hostContentId:string,
        chatTitle:string,
        hostContentTitle:string,
        chatType:chatType,
        audience:number,
        chatParams:chatParams,
        moderationSettings:moderationSettings,
        messages:standartMessage[]
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



}