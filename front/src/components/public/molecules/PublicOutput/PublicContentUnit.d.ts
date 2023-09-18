import React from "react";
import { sync } from "../../../../store/modules/libraries/Content/Sync";
import { gig } from "../../../../store/modules/libraries/Content/Gig";
import { AudienceParams, vibe } from "../../../../store/modules/libraries/Content/Vibe";
interface PublicContentUnitI {
    id: string;
    poster: string;
    sourceType: string;
    contentTitle: string;
    sourceTitle: string;
    audience: AudienceParams;
    modality: string;
    this: vibe | sync | gig;
    isInvolved: boolean;
}
declare const PublicContentUnit: React.FC<PublicContentUnitI>;
export default PublicContentUnit;
