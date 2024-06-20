// src/routes/userRoutes.ts
import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/users', (req, res) => userController.createUser(req, res));
router.put('/users/:id', (req, res) => userController.updateUserById(req, res));
router.delete('/users/:id', (req, res) => userController.deleteUserById(req, res));
router.get('/users', (req, res) => userController.getAllUsers(req, res));
router.get('/users/:id', (req, res) => userController.getUserById(req, res));

export default router;
