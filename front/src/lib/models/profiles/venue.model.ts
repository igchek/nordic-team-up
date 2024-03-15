import mongoose from "mongoose";
import { vibeData } from "../content/vibe.models";
import { GigData } from "../content/gig.models";
import { transactionData } from "../discrete/transaction.models";
import { userData } from "./user.models";
import { temporalFrameData } from "../discrete/temporalFrame.models";
import { mediaData } from "../discrete/media.models";


export interface VenueData {
    _id:string
    contributors:{
        owners:(mongoose.Schema.Types.ObjectId|userData)[]
        managers:(mongoose.Schema.Types.ObjectId|userData)[]
    }
    deploymentParams:{
        physical:{
            capacity:{
                minimal:number
                maximal:number
            }
            age:{
                minimal:number
                maximal:number
            }
        }
        temporal:{
            template:{
                monday:{
                    isTenable:boolean
                    start:Date
                    finish:Date
                }
                tuesday:{
                    isTenable:boolean
                    start:Date
                    finish:Date
                }
                wednsday:{
                    isTenable:boolean
                    start:Date
                    finish:Date
                }
                thursday:{
                    isTenable:boolean
                    start:Date
                    finish:Date
                }
                friday:{
                    isTenable:boolean
                    start:Date
                    finish:Date
                }
                saturday:{
                    isTenable:boolean
                    start:Date
                    finish:Date
                }
                sunday:{
                    isTenable:boolean
                    start:Date
                    finish:Date
                }
            }
            specific:(mongoose.Schema.Types.ObjectId|temporalFrameData)[]
            hosted:(mongoose.Schema.Types.ObjectId|temporalFrameData)[]
        }
        technical:Object
        financial:{
            template:{
                perHour:number
                perDay:number
            }
            adjustment:(mongoose.Schema.Types.ObjectId|temporalFrameData)[]
        }
    }
    deployment:{
        external:{
            vibes:(mongoose.Schema.Types.ObjectId|vibeData)[]
            gigs:(mongoose.Schema.Types.ObjectId|GigData)[]
        }
        internal:{
            vibes:(mongoose.Schema.Types.ObjectId|vibeData)[]
            gigs:(mongoose.Schema.Types.ObjectId|GigData)[]
        }
    }
    description:{
        title:string
        subtitle?:{
            role:string
            description:string
        }
        tagLine:{
            selfAdjusted:string[]
            computed:string[]
        }
    }
    media:{
        logo:string
        header:string
        reel:string[]
    }
    balanceSheet:{
        assets:{
            deposited:{
                quantity:number
                gigs:string[]
                transactions:(mongoose.Schema.Types.ObjectId|transactionData)[]
            }
            pending:{
                quantity:number
                gigs:string[]
                transactions:(mongoose.Schema.Types.ObjectId|transactionData)[]
            }
        }
        obligations:{
            deposited:{
                quantity:number
                gigs:string[]
                transactions:(mongoose.Schema.Types.ObjectId|transactionData)[]
            }
            pending:{
                quantity:number
                gigs:string[]
                transactions:(mongoose.Schema.Types.ObjectId|transactionData)[]
            }
        }
    }
}



