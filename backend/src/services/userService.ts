// src/services/userService.ts
import { User } from '../interfaces/users';
import { v4 as uuidv4 } from 'uuid';

let users: User[] = [];

export class UserService {
    createUser(newUser: User): User {
        const user: User = {
            ...newUser,
            id: uuidv4(),
            createdAt: new Date().toISOString(),
        };
        users.push(user);
        return user;
    }

    updateUserById(id: string, updatedUser: User): User | undefined {
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedUser };
            return users[index];
        }
        return undefined;
    }

    deleteUserById(id: string): void {
        users = users.filter(u => u.id !== id);
    }

    getAllUsers(): User[] {
        return users;
    }

    getUserById(id: string): User | undefined {
        return users.find(u => u.id === id);
    }
}
