# 视频分发 Bot（VSender）

## 功能介绍

Telegram Bot，从本地视频目录读取视频文件并广播给白名单用户。支持批量发送、按文件夹发送、自动追踪发送状态，适合视频内容批量分发场景。

**主要功能：**
- 📹 发送指定本地视频文件给所有白名单用户
- 📦 批量发送 N 个未发送的视频（`/sendnext`）
- 📂 按文件夹批量发送视频（`/senddir`）
- 📊 自动追踪视频发送状态（已发送/未发送）
- 👥 白名单机制 + 用户请求审批
- 🚫 自动检测用户拉黑 Bot 并标记
- ⚡ 支持自定义 Telegram API 突破文件大小限制

## 快速部署

### Docker Run

```bash
docker run -d \
  --name vsender-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e BOT_TOKEN=你的Bot_Token \
  -e ADMIN_USER_ID=123456789 \
  -e VIDEO_ROOT=/app/videos \
  -e DB_PATH=./data/vsender.db \
  -e SEND_CONCURRENCY=5 \
  -e BATCH_INTERVAL=1.0 \
  -e VIDEO_INTERVAL=3.0 \
  -v ./data:/app/data/ \
  -v ./videos:/app/videos \
  aiastia/mytgbot:vsender
```

### Docker Compose

```yaml
services:
  vsender:
    image: aiastia/mytgbot:vsender
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
      - BOT_TOKEN=你的Bot_Token
      - ADMIN_USER_ID=123456789
      - VIDEO_ROOT=/app/videos
      - DB_PATH=./data/vsender.db
      - SEND_CONCURRENCY=5
      - BATCH_INTERVAL=1.0
      - VIDEO_INTERVAL=3.0
    volumes:
      - ./data:/app/data/
      - ./videos:/app/videos
    logging:
      options:
        max-size: "10m"
        max-file: "3"
```

```bash
docker compose up -d
```

## 使用说明

1. 将视频文件放入 `videos/` 目录（支持 `.mp4` `.mkv` `.avi` `.mov` `.wmv` `.flv` `.webm` `.ts` `.m4v` `.rmvb` `.rm`）
2. 启动 Bot 后自动扫描目录
3. 用户发送 `/request` 请求加入白名单，管理员审批
4. 管理员使用 `/send`、`/sendnext`、`/senddir` 发送视频
5. 新增视频后 `/reload` 重新扫描

## 环境变量

| 变量 | 必填 | 默认值 | 说明 |
|------|------|--------|------|
| `BOT_TOKEN` | ✅ | - | Telegram Bot Token |
| `ADMIN_USER_ID` | ✅ | - | 管理员 ID（逗号分隔） |
| `VIDEO_ROOT` | ❌ | `/app/videos` | 本地视频目录 |
| `DB_PATH` | ❌ | `./data/vsender.db` | 数据库路径 |
| `SEND_CONCURRENCY` | ❌ | `5` | 发送并发数 |
| `BATCH_INTERVAL` | ❌ | `1.0` | 批次间间隔（秒） |
| `VIDEO_INTERVAL` | ❌ | `3.0` | 视频间间隔（秒） |
| `LIST_PAGE_SIZE` | ❌ | `20` | 列表每页数量 |
| `TELEGRAM_API_URL` | ❌ | - | 自定义 Telegram API（突破文件大小限制） |