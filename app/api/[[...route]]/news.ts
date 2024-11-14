import { db } from '@/db/drizzle'
import { newsTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { Hono } from 'hono'

const app = new Hono()
    .get('/:slug',
        async (c) => {
            const slug = c.req.param("slug")

            const [data] = await db
            .select({
                content: newsTable.content,
                image: newsTable.image,
                head: newsTable.header
            })
            .from(newsTable)
            .where(eq(newsTable.slug, slug))

            return c.json({data})
        })

export default app