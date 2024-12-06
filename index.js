const { createServer } = require("node:http");

const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Node app</title>
    </head>
    <body style="margin: 0;padding: 0;">
      <div
        class="box"
        style="
          background-color: rgb(9, 9, 66);
          color: white;
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
      <h1>Hello All, This is my first code and first server in Node</h1>
      </div>
    </body>
  </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
