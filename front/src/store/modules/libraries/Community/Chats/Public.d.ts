import { Chat, chatType, chatParams, moderationSettings, ChatUser, standartMessage } from "./Template";
export declare class PublicChat extends Chat {
    constructor(chatId: string, hostContentId: string, chatTitle: string, hostContentTitle: string, chatType: chatType, audience: number, chatParams: chatParams, moderationSettings: moderationSettings, messages: standartMessage[], chat: standartMessage[]);
    chatId: string;
    hostContentId: string;
    chatTitle: string;
    hostContentTitle: string;
    chatType: chatType;
    audience: number;
    chatParams: chatParams;
    moderationSettings: moderationSettings;
    messages: standartMessage[];
    chat: standartMessage[];
    userList?: ChatUser[];
    admins?: ChatUser[];
}
