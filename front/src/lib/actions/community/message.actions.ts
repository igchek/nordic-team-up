"use server"

import mongoose from "mongoose";
import Message from "../../models/community/message.models";
import Media from "../../models/discrete/media.models";
import Community from "../../models/community/community.models";



export interface mediaIdI{
    _id:mongoose.Schema.Types.ObjectId
}

export interface mediaI{
    title:String
    type:String
}
export interface MessageI{
    core:{
        communityId:mongoose.Schema.Types.ObjectId
        emitterId:mongoose.Schema.Types.ObjectId
        date:Date
    }
    content:{
        textContent?:String
        mediaContent?:mediaI[]
        reply?:mongoose.Schema.Types.ObjectId
        edit:{
            isEdited:Boolean
            Date?:Date
        }


    }
    response?:{
        likes?:{
            quantity:Number
            conveyers:mongoose.Schema.Types.ObjectId[]
        }
    }

}

export async function postMessage ({core, content, response}:MessageI){
    try{
        const defaultContent = {
            textContent:content.textContent,
            mediaContent:[],
            reply:content.reply
        }

        const createdMessage = await Message.create({
            core,
            defaultContent,
            response
        })

        if (content.mediaContent){
            for (let chunk of content.mediaContent){
                let createdMedia = await Media.create({
                    title:chunk.title,
                    type:chunk.type
                })
                await createdMessage.content.mediaContent.push({_id:createdMedia._id})
            }
            await createdMessage.save()
            let community = await Community.findOne({_id:core.communityId})
            await community.contents.messages.push({_id:createdMessage._id}).exec()
            return createdMessage 
        }

        return createdMessage

       

        }
    catch(error:any){
        throw new Error(`crashed creating message: ${error.message}`)
    }
}

export async function pushLike(id:mongoose.Schema.Types.ObjectId){
    const message = await Message.findOne({_id:id})
    const emiter = await message.emiterId

    message.response.likes.quantity++
    message.response.likes.conveyers.push({_id:emiter})
    await message.save()
}

export async function editMessage(id:mongoose.Schema.Types.ObjectId, updatedText:String){
    const message = await Message.findOneAndUpdate({_id:id},{textContent:updatedText}, {new:true} )
    message.content.edit.isEdited = true
    const editDate = new Date
    message.content.edit.date = editDate
    await message.save()
    return message
}

export async function deleteMessages(ids:mongoose.Schema.Types.ObjectId[]){
    for (let id of ids){
        await Message.findOneAndDelete({_id:id})
    }
}



