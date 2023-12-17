import { UserService } from './user.service';
import { UserDto } from "../../dto/user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<{
        id: number;
        login: string;
        password: string;
    }[]>;
    getOne(userId: number): Promise<{
        id: number;
        login: string;
        password: string;
    }>;
    create(user: UserDto): Promise<{
        id: number;
        login: string;
        password: string;
    }>;
    update(id: string): Promise<{
        id: number;
        login: string;
        password: string;
    }>;
}
