"use server"

import mongoose from "mongoose";

interface idObject {
    _id:mongoose.Schema.Types.ObjectId
}
interface vibeCreateParams{
    core:{
        creator:idObject,
        contentTitle:string,
        tagList:{
            ascribed:[{
            type:String,
            ref:'Tag'
                }],
                
            computed:[{
                type:String,
                ref:'Tag'
            }]
            },
        format:{
            type:String,
            required:false
        },
        required:true
        },
}


