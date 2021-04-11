const util = require('util')
const request = require("request");
const url = 'https://api.nasa.gov/insight_weather/?api_key=eTitgeQIgcVYEqKbEfToPyG1r1GVVbaV4SKC7vwe&feedtype=json&ver=1.0'

module.exports = () => {
const requestPromise = util.promisify(request);
const response = await requestPromise('https://www.google.com');
	return response;
}
