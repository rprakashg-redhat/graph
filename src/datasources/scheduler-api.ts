import { HTTPCache, RESTDataSource } from "apollo-datasource-rest"

class SchedulerAPI extends RESTDataSource {
    constructor(url: any){
        super();
        this.baseURL = url;
        this.httpCache = new HTTPCache();
    }
    async getEvents() {
        return this.get(`events`)
    }
    async getSessionsForEvent(eventId: string) {
        return this.get("sessions", {
            "eventId": eventId,
        })
    }
    async getSpeakersForSession(sessionId: string) {
        return this.get("speakers", {
            "sessionId": sessionId
        })
    }
}

export default SchedulerAPI;