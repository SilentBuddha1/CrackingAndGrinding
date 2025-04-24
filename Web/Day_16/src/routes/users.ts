import { Router } from "express";
import { createUser } from "../handlers/users";

const router = Router();

router.get("/", (req, res, next) => {
    res.send('Main User Router');
})

router.get("/:id", (req, res, next) => {
    res.send('You are in id : ' + req.params.id);
})  

router.post('/', createUser);

export default router;
