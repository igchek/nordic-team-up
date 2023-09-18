import { vibe } from './modules/libraries/Content/Vibe';
import { sync } from './modules/libraries/Content/Sync';
import { gig } from './modules/libraries/Content/Gig';
import { artist } from './modules/libraries/Profiles/Artist';
import { venue } from './modules/libraries/Profiles/Venue';
import { standartChat } from './modules/libraries/Community/Chats/Template';
import { PublicChat } from './modules/libraries/Community/Chats/Public';
import { LocalChat } from './modules/libraries/Community/Chats/Local';
import { PrivateChat } from './modules/libraries/Community/Chats/Private';
import { TargetChat } from './modules/libraries/Community/Chats/Target';
export interface focusLoad {
    focusedContent: null | vibe | sync | gig;
    focusedHost: null | artist | venue;
    isCommunityFocused: boolean;
    focusedChat: null | standartChat | PublicChat | LocalChat | PrivateChat | TargetChat;
}
export declare const setFocusedContent: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<vibe | sync | gig, "focus/setFocusedContent">, setFocusedHost: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<artist | venue, "focus/setFocusedHost">, setFocusedChat: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<standartChat | PublicChat | LocalChat | PrivateChat | TargetChat, "focus/setFocusedChat">, setCommunityFocus: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<boolean, "focus/setCommunityFocus">;
declare const _default: import("redux").Reducer<focusLoad>;
export default _default;
