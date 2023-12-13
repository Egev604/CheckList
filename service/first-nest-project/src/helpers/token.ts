import {UserDto} from "../dto/user.dto";
import * as jwt from 'jsonwebtoken';
class TokenController {
    constructor() {
    }

    private readonly SECRET_KEY = "MySecretKey";
    generate(user: UserDto) {
        return jwt.sign(user, this.SECRET_KEY, {expiresIn: '5m'})
    }
}