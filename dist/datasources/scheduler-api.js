"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class SchedulerAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor(url) {
        super();
        this.baseURL = url;
        this.httpCache = new apollo_datasource_rest_1.HTTPCache();
    }
    async getEvents() {
        return this.get(`events`);
    }
    async getSessionsForEvent(eventId) {
        return this.get("sessions", {
            "eventId": eventId,
        });
    }
    async getSpeakersForSession(sessionId) {
        return this.get("speakers", {
            "sessionId": sessionId
        });
    }
}
exports.default = SchedulerAPI;
