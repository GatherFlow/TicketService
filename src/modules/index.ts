import type { Routes } from '@/core/types/routes.js'

export const getRoutes = (): Routes => {
	return {
		routes: [
			{
				method: 'GET',
				url: '/health',
				handler: (_, reply) => {
					const data = {
						uptime: process.uptime(),
						message: 'Healthy!',
						data: new Date(),
					}

					return reply.status(200).send(data)
				},
			},
		],
	}
}
