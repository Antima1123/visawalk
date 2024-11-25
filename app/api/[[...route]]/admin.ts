import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { insertNewsTable, newsTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { createId } from "@paralleldrive/cuid2";



const hono = new Hono()
    .post('/',
        zValidator("json", insertNewsTable.pick({
            header:     true,
            image:      true,
            content:    true,
            slug:       true
        })),

        async (c) =>{
            const values = c.req.valid("json")
            if(!values){
                return c.json({error: "missing values"})
            }
            const [data] = await db.insert(newsTable).values({
                id: createId(),
                ...values
            }).returning();
            return c.json({data})
        }
    )

export default hono