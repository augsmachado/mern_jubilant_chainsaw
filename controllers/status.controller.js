import pkg from "uuid";

const { v4: uuidv4 } = pkg;
export default class StatusController {
	static async getStatus(req, res) {
		try {
			let response = {
				msg: "Welcome to Bacen Report API!",
				name: "bacen-report-api",
				environment: "production",
				version: "1.0.0",
				uptime: new Date().getTime(),
				hash: uuidv4(),
			};

			res.json(response);
		} catch (err) {
			console.error(`Unable to request API status: ${err}`);
		}
	}
}
