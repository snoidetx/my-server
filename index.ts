import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

import userService from './util/UserService';

const server: Express = express();
const port = process.env.PORT || 1202;

server.use(bodyParser.json());

// A simple GET request.
server.get('/', (_req: Request, res: Response) => {
  res.send(`Hello world!`);
});

// A simple GET request with query.
server.get('/user', (req: Request, res: Response) => {
  const username = req.query['username'] || undefined;
  if (username == 'snoidetx') {
    res.status(201).json({
      message: `Hello @${username}`
    });
  } else if (username) {
    res.status(201).json({
      message: `Hello stranger ${username}`
    });
  } else {
    res.status(401).json({
      message: `401 Unauthorised`
    });
  }
});

// A simple POST command.
server.post('/create-user', userService.createUser);

server.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
