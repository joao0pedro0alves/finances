import * as dotenv from 'dotenv'

import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

dotenv.config()

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })

    await fastify.register(jwt, {
        secret: process.env.SECRET_KEY,
    })

    fastify.get('/', () => {
        return {
            result: 'Hello world',
        }
    })

    await fastify.listen({
        port: process.env.SERVER_PORT,
        host: process.env.SERVER_HOST,
    })
}

bootstrap()
