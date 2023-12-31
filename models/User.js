const mongoose = require('mongoose')

const userSchema = mongoose.Schema({ //defining the schema of user deatils
    username:{
        type:String,
        require:true,   //mandatory field
        min:3,          //Minimum length 3 and max 256
        max:256
    },
    email:{
        type:String,
        require:true,
        min:6,
        max:256
    },
    password:{
        type:String,
        require:true,
        min:6,
        max:1024
    },
    Token:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now         // Send current timestamp by default
    }
})
module.exports=mongoose.model('users',userSchema) //mapping the user schema with 'users' collection