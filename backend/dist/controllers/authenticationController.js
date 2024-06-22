"use strict";
// // src/controllers/authenticationController.ts
// import { Request, Response } from 'express';
// import { AuthenticationService } from '../services/authenticationService';
// import { LoginDetails } from '../interfaces/users';
// const authenticationService = new AuthenticationService();
// export class AuthenticationController {
//     login(req: Request, res: Response): void {
//         try {
//             const loginDetails: LoginDetails = req.body;
//             const user = authenticationService.login(loginDetails);
//             if (user) {
//                 res.json(user);
//             } else {
//                 res.status(401).json({ message: 'Invalid email or password' });
//             }
//         } catch (error: any) {
//             res.status(500).json({ message: error.message });
//         }
//     }
// }
// const authenticationController = new AuthenticationController();
// export default authenticationController;
