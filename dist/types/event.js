"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsQuery = exports.Event = exports.EventType = void 0;
const nexus_1 = require("nexus");
exports.EventType = (0, nexus_1.enumType)({
    name: "EventType",
    members: ["Conference", "Webinar", "Workshop"],
    description: "Type of event"
});
exports.Event = (0, nexus_1.objectType)({
    name: "Event",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("name");
        t.nonNull.string("description");
        t.nonNull.field("type", {
            type: exports.EventType
        });
        t.nonNull.string("location");
        t.nonNull.list.nonNull.string("audience");
        t.nonNull.list.nonNull.string("topics");
        t.nonNull.list.nonNull.field("sessions", {
            type: "Session",
            resolve(parent, _, context) {
                return context.api.getSessionsForEvent(parent.id);
            },
        });
    }
});
exports.EventsQuery = (0, nexus_1.extendType)({
    type: 'Query',
    definition(t) {
        t.list.field("events", {
            type: exports.Event,
            resolve(_, __, context) {
                return context.api.getEvents();
            }
        });
    }
});
