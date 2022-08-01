import { Request, Response } from 'express';

const userService = {
  createUser: (req: Request, res: Response) => {
    const { username } = req.body;
    if (username) {
      res.status(200).json({
        message: `Hi ${username}, your request is successful.`
      });
    } else {
      res.status(402).json({
        message: `402 Unauthorised`
      })
    }
  }
}

export default userService;
