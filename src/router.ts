import { Router } from 'express';
import { global_controller } from './controllers/global_controller';

const router = Router();

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
router.get('/api', global_controller.api_up);

export { router };