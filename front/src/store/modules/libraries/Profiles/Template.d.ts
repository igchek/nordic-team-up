import { LocalChat } from "../Community/Chats/Local";
import { PrivateChat } from "../Community/Chats/Private";
import { PublicChat } from "../Community/Chats/Public";
import { TargetChat } from "../Community/Chats/Target";
import { geo } from "../Community/Chats/Template";
import { gig } from "../Content/Gig";
import { sync } from "../Content/Sync";
import { vibe } from "../Content/Vibe";
import { artist } from "./Artist";
import { venue } from "./Venue";
export declare abstract class user {
    constructor(profileId: string, profileLog: string, exchangeAPI?: exhangeAPIParams);
    profileId: string;
    profileLog: string;
    exchangeAPI?: exhangeAPIParams;
}
export interface exhangeAPIParams {
}
export declare class standartUserProfile extends user {
    constructor(user: user, password: string, token: string, nick: string, pic: string, profileGeo?: geo);
    password: string;
    token: string;
    profileGeo?: geo;
    profileFlavour: {
        profilePic: string;
        picHistory?: string[];
        profileNick: string;
        profileNote?: string;
        profileLinks?: string[];
        profileMail?: string[];
    };
    involvedContent?: userInvolvedContent;
    involvedChats?: userInvolvedChats;
    vibrationFrequency?: number;
    purchaseHistory?: [];
    crews?: crewMembership[];
}
export interface userInvolvedContent {
    vibes: vibe[];
    syncs?: sync[];
    gigs?: gig[];
    artists?: artist[];
    venues?: venue[];
}
export interface userInvolvedChats {
    public: PublicChat | PublicChat[];
    local?: LocalChat;
    private?: PrivateChat[];
    target?: TargetChat | TargetChat[];
}
export interface involvedSearchSettings {
}
export interface publicSearchSettings {
}
export declare class crewMembership {
    constructor(crewType: crewTypes, crewTitle: string, crewId: string, crewInitialRole?: string);
    crewType: crewTypes;
    crewTitle: string;
    crewId: string;
    crewRole: string[];
    setInitialRole(crewInitialRole: string): void;
}
export type crewTypes = 'artist' | 'venue' | 'target group';
