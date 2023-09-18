import { PrivateChat } from "./Private";
import { targetContract, targetOffer, targetOfferNegotiations } from "../Target/Template";
export declare class TargetChat extends PrivateChat {
    constructor(chat: PrivateChat, offers: targetOffer[]);
    offers: targetOffer[];
    contracts?: targetContract[];
    negotiations?: targetOfferNegotiations;
}
