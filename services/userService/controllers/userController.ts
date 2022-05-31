import { RequestHandler } from "express";


interface controllerUser {
    verifyUser: RequestHandler;
}
const userController: controllerUser = <controllerUser> {};

userController.verifyUser = async (req, res, next) => {
try {

}



};

export default userController;
