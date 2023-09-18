import { ChatUser } from "../Chats/Template";
import { vibe } from '../../Content/Vibe';
import { sync } from '../../Content/Sync';
import { gig } from "../../Content/Gig";
import { TargetChat } from "../Chats/Target";
export declare class target {
    constructor(id: number, title: string, content: string, funding: targetFundingStream[]);
    id: number;
    title: string;
    content: string;
    funding: targetFundingStream[];
}
export declare class targetFundingStream {
    constructor(type: fundingTypes, quantity: number);
    type: fundingTypes;
    quantity: number;
}
export type fundingTypes = 'wage' | 'advance' | 'Share';
export declare class targetOffer {
    constructor(targets: target[], contractorId: number, hostId: number, advances: number, wages: number, shares: number);
    targets: target[];
    contractorId: number;
    hostId: number;
    spreadSheet: {
        wages: number;
        advances: number;
        shares: number;
    };
    reception: {
        isRecieved: boolean;
        isRejected: boolean;
        isAgreed: boolean;
        isNegotiated: boolean;
    };
}
export declare class targetOfferNegotiations {
    constructor(baseOffer: targetOffer, contractorNegotiators: ChatUser[], hostNegotiators: ChatUser[], initalCounterOffer: targetOffer, chat: TargetChat);
    orinigalTargetOffer: targetOffer;
    contractorId: number;
    hostId: number;
    contractorNegotiators: ChatUser[];
    hostNegotiators: ChatUser[];
    counterOffers: targetOffer[];
    chat: TargetChat;
    addCounterOffer(offer: targetOffer): void;
}
export declare class targetContract extends targetOffer {
    constructor(baseOffer: targetOffer, targetContent: vibe | sync | gig);
    targetContent: vibe | sync | gig;
    isCleared: boolean;
    isMessy: boolean;
    clearingStatus: clearingParams;
}
export interface clearingParams {
    advances?: {
        total: advanceFundingStream[];
        cleared: advanceFundingStream[];
        pending: advanceFundingStream[];
    };
    wages?: {
        total: wageFundingStream[];
        cleared: wageFundingStream[];
        pending: wageFundingStream[];
    };
    shares?: {
        total: shareFundingStream[];
        cleared: shareFundingStream[];
        pending: shareFundingStream[];
    };
}
export declare class advanceFundingStream extends targetFundingStream {
    constructor(stream: targetFundingStream, targetId: string);
    targetId: string;
    isCleared: boolean;
}
export declare class wageFundingStream extends targetFundingStream {
    constructor(stream: targetFundingStream, targetId: string);
    targetId: string;
    isCleared: boolean;
}
export declare class shareFundingStream extends targetFundingStream {
    constructor(stream: targetFundingStream, targetId: string);
    targetId: string;
    isCleared: boolean;
}
