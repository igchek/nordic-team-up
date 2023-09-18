import { vibe } from './modules/libraries/Content/Vibe';
import { sync } from './modules/libraries/Content/Sync';
import { gig } from './modules/libraries/Content/Gig';
import { artist } from './modules/libraries/Profiles/Artist';
import { venue } from './modules/libraries/Profiles/Venue';
import { publicSearchSettings } from './modules/libraries/Profiles/Template';
export interface PublicLoad {
    mockContent: any[];
    content: (vibe | sync | gig | artist | venue | null)[];
    publicSearchSettings?: publicSearchSettings;
    sortedContent: (vibe | sync | gig | artist | venue | null)[];
}
export declare const setPublicContent: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<[], "public Content/setPublicContent">, setPublicSearchSettings: import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<"public Content/setPublicSearchSettings">, setSortByGigPreset: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<boolean, "public Content/setSortByGigPreset">, setSortBySyncPreset: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<boolean, "public Content/setSortBySyncPreset">, setSortByVibePreset: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<boolean, "public Content/setSortByVibePreset">, setSortByVenuePreset: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<boolean, "public Content/setSortByVenuePreset">, setSortByArtistPreset: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<boolean, "public Content/setSortByArtistPreset">, setMocks: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"public Content/setMocks">;
declare const _default: import("redux").Reducer<PublicLoad>;
export default _default;
