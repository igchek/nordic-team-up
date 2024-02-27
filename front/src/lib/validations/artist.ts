import * as z from 'zod'


export const ArtistValidation = z.object({
    contributors:z.array(z.object({_id:z.string()})).optional(),
    description:z.object({
        title:z.string(),
        subtitle:z.object({
            role:z.string(),
            description:z.string()
        }),
        tagLine:z.object({
            selfAdjusted:z.array(z.string()).optional(),
            computed:z.array(z.string()).optional()
        })
    }),
    media:z.object({
        logo:z.string(),
        header:z.string(),
        reel:z.array(z.string()).optional()
    }),
    
})