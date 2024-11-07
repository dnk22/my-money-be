/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const auth_module_1 = __webpack_require__(6);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule,],
        controllers: [],
        providers: [],
    })
], AppModule);


/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";
module.exports = require("tslib");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const auth_controller_1 = __webpack_require__(7);
const auth_service_1 = __webpack_require__(8);
const passport_1 = __webpack_require__(9);
const jwt_1 = __webpack_require__(10);
const jwt_strategy_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './strategies/jwt.strategy'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const anonymous_strategy_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './strategies/anonymous.strategy'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const jwt_refresh_strategy_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './strategies/jwt-refresh.strategy'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const mail_module_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../mail/mail.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const session_module_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../session/session.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const users_module_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../users/users.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            session_module_1.SessionModule,
            passport_1.PassportModule,
            mail_module_1.MailModule,
            jwt_1.JwtModule.register({}),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, jwt_refresh_strategy_1.JwtRefreshStrategy, anonymous_strategy_1.AnonymousStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 7 */
/***/ (() => {



/***/ }),
/* 8 */
/***/ (() => {



/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/passport");

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/jwt");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    // swagger config 
    const config = new swagger_1.DocumentBuilder()
        .setTitle('My Money API Document')
        .setDescription('The My Money API description')
        .setVersion('1.0')
        .addTag('my-money')
        .addBearerAuth()
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;