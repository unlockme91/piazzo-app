const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    topic:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    message:{
        type:String,
        require:true
    },
    expiryTime:{
        type:Date,
        require:true
    },
    status:{
        type:String
    },
    author:{
        type:String
    },
    likes:{
        type:Number,
        default: 0
    },
    dislikes:{
        type:Number,
        default: 0
    },
    comments:{
        type:Array,
        default:[],
        comment:{
            type:String
        },
        name:{
            type:String
        }

    }
})

module.exports = mongoose.model('posts',postSchema)