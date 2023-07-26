import { Schema, model, models } from 'mongoose';
// import { Int32 } from 'mongodb';

const UserSchema = new Schema({
    userId: {
        type: String,
        unique: [true, 'UserId already exists!'],
        required: [true, 'UserId is required!']
    },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    password:{
        type: String,
        match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'Password invalid, it should contain Minimum eight characters, at least one letter, one number and one special character!']        
    },
    profilePicture: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);

export default User;