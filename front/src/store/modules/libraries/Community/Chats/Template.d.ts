export type chatType = 'public' | 'local' | 'private' | 'target';
export declare abstract class Chat {
    abstract chatId: string;
    abstract hostContentId: string;
    abstract chatTitle: string;
    abstract hostContentTitle: string;
    abstract chatType: chatType;
    abstract audience: number;
    abstract chatParams: chatParams;
    abstract moderationSettings: moderationSettings;
    abstract messages: standartMessage[];
}
export interface chatParams {
}
export declare class ChatUser {
    constructor(userId: string, userName: string, userLogo: string);
    userId: string;
    userName: string;
    userLogo: string;
}
export interface geo {
    position: string;
}
export interface moderationSettings {
    isModerated: boolean;
    adminList?: ChatUser[];
    ruleList?: ModerationRule[];
}
export declare class ModerationRule {
    constructor(content: string, title: string);
    content: string;
    title: string;
}
export declare abstract class message {
    abstract messageId: string;
    abstract emiterId: string;
    abstract chatId: string;
    abstract date: Date;
    abstract time: TimerHandler;
    text?: string;
    isAReply?: boolean;
    repliantId?: string;
    isRead?: boolean;
}
export declare class standartMessage extends message {
    constructor(messageId: string, emiterId: string, chatId: string, date: Date, time: TimerHandler, text?: string, isAReply?: boolean, repliantId?: string, isRead?: boolean, media?: []);
    messageId: string;
    emiterId: string;
    chatId: string;
    date: Date;
    time: TimerHandler;
    media?: [];
}
export declare class standartChat extends Chat {
    constructor(chatId: string, hostContentId: string, chatTitle: string, hostContentTitle: string, chatType: chatType, audience: number, chatParams: chatParams, moderationSettings: moderationSettings, messages: standartMessage[]);
    chatId: string;
    hostContentId: string;
    chatTitle: string;
    hostContentTitle: string;
    chatType: chatType;
    audience: number;
    chatParams: chatParams;
    moderationSettings: moderationSettings;
    messages: standartMessage[];
}
