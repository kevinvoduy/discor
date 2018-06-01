import express from 'express';
import parser from 'body-parser';
import path from 'path';
import cors from 'cors';
import compression from 'compression';
import router from '../../config/routes';

const middleware = [
	compression(),
	parser.json(),
	parser.urlencoded ({ extended:  true }),
	cors({
		allowedHeaders: 'Content-Type, authorization',
		methods: ['GET, POST, PUT, DELETE', 'OPTIONS']
	}),
	express.static(path.resolve(__dirname, '../../../../client/public')),
];

class App {
	constructor() {
		this.express = express();
		this.mountMiddleware();
		this.mountRoutes();
	}

	mountMiddleware() {
		this.express.use(...middleware);
	}

	mountRoutes() {
		this.express.use('/api', router);
	}
}

export default new App();