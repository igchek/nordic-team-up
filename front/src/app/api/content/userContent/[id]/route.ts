import { fetchInvolvedVibes } from "@/lib/actions/profiles/user.actions"
import { vibeData } from "@/lib/models/content/vibe.models"



export async function GET({params}:{params:{id:string}}){
    const {id} = params
    const vibes:vibeData[] = await fetchInvolvedVibes(id)
    return vibes


}