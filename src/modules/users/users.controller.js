import { RequestMethod, Controller, RequestMapping } from "nest.js";
import { UsersService } from "./users.service";

@Controller({ path: 'users' })
export class UsersController {

    constructor(usersService) {
        this.usersService = usersService;
    }

    static get dependencies() {
        return [ UsersService ];
    }

    @RequestMapping()
    async getAllUsers(req, res) {
        const users = await this.usersService.getAllUsers();
        res.status(200).json(users);
    }

    @RequestMapping({ path: '/:id' })
    async getUser(req, res) {
        const user = await this.usersService.getUser(req.params.id);
        res.status(200).json(user);
    }

    @RequestMapping({ method: RequestMethod.POST })
    async addUser(req, res) {
        const msg = await this.usersService.getUser(req.body.user);
        res.status(201).json(msg);
    }

}

