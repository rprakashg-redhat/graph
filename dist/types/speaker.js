"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Speaker = void 0;
const nexus_1 = require("nexus");
exports.Speaker = (0, nexus_1.objectType)({
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
