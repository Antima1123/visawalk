import { Hono } from 'hono'
import { handle } from "hono/vercel"
import news from "./news"
import admin from "./admin"

export const runtime = "edge"

const app = new Hono().basePath("/api")

const routes = app
    .route("/", news)
    .route('/admin', admin)

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes;