import React from "react";
import { venue } from "../../../../store/modules/libraries/Profiles/Venue";
import { artist } from "../../../../store/modules/libraries/Profiles/Artist";
interface PublicHostUnitI {
    id: string;
    poster: string;
    sourceType: string;
    contentTitle: string;
    sourceTitle: string;
    this: venue | artist;
    modality: string;
    isInvolved: boolean;
}
declare const PublicHostUnit: React.FC<PublicHostUnitI>;
export default PublicHostUnit;