const venueSchema = new mongoose.Schema({
    contributors:{
        type:Object,
        owners:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }],
        managers:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }],
        required:[true, 'stuff is required']
    },

    deploymentParams:{
        physical:{
            type:Object,
            capacity:{
                type:Object,
                minimal:{
                    type:Number,
                    
                    default:0
                },
                maximal:{
                    type:Number,
                    
                },
                
                
            },
            age:{
                type:Object,
                minimal:{
                    type:Number,
                    
                    default:16
                },
                maximal:{
                    type:Number,
                    
                },
                
            }

        },
        temporal:{
            type:Object,
            template:{
                type:Object,
                monday:{
                    type:Object,
                    isTenable:{
                        type:Boolean,
                        required:[true, 'stuff is required'],
                        default:true
                    },
                    start:{
                        type:Date,
                        
                    },
                    finish:{
                        type:Date,
                        
                    }
                },
                tuesday:{
                    type:Object,
                    isTenable:{
                        type:Boolean,
                        required:[true, 'stuff is required'],
                        default:true
                    },
                    start:{
                        type:Date,
                        
                    },
                    finish:{
                        type:Date,
                        
                    }
                },
                wednsday:{
                    type:Object,
                    isTenable:{
                        type:Boolean,
                        required:[true, 'stuff is required'],
                        default:true
                    },
                    start:{
                        type:Date,
                        
                    },
                    finish:{
                        type:Date,
                        
                    },
                    
                },
                thursday:{
                    type:Object,
                    isTenable:{
                        type:Boolean,
                        required:[true, 'stuff is required'],
                        default:true
                    },
                    start:{
                        type:Date,
                        
                    },
                    finish:{
                        type:Date,
                        
                    },
                    
                },
                friday:{
                    type:Object,
                    isTenable:{
                        type:Boolean,
                        required:[true, 'stuff is required'],
                        default:true
                    },
                    start:{
                        type:Date,
                        
                    },
                    finish:{
                        type:Date,
                        
                    },
                    
                },
                saturday:{
                    type:Object,
                    isTenable:{
                        type:Boolean,
                        required:[true, 'stuff is required'],
                        default:true
                    },
                    start:{
                        type:Date,
                        
                    },
                    finish:{
                        type:Date,
                        
                    },
                    
                },
                sunday:{
                    type:Object,
                    isTenable:{
                        type:Boolean,
                        required:[true, 'stuff is required'],
                        default:true
                    },
                    start:{
                        type:Date,
                        
                    },
                    finish:{
                        type:Date,
                        
                    },
                    
                }
            },
            specific:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'temporal frame'
            }],
            hosted:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'temporal frame'
            }]
        },
        technical:[{
            // TODO: gig build bricks be here. Just like time frames
            type:mongoose.Schema.Types.ObjectId,
            ref:'tech'
        }],
        financial:{
            type:Object,
            template:{
                type:Object,
                perHour:{
                    type:Number,
                    
                },
                perDay:{
                    type:Number,
                    
                },
                
            },
            adjustment:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'temporal frame'
            }]
        },
        

    },

    deployment:{
        type:Object,
        external:{
            type:Object,
            vibes:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'vibe'
            },
            gigs:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'gig'
            },
            
        },
        internal:{
            type:Object,
            vibes:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'vibe'
            }],
            gigs:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'gig'
            }],
            
        },
        
    },


    description:{
        type:Object,
        title:{
            type:String,
            required:[true, 'stuff is required']
        },
        subtitle:{
            type:Object,
            role:{
                type:String,
                
            },
            description:{
                type:String,
                
            },
            
        },
        tagLine:{
            type:Object,
            selfAdjusted:[{
                type:String,
                ref:'tag'
            }],
            computed:[{
                type:String,
                ref:'tag'
            }],
            
        },
        required:[true, 'description is required']

    },
    media:{
        type:Object,
        logo:{
            type:String,
            required:[true, 'logo is required'],
            default:'default'
        },
        header:{
            type:String,
            
            default:'default'
        },
        reel:[{
            type:String,
        }],
        required:[true, 'media is required']
    },

    balanceSheet:{
        type:Object,
        assets:{
            type:Object,
            deposited:{
                type:Object,
                quantity:{
                    type:Number,
                    
                },
                gigs:[{
                    type:String,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                
                default:0

            },
            pending:{
                type:Object,
                quantity:{
                    type:Number,
                    
                },
                gigs:[{
                    type:String,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                
                default:0

            },
            
            },
        obligations:{
            type:Object,
            deposited:{
                type:Object,
                quantity:{
                    type:Number,
                    
                },
                gigs:[{
                    type:String,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                
                default:0

            },
            pending:{
                type:Object,
                quantity:{
                    type:Number,
                    
                },
                gigs:[{
                    type:String,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                
                default:0

            },
            
        }
    }



})




const Venue = mongoose.models.Venue || mongoose.model('Venue', venueSchema)
export default Venue