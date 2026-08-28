// 本地预览：把 /pm_Web_App_Showcase/* 映射到 out/*（临时验证脚本，可随时删除）
const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "out");
const prefix = "/pm_Web_App_Showcase";
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".ico": "image/x-icon",
};
http
  .createServer((req, res) => {
    let p = decodeURIComponent((req.url || "/").split("?")[0]);
    if (p.startsWith(prefix)) p = p.slice(prefix.length);
    if (p === "/" || p === "") p = "/index.html";
    let fp = path.join(root, p);
    if (!fs.existsSync(fp) || fs.statSync(fp).isDirectory())
      fp = path.join(fp, "index.html");
    if (!fs.existsSync(fp)) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }
    res.writeHead(200, { "Content-Type": mime[path.extname(fp)] || "application/octet-stream" });
    fs.createReadStream(fp).pipe(res);
  })
  .listen(8931, "127.0.0.1", () =>
    console.log("preview: http://127.0.0.1:8931" + prefix + "/")
  );
