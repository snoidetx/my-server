# my-server

Sample server proof of concept (POC) that handles basic HTTP request. The source code is written in TypeScript with Express framework.

The POC is hosted on Heroku at https://my-server-snoidetx-poc.herokuapp.com.

## Usage

1. Clone the repository to a local path.
2. If `npm` is installed, run `npm install`. Otherwise, install `npm` first by running `npm install -g npm`.
3. Run `nps start`. The server will be deployed and available on https://localhost:1202/.
4. This server also supports `nodemon`, `concurrently` and `pm2` packages. See their websites for commands to run.

## Supported Requests

1. `GET` from `/`. The server will send a `Hello world!` as HTML.
2. `GET` from `/user` with query on username. The server will return a JSON object containing a message. For example, `GET BASE/user?username=johndoe` returns `{"message":"Hello stranger johndoe"}`.
3. `POST` to `/create-user` with a JSON string as body. The JSON string needs to contain a parameter `username`. For example, `POST BASE/create-user` with `{"username": "John Doe", "data": "hello"}` returns `{"message": "Hi John Doe, your request is successful."}`.
