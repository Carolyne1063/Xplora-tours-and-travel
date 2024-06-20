// src/controllers/userController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { User } from '../interfaces/users';

const userService = new UserService();

export class UserController {
    createUser(req: Request, res: Response): void {
        try {
            const newUser: User = req.body;
            const createdUser = userService.createUser(newUser);
            res.status(201).json(createdUser);
        } catch (error: any) { // Explicitly type 'error' as 'any' or 'unknown' to resolve TypeScript errors
            res.status(500).json({ message: error.message });
        }
    }

    updateUserById(req: Request, res: Response): void {
        try {
            const userId = req.params.id;
            const updatedUser: User = req.body;
            const result = userService.updateUserById(userId, updatedUser);
            if (result) {
                res.json(result);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error: any) { // Explicitly type 'error' as 'any' or 'unknown' to resolve TypeScript errors
            res.status(500).json({ message: error.message });
        }
    }

    deleteUserById(req: Request, res: Response): void {
        try {
            const userId = req.params.id;
            userService.deleteUserById(userId);
            res.sendStatus(204);
        } catch (error: any) { // Explicitly type 'error' as 'any' or 'unknown' to resolve TypeScript errors
            res.status(500).json({ message: error.message });
        }
    }

    getAllUsers(req: Request, res: Response): void {
        try {
            const allUsers = userService.getAllUsers();
            res.json(allUsers);
        } catch (error: any) { // Explicitly type 'error' as 'any' or 'unknown' to resolve TypeScript errors
            res.status(500).json({ message: error.message });
        }
    }

    getUserById(req: Request, res: Response): void {
        try {
            const userId = req.params.id;
            const user = userService.getUserById(userId);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error: any) { // Explicitly type 'error' as 'any' or 'unknown' to resolve TypeScript errors
            res.status(500).json({ message: error.message });
        }
    }
}

const userController = new UserController();
export default userController;
