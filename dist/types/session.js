"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const schema_1 = require("@nexus/schema");
exports.Session = (0, schema_1.objectType)({
    name: "Session",
    definition(t) {
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
    }
});
