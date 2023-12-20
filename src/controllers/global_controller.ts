import { Request, Response } from 'express';

const global_controller = {
    api_up: (__request: Request, response: Response) => {
        return response.status(200).json({
            success: true,
            data: `Documentation de l'API : ${process.env.BASE_URL}/api-docs`,
        });
    },
};

export { global_controller };
