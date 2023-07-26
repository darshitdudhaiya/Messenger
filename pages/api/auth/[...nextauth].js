import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider  from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github';
import connect from '../../../utils/connect';
import user from "../../../models/signup";

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITGUB_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials,req){
                try {
                    await connect();
                    const {username, email , password } = credentials;
                    const generateRandomNumber = () => {
                        return Math.floor(Math.random() * 9999) + 1;
                    };
                    
                    const userId = generateRandomNumber();                    
                    const userdata = await user.findOne({email:email});
            
                    if (!userdata) {
                        const newuser = await user.create({userId:userId,username:username,email:email,password:password});
                        return newuser;
                    }
                    if (password !== userdata.password){
                        throw new Error('Password was not match');
                        return false;
                    }   
                    
                    return userdata;
                } catch (error) {
                    console.log(error);
                }
                
            }, 
        }),
    ],
    callbacks:{
        async session({ session }){
            try {
                await connect();
                const generateRandomNumber = () => {
                    return Math.floor(Math.random() * 9999) + 1;
                };
                
                const userId = generateRandomNumber();                   
                const data = await user.findOne({email:session.user.email});
                if(data){
                    session.user.email = data.email;
                    session.user.username = data.username;
                }
                if(!data){
                    const newuser = await user.create({userId:userId,username:session.user.name,email:session.user.email});
                    session.user.email = newuser.email;
                }
                return session;
            } catch (error) {
                console.log(error);
                return false;
            }
        },
    }
})