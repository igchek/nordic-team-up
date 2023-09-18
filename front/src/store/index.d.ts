declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    personal: import("./modules/libraries/Profiles/Template").standartUserProfile;
    involvedContent: import("./involvedContent").involvedLoad;
    publicContent: import("./publicContent").PublicLoad;
    focus: import("./focus").focusLoad;
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    personal: import("./modules/libraries/Profiles/Template").standartUserProfile;
    involvedContent: import("./involvedContent").involvedLoad;
    publicContent: import("./publicContent").PublicLoad;
    focus: import("./focus").focusLoad;
}, import("redux").AnyAction>]>;
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
