import { RequestMethod, Controller, RequestMapping, Inject } from "nest.js";
import { UsersService } from "./users.service";

@Controller({ path: 'users' })
@Inject([ UsersService ])
export class UsersController {

    constructor(usersService) {
        this.usersService = usersService;
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

