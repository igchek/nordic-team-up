import React from "react";
interface PublicContentTitlesI {
    modality: string;
    focus: boolean;
    contentTitle: string;
    sourceTitle: string;
}
declare const PublicContentTitles: React.FC<PublicContentTitlesI>;
export default PublicContentTitles;
