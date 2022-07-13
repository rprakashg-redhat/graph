import SchedulerAPI from "./datasources/scheduler-api"
import { Request } from "express";
//import { ReviewsDB } from "./datasources/reviews-db";

export interface Context {
    api: SchedulerAPI
    //db: ReviewsDB
}
const baseUrl = process.env.SCHEDULER_URL;
const api = new SchedulerAPI(baseUrl)
//const db = new ReviewsDB();

export const context = ({ req }: { req: Request }): Context => {
    return {
        api,
//        db
    }
}
