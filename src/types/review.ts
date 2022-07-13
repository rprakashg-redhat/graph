import { objectType } from "nexus";

export const Review = objectType({
    name: "Review",
    definition(t){
        t.nonNull.string("id");
        t.nonNull.string("reviewedBy");
        t.nonNull.string("reviewDate");
        t.nonNull.int("rating");
    }
});
