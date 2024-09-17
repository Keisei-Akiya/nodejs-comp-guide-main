import { NextFunction, Request, Response } from "express";

export const requestErrorHandler = (controller: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
    return async(req: Request, res: Response, next: NextFunction) => {
      try {
        return await controller(req, res, next);
      } catch (err) {
        next(err);
      }
    }
  }
