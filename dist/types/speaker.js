"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Speaker = void 0;
const schema_1 = require("@nexus/schema");
exports.Speaker = (0, schema_1.objectType)({
    name: "Speaker",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("name");
        t.nonNull.string("title");
        t.nonNull.string("company");
        t.nonNull.string("email");
        t.string("twitter");
        t.string("linkedIn");
    }
});
