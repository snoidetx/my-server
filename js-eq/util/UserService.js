"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService = {
    createUser: (req, res) => {
        const { username } = req.body;
        if (username) {
            res.status(200).json({
                message: `Hi ${username}, your request is successful.`
            });
        }
        else {
            res.status(402).json({
                message: `402 Unauthorised`
            });
        }
    }
};
exports.default = userService;
