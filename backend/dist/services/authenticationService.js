"use strict";
// // src/services/authenticationService.ts
// import { UserService } from './userService';
// import { LoginDetails } from '../interfaces/users';
// import { User } from '../interfaces/users';
// export class AuthenticationService {
//     private userService: UserService;
//     constructor() {
//         this.userService = new UserService();
//     }
//     login(loginDetails: LoginDetails): User | null {
//         const users = this.userService.getAllUsers();
//         const user = users.find(user => user.email === loginDetails.email && user.password === loginDetails.password);
//         if (user) {
//             return user;
//         }
//         return null;
//     }
// }
// const authenticationService = new AuthenticationService();
// export default authenticationService;
