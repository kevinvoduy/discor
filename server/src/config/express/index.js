import express from 'express';
import parser from 'body-parser';
import path from 'path';

const middleware = [
	parser.json(),
	parser.urlencoded ({ extended:  true }),
	express.static(path.resolve(__dirname, '../../../../client/public')),
];

class App {
	constructor() {
		this.express = express();
		this.mountMiddleware();
		// this.mountRoutes();
	}

	mountMiddleware() {
		this.express.use(...middleware);
	}

	// mountRoutes() {
	//   this.express.use('/api', router);
	// }
}

export default new App();