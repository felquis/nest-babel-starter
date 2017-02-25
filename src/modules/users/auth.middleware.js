import { HttpException, Middleware } from 'nest.js';
import { UsersService } from "./users.service";

@Middleware()
export class AuthMiddleware {

    constructor(usersService) {
        this.usersService = usersService
    }

    static get dependencies() {
        return [ UsersService ];
    }

    resolve() {
        return (req, res, next) => {
            const userName = req.headers["x-access-token"];
            const users = this.usersService.getUsers();
    
            const user = users.find((user) => user.name === userName);
            if (!user) {
                throw new HttpException('User not found.', 401);
            }
            req.user = user;
            next();
        }
    }

}

