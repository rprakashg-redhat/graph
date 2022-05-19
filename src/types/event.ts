import { objectType, enumType, extendType } from "nexus";

export const EventType = enumType({
    name: "EventType",
    members: ["Conference", "Webinar", "Workshop"],
    description: "Type of event"
})

export const Event = objectType({
    name: "Event",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("name");
        t.nonNull.string("description");
        t.nonNull.field("type", {
            type: EventType
        });
        t.nonNull.string("location");
        t.nonNull.list.nonNull.string("audience");
        t.nonNull.list.nonNull.string("topics");
        t.nonNull.list.nonNull.field("sessions", {
            type: "Session",
            resolve(parent, _, context){
                return context.api.getSessionsForEvent(parent.id);
            },
        })
    }
})

export const EventsQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field("events", {
            type: Event,
            resolve(_, __, context){
                return context.api.getEvents();
            }
        })
    }
});