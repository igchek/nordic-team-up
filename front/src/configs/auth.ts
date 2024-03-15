import User from '@/lib/models/profiles/user.models';
import { connectToDB } from '@/lib/validations/mongoose';
import type {AuthOptions} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt';

export const authConfig:AuthOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_SECRET!
        }),
        Credentials({
            credentials:{
                nick:{label:'nickname', type:'name', required:true},
                email:{label:'email', type:'email',required:false},
                pic:{label:'pic', type:'image', required:true},
                password:{label:'password', type:'password',required:true}
            },
            async authorize(credentials){
                try {
                    await connectToDB()
                    const { nick, pic, password} = credentials as {email?:string, nick:string,pic:string, password:string}
                    const user = await User.findOne({'core.nick':nick}).exec()
                    const isPasswordEqual = await bcrypt.compare(password, user.core.password)
                    if(user && isPasswordEqual) return user
                    return null
                } catch (error:any) {
                    throw new Error(`crashed authorizing user:${error.message}`)
                }
            }
        })
    ],
    session:{
        strategy:'jwt'
    },
    callbacks:{
         session:async({ session, token }) =>{
            
                if(token){
                    session.userData = {
                        _id:'null',
                        id:'null',
                        core:{                               
                            log:'null',
                            nick:'null',
                            pic:'default',
                            password:'null',
                            email:'null',
                            geo:'null'
                        }
                    }
                    session.userData._id=token._id
                    session.userData.id=token.id
                    session.userData.core={
                        log:token.core.log,
                        nick:token.core.nick,
                        pic:token.core.pic,
                        password:token.core.password,
                        email:token.core.email,
                        geo:token.core.geo,
                    }
                    
                    return session
                }
                    
                
           
            
            return session
          },
         async jwt({ user, token }){
            try {
                if(user){
                    token.name=user.core.nick
                    token.email=user.core.email
                    token._id=user._id
                    token.id=user.id
                    token.core={
                        log:user.core.log,
                        nick:user.core.nick,
                        pic:user.core.pic,
                        password:user.core.password,
                        email:user.core.email,
                        geo:user.core.geo
                        
                    }
                    return token
                }
                
            } catch (error:any) {
                throw new Error(`crashed at jwt callback in auth:${error.message}`)
            }
            return token
         }
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/SignIn",
    }
    
}
