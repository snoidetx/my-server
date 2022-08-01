"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserService_1 = __importDefault(require("./util/UserService"));
const server = (0, express_1.default)();
const port = 1202;
server.use(body_parser_1.default.json());
// A simple GET request.
server.get('/', (_req, res) => {
    res.send(`Hello world!`);
});
// A simple GET request with query.
server.get('/user', (req, res) => {
    const username = req.query['username'] || undefined;
    if (username == 'snoidetx') {
        res.status(201).json({
            message: `Hello @${username}`
        });
    }
    else if (username) {
        res.status(201).json({
            message: `Hello stranger ${username}`
        });
    }
    else {
        res.status(401).json({
            message: `401 Unauthorised`
        });
    }
});
// A simple POST command.
server.post('/create-user', UserService_1.default.createUser);
server.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
