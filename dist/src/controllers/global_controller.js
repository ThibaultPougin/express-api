'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.global_controller = void 0;
const global_controller = {
    api_up: (__request, response) => {
        return response.status(200).json({
            success: true,
            data: `Documentation de l'API : ${process.env.BASE_URL}/api-docs`,
        });
    },
};
exports.global_controller = global_controller;
