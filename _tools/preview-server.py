"""GitHub Pages 子路径预览服务器。

站点部署在 https://wtw79.github.io/pm_Web_App_Showcase/ 子路径下，
本地预览时本服务器会自动去除 /pm_Web_App_Showcase 前缀后服务仓库根目录的静态产物。

用法（在仓库根执行）：
    python _tools/preview-server.py [port]   # 默认 8392
然后访问 http://127.0.0.1:8392/pm_Web_App_Showcase/
"""
import http.server
import functools
import sys
import os

PREFIX = "/pm_Web_App_Showcase"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        # 去除子路径前缀，映射到仓库根
        if path.startswith(PREFIX + "/"):
            path = path[len(PREFIX):]
        elif path == PREFIX:
            path = "/"
        return super().translate_path(path)

    def log_message(self, fmt, *args):
        sys.stderr.write("[preview] %s\n" % (fmt % args))


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8392
    server = http.server.ThreadingHTTPServer(
        ("127.0.0.1", port), functools.partial(Handler)
    )
    print(f"Serving {ROOT} at http://127.0.0.1:{port}{PREFIX}/")
    server.serve_forever()
