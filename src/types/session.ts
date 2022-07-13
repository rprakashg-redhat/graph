import { objectType } from "nexus";

export const Session = objectType({
    name: "Session",
    definition(t){
        t.nonNull.string("id");
        t.nonNull.string("title");
        t.nonNull.string("description");
        t.nonNull.string("start");
        t.nonNull.string("end");
        t.nonNull.list.nonNull.field("speakers", {
            type: "Speaker",
            resolve(parent, _, context) {
                return context.api.getSpeakersForSession(parent.id);
            },
        });
        t.nonNull.list.nonNull.field("reviews", {
            type: "Review",
            resolve(parent, _, context) {
                return context.db.getReviewsForSession(parent.id);
            },
        });
    }
});