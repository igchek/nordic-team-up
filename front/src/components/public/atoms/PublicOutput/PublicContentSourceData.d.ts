import React from "react";
import { AudienceParams } from "../../../../store/modules/libraries/Content/Vibe";
interface PublicContentSourceData {
    modality: string;
    focus: boolean;
    audience: AudienceParams;
}
declare const PublicContentSourceData: React.FC<PublicContentSourceData>;
export default PublicContentSourceData;
