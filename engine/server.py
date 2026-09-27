#!/usr/bin/env python3
"""
Papermache Local API Server (Built-in standard library http.server)
Zero extra dependencies required.
Serves:
  - GET  /api/presets
  - POST /api/clash
"""

import sys
import os
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse

# Ensure engine path is available
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from papermache_engine import clash_papers, PRESET_CLASHES, analyze_paper


class PapermacheHandler(BaseHTTPRequestHandler):
    def _set_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(200)
        self._set_cors_headers()
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/presets":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self._set_cors_headers()
            self.end_headers()
            presets_summary = {}
            for key, val in PRESET_CLASHES.items():
                presets_summary[key] = {
                    "key": key,
                    "name": val["name"],
                    "description": val["description"],
                    "paper_a": val["paper_a"],
                    "paper_b": val["paper_b"]
                }
            self.wfile.write(json.dumps(presets_summary).encode("utf-8"))
        elif parsed.path == "/api/ping":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self._set_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({"status": "ok", "engine": "Papermache v0.1"}).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/clash":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode("utf-8"))
                paper_a = data.get("paper_a", {"title": "Paper A", "text": ""})
                paper_b = data.get("paper_b", {"title": "Paper B", "text": ""})
                result = clash_papers(paper_a, paper_b)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self._set_cors_headers()
                self.end_headers()
                self.wfile.write(json.dumps(result).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self._set_cors_headers()
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()


def run_server(port=8080):
    server_address = ("", port)
    httpd = HTTPServer(server_address, PapermacheHandler)
    print(f"[*] Papermache Calculation API running on http://localhost:{port}")
    httpd.serve_forever()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    run_server(port)
