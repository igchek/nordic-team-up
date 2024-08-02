import { CommunityShort } from "@/components/SetUp/VibeSetUp/CommunityInput"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import communities from "./communities"



export interface MediaUpload {
    url:string[]
    file:File[]
}
export interface VibeSetUp {
    content:{
        title:string
        media:{
            header:MediaUpload,
            carousel:{
                header:MediaUpload,
                load:MediaUpload[]
            }
        }
        description:string
    }
    communities:{
        focus:null|CommunityShort
        communities:CommunityShort[]
    }
    

}

export interface ContentSetUp {
    Vibe?:VibeSetUp
    Gig?:{}
    
}


const initialState:ContentSetUp = {}


const setUpSlice = createSlice({
    name:'setUp',
    initialState:initialState,
    reducers:{
        dispatchVibeTemplate:(state, action:PayloadAction<boolean>)=>{
            if(action.payload){
                state.Vibe={
                    content:{
                        title:'',
                        media:{
                            header:{
                                url:[],
                                file:[]
                            },
                            carousel:{
                                header:{
                                    url:[],
                                    file:[]
                                },
                                load:[]
                            }

                        },
                        description:''
                    },
                    communities:{
                        focus:null,
                        communities:[]
                    }
                }
            }
            else state.Vibe=undefined
        },
        setVibeTitle:(state, action:PayloadAction<string>)=>{
            state.Vibe?.content.title!=action.payload
        },
        setVibeHeader:(state, action:PayloadAction<MediaUpload>)=>{
            state.Vibe?.content.media.header!=action.payload
        },
        pushVibeCarouselUnit:(state, action:PayloadAction<MediaUpload>)=>{
            if(state.Vibe){
                if(!state.Vibe.content.media.carousel.header.file.length){
                    state.Vibe.content.media.carousel.header=action.payload
                 }
                 else{
                     state.Vibe.content.media.carousel.load.push(action.payload)
                 }
            }
            
        },
        setVibeCarouselHeader:(state, action:PayloadAction<MediaUpload>)=>{
            if(state.Vibe){
                state.Vibe.content.media.carousel.header=action.payload
            }
        },
        setVibeDescription:(state, action:PayloadAction<string>)=>{
            if(state.Vibe)
            state.Vibe?.content.description!=action.payload
        },
        pushVibeCommunity:(state, action:PayloadAction<CommunityShort>)=>{
            if(state.Vibe){
                state.Vibe.communities.communities.push(action.payload)
                console.log('communities are pushy', state.Vibe.communities.communities)
            }
        },
        focusVibeCommunity:(state, action:PayloadAction<CommunityShort>)=>{
            if(state.Vibe){
                if(!state.Vibe.communities.focus){
                    state.Vibe.communities.focus=action.payload
                }
                else if(state.Vibe.communities.focus.id===action.payload.id)
                    state.Vibe.communities.focus=null
                else if(state.Vibe.communities.focus && state.Vibe.communities.focus.id!==action.payload.id){
                    state.Vibe.communities.focus=action.payload
                }
            }
        },
        updateVibeCommunity:(state, action:PayloadAction<{new:CommunityShort, id:string}>)=>{
            if(state.Vibe){
                console.log('communities are', state.Vibe.communities.communities)
                // console.log('old shit is', state.Vibe.communities.communities.find((c)=>c.id===action.payload.id))
                
                Object.assign<CommunityShort, CommunityShort>(state.Vibe.communities.communities.find((c)=>{c.id===action.payload.id})!,
                action.payload.new
            )
                
            }
        },
        removeSetUpCommunity:(state, action:PayloadAction<CommunityShort>)=>{
            if(state.Vibe){
                state.Vibe.communities.communities=[...state.Vibe.communities.communities.splice(state.Vibe.communities.communities.indexOf(action.payload)-1, 1)]
                state.Vibe.communities.focus=null
            }
        }
        ,
        setLocalization:(state, action:PayloadAction<{value:boolean, id:string}>)=>{
            if(state.Vibe){
                state.Vibe.communities.communities=state.Vibe.communities.communities.map<CommunityShort>((community)=>{
                    if(community.id===action.payload.id){
                        return{
                            ...community,
                            params:{
                                ...community.params,
                                localization:action.payload.value
                            }
                            
                        }
                    }
                    else return community
                })
                
            }
        },
        setInternalModeration:(state, action:PayloadAction<{value:boolean, id:string}>)=>{
            if(state.Vibe){
                state.Vibe.communities.communities=state.Vibe.communities.communities.map<CommunityShort>((community)=>{
                    if(community.id===action.payload.id){
                        return{
                            ...community,
                            params:{
                                ...community.params,
                                internalModeration:action.payload.value
                            }
                            
                        }
                    }
                    else return community
                })
                
            }
        },
        setPublicVisibility:(state, action:PayloadAction<{value:boolean, id:string}>)=>{
            if(state.Vibe){
                state.Vibe.communities.communities=state.Vibe.communities.communities.map<CommunityShort>((community)=>{
                    if(community.id===action.payload.id){
                        return{
                            ...community,
                            params:{
                                ...community.params,
                                internalModeration:action.payload.value
                            }
                            
                        }
                    }
                    else return community
                })
                
            }
        },
        setMediaUpload:(state, action:PayloadAction<{value:boolean, id:string}>)=>{
            if(state.Vibe){
                state.Vibe.communities.communities=state.Vibe.communities.communities.map<CommunityShort>((community)=>{
                    if(community.id===action.payload.id){
                        return{
                            ...community,
                            params:{
                                ...community.params,
                                mediaUpload:action.payload.value
                            }
                            
                        }
                    }
                    else return community
                })
                
            }
        },
        setTemplateOffer:(state, action:PayloadAction<{value:boolean, id:string}>)=>{
            if(state.Vibe){
                state.Vibe.communities.communities=state.Vibe.communities.communities.map<CommunityShort>((community)=>{
                    if(community.id===action.payload.id){
                        return{
                            ...community,
                            params:{
                                ...community.params,
                                templateOffer:action.payload.value
                            }
                            
                        }
                    }
                    else return community
                })
                
            }
        },
        setCommunityChat:(state, action:PayloadAction<{value:boolean, id:string}>)=>{
            if(state.Vibe){
                state.Vibe.communities.communities=state.Vibe.communities.communities.map<CommunityShort>((community)=>{
                    if(community.id===action.payload.id){
                        return{
                            ...community,
                            params:{
                                ...community.params,
                                chat:action.payload.value
                            }
                            
                        }
                    }
                    else return community
                })
                
            }
        },
        setCommunityTitle:(state, action:PayloadAction<{id:string, title:string}>)=>{
            if(state.Vibe){
                state.Vibe.communities.communities=state.Vibe.communities.communities.map<CommunityShort>((community)=>{
                    if(community.id!=action.payload.id)return community 
                    else return {
                        ...community, 
                        title:action.payload.title
                    }
                })
            }
        }
    }
})

export const {
    dispatchVibeTemplate, 
    setVibeTitle, 
    setVibeCarouselHeader, 
    setVibeDescription, 
    setVibeHeader, 
    pushVibeCarouselUnit, 
    pushVibeCommunity, 
    updateVibeCommunity,
    setLocalization,
    setInternalModeration,
    setPublicVisibility,
    setMediaUpload,
    setTemplateOffer,
    setCommunityChat,
    setCommunityTitle,
    removeSetUpCommunity,
    focusVibeCommunity

    } = setUpSlice.actions
export default setUpSlice.reducer