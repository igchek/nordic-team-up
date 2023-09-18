import { standartUserProfile } from './modules/libraries/Profiles/Template';
import { geo } from './modules/libraries/Community/Chats/Template';
export declare const setGeo: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<geo, "personal/setGeo">, setMail: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "personal/setMail">, setPassword: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "personal/setPassword">, setUserLog: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "personal/setUserLog">, setUserNick: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "personal/setUserNick">, setProfile: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<standartUserProfile, "personal/setProfile">;
declare const _default: import("redux").Reducer<standartUserProfile>;
export default _default;
