import mongoose from "mongoose"

const temporalFrameSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    isTenable:{
        type:Boolean,
        required:true
    },
    start:{
        type:Date,
        required:false
    },
    finish:{
        type:Date,
        required:false
    },
    pricing:{
        perHour:{
            type:Number,
            required:false
        },
        perDay:{
            type:Number,
            required:false
        },
        required:false
    },
    option:{
        venueId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'venue',
            required:false
        },
        artistId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'venue',
            required:false
        },
        yield:{
            wage:{
                type:Number,
                required:false
            },
            advance:{
                type:Number,
                required:false
            },
            share:{
                type:Number,
                required:false
            },
        },
        vibeId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        resonation:{
            optimum:{
                type:Number,
                required:true
            },
            engagement:{
                initial:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                pending:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                insufficient:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                rejected:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                deployed:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                required:false
            },
            
            required:false
        },
        price:{
            type:Number,
            required:true
        },

        required:false

    }
})

const TemporalFrame = mongoose.models.TemporalFrame || mongoose.model('TemporalFrame', temporalFrameSchema) 

export default TemporalFrame