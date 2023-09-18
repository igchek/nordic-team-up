import { ChatUser, chatParams, chatType, standartMessage } from "./Template";
import { Chat, geo, moderationSettings } from "./Template";
export declare class LocalChat extends Chat {
    constructor(chatId: string, hostContentId: string, chatTitle: string, hostContentTitle: string, chatType: chatType, audience: number, chatParams: chatParams, moderationSettings: moderationSettings, messages: standartMessage[], geo: geo, userList: ChatUser[]);
    chatId: string;
    hostContentId: string;
    chatTitle: string;
    hostContentTitle: string;
    chatType: chatType;
    audience: number;
    chatParams: chatParams;
    moderationSettings: moderationSettings;
    messages: standartMessage[];
    userList: ChatUser[];
    geo: geo;
    admins?: ChatUser[];
}
