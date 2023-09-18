import { vibe } from './modules/libraries/Content/Vibe';
import { sync } from './modules/libraries/Content/Sync';
import { gig } from './modules/libraries/Content/Gig';
import { artist } from './modules/libraries/Profiles/Artist';
import { venue } from './modules/libraries/Profiles/Venue';
import { involvedSearchSettings } from './modules/libraries/Profiles/Template';
export interface involvedLoad {
    mockContent: any[];
    content: (vibe | sync | gig | artist | venue)[];
    sortedContent: (vibe | sync | gig | artist | venue)[];
    involvedSearchSettings?: involvedSearchSettings;
}
export declare const pickInvolved: (id: string) => vibe | sync | gig | artist | venue;
export declare const setInvolvedContent: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<[], "involvedContent/setInvolvedContent">, setInvolvolvedSearchSettings: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<[], "involvedContent/setInvolvolvedSearchSettings">;
declare const _default: import("redux").Reducer<involvedLoad>;
export default _default;
