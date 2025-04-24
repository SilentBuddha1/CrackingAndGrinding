import { Request, Response } from "express";
// import { CreateUserDto } from "../dto/CreateUser.dto";
// import { CreateUserQueryParams } from "../types/queryparams";
import { User } from "../types/response";


export function getUsers(req: Request, res: Response) {
    res.send([]); 
}

export function getUserById(req: Request, res: Response) {
     res.send({ message: 'User details', userId: req.params.id });
}

export function createUser(req: Request<{}, {} /* CreateUserDto, CreateUserQueryParams*/>, res: Response<User>) {
    req.query.loginAfterCreate;
    res.status(201).send({
        id: 1,
        email: "ram@typescript",
        username: "ram"
    });

}
