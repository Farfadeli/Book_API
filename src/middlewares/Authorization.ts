import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { IUser } from '../interfaces/User';

interface AuthenticatedRequest extends Request {
    user?: {
        userId: string;
        role: string;
    };
}

export const authenticateJWT = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
        const user = await User.findById((decoded as any).userId);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = {
            userId: user.get('userId'), // Access the userId property using the get() method
            role: user.role
        };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

export const authorizeRole = (role: string) => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        next();
    };
};
