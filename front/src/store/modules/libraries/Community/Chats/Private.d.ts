import { Chat, chatType, chatParams, moderationSettings, ChatUser, ModerationRule, standartMessage } from "./Template";
export declare class PrivateChat extends Chat {
    constructor(chatId: string, hostContentId: string, chatTitle: string, hostContentTitle: string, chatType: chatType, audience: number, chatParams: chatParams, moderationSettings: moderationSettings, messages: standartMessage[], inviteParams: inviteParams);
    chatId: string;
    hostContentId: string;
    chatTitle: string;
    hostContentTitle: string;
    chatType: chatType;
    audience: number;
    chatParams: chatParams;
    moderationSettings: moderationSettings;
    messages: standartMessage[];
    userList?: ChatUser[];
    inviteParams: inviteParams;
    privateRules?: ModerationRule[];
}
export interface inviteParams {
}
