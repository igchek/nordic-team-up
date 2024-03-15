import type {NextAuthOptions} from 'next-auth';


export const options:NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers:[],
    pages:{}
}