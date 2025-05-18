import type { FastifyInstance } from 'fastify'
import type http from 'node:http'

type AppInstance = FastifyInstance<
	http.Server,
	http.IncomingMessage,
	http.ServerResponse
>

type Maybe<T> = T | null | undefined

export type { AppInstance, Maybe }
