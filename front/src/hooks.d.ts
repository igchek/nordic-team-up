import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from './store/index';
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    personal: import("./store/modules/libraries/Profiles/Template").standartUserProfile;
    involvedContent: import("./store/involvedContent").involvedLoad;
    publicContent: import("./store/publicContent").PublicLoad;
    focus: import("./store/focus").focusLoad;
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
