import * as http from "http";

/**
 * HTTP status codes:
 *
 * 200's: success.
 *  201, 200
 *
 * 300's: redirect.
 *  301, 302, 304
 *
 * 400's: client error.
 *  401, 403, 404
 *
 * 500's: server error.
 *  500: unknown error,
 *  503: service down
 *
 * see https://developer.mozilla.org/ja/docs/Web/HTTP/Status
 */

const server = http.createServer(function (req, res) {
  console.log(req.url);
  res.writeHead(302, { location: "/redirected" });
  if (req.url === "/hello") {
    res.end(`<h1>こんにちは</h1>`);
  } else if (req.url === "/bye") {
    res.end("bye");
  } else {
    res.end(re1.url);
  }
});

server.listen(8080);
