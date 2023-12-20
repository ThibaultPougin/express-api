'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.app = void 0;
const express_1 = __importDefault(require('express'));
const express_jsdoc_swagger_1 = __importDefault(
    require('express-jsdoc-swagger'),
);
const swagger_json_1 = __importDefault(require('./swagger.json'));
const dotenv_1 = __importDefault(require('dotenv'));
const cors_1 = __importDefault(require('cors'));
const body_parser_1 = __importDefault(require('body-parser'));
const moment_timezone_1 = __importDefault(require('moment-timezone'));
const router_1 = require('./src/router');
dotenv_1.default.config();
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
exports.app = app;
(0, express_jsdoc_swagger_1.default)(app)(swagger_json_1.default);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(router_1.router);
app.use((__request, response) => {
    response
        .status(400)
        .json({ success: 'false', message: `Cette route n'existe pas.` });
});
app.listen(port, () => {
    console.log(
        `[${(0, moment_timezone_1.default)()
            .tz('Europe/Paris')
            .format('DD-MM-YYYY HH:mm:ss')}] Server started on ${
            process.env.BASE_URL
        }`,
    );
});
