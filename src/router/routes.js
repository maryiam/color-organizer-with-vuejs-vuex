"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = tslib_1.__importDefault(require("vue"));
const vue_router_1 = tslib_1.__importDefault(require("vue-router"));
const Home_vue_1 = tslib_1.__importDefault(require("@views/Home.vue"));
vue_1.default.use(vue_router_1.default);
exports.default = new vue_router_1.default({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home_vue_1.default
        },
        {
            path: '/*',
            name: 'notfound',
            component: () => Promise.resolve().then(() => tslib_1.__importStar(require('@views/404.vue')))
        }
    ]
});
//# sourceMappingURL=routes.js.map