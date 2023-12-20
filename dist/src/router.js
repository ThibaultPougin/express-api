"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const global_controller_1 = require("./controllers/global_controller");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * GET /api
 * @summary Test du fonctionnement de l'API et lien vers la documentation
 * @tags API
 * @return {object} 200 - success response - application/json
 * @example response - 200 - success response example
* {
 *   "success": true,
 *   "message": "Documentation de l'API : https://apiv2.hellio.com/api-docs"
 * }
 */
router.get('/api', global_controller_1.global_controller.api_up);
