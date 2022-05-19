import { objectType } from "nexus";

export const Speaker = objectType({
    name: "Speaker",
    definition(t){
        t.nonNull.string("id");
        t.nonNull.string("name");
        t.nonNull.string("title");
        t.nonNull.string("company");
        t.nonNull.string("email");
        t.string("twitter");
        t.string("linkedIn");
    }
});