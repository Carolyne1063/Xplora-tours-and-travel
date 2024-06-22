"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post('/register', userController_1.registerUser);
router.post('/login', userController_1.loginUserController);
router.put('/:userId', userController_1.updateUserController); // Use userId in path
router.delete('/:userId', userController_1.deleteUserController); // Use userId in path
router.get('/', userController_1.getUsers);
router.get('/:userId', userController_1.getUser); // Use userId in path
exports.default = router;
