"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const scheduler_api_1 = __importDefault(require("./datasources/scheduler-api"));
// const baseUrl = "http://scheduler-demos.apps.ocpdemo.sandbox1887.opentlc.com"
const baseUrl = process.env.SCHEDULER_URL;
const api = new scheduler_api_1.default(baseUrl);
// const prisma = new PrismaClient();
const context = ({ req }) => {
    return {
        api,
        //        prisma,
    };
};
exports.context = context;
