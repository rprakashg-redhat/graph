import SchedulerAPI from "./datasources/scheduler-api"
//import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export interface Context {
    api: SchedulerAPI
//    prisma: PrismaClient
}
const baseUrl = "http://scheduler-demos.apps.ocpdemo.sandbox1887.opentlc.com"
const api = new SchedulerAPI(baseUrl)
//const prisma = new PrismaClient();

export const context = ({ req }: { req: Request }): Context => {
    return {
        api,
//        prisma,
    }
}
