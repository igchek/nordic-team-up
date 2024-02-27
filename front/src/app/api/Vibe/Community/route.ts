import { communitiesCoreData, fetchCommunities } from "@/lib/actions/community/comunity.actions"
import {NextResponse} from 'next/server'

export async function GET(request:any){
    const {vibeId, userId} = await request.json()
    const communities:communitiesCoreData = await fetchCommunities({vibeId, userId})
    return NextResponse.json({communities}, {status:200})
}