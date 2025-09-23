#!/usr/bin/env python3
"""
Простой HTTP сервер для локального тестирования музейного проекта
Запустите: python3 start-server.py
Затем откройте: http://localhost:8000
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Порт для сервера
PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Добавляем заголовки для CORS и кэширования
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def start_server():
    # Переходим в директорию проекта
    os.chdir(Path(__file__).parent)
    
    # Создаем сервер
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"🚀 Музейный сервер запущен!")
        print(f"📱 Откройте в браузере: http://localhost:{PORT}")
        print(f"🗺️  Карта музея: http://localhost:{PORT}/museum-map.html")
        print(f"🔗 QR демо: http://localhost:{PORT}/qr-demo.html")
        print(f"📄 Печать QR: http://localhost:{PORT}/qr-print.html")
        print(f"\n⏹️  Для остановки нажмите Ctrl+C")
        
        # Автоматически открываем браузер
        try:
            webbrowser.open(f'http://localhost:{PORT}')
        except:
            pass
        
        # Запускаем сервер
        httpd.serve_forever()

if __name__ == "__main__":
    try:
        start_server()
    except KeyboardInterrupt:
        print(f"\n👋 Сервер остановлен")
    except Exception as e:
        print(f"❌ Ошибка: {e}")
