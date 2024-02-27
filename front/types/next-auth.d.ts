import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";


declare module "next-auth" {
      export interface User {
        _id:string
        id:string
        core:{
            log:string
            nick:string
            pic?:string
            password:string
            email?:string
            geo:string
        } & DefaultUser
        
    }
      export interface Session {
        userData:{
            _id:string
            id:string
            core:{
                log:string
                nick:string
                pic?:string
                password:string
                email?:string
                geo:string
            }
        }
        & DefaultSession["user"]
    } 


      
    }
    


declare module "next-auth/jwt" {
    interface JWT  {
        _id:string
        id:string
        core:{
            log:string
            nick:string
            pic?:string
            password:string
            email?:string
            geo:string
        }
        & DefaultJWT
}}