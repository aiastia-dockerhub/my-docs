# 视频队列分发 Bot（VQueue）

## 功能介绍

Telegram Bot，将用户发送的视频/照片加入队列，按顺序慢慢分发给所有注册用户。适合做内容订阅分发，支持转发保护、来源标注和自动拉黑检测。

**主要功能：**
- 📹 支持视频、照片、媒体组排队分发
- 📋 自动排队，逐一分发给所有用户
- 🔒 可控制转发保护（`protect_content`）
- 👤 标注转发来源（用户 ID / 用户名）
- 🚫 自动检测拉黑并停止发送
- ⏰ 24 小时活跃度检查

## 快速部署

### Docker Run

```bash
docker run -d \
  --name vqueue-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e BOT_TOKEN=你的Bot_Token \
  -e ADMIN_IDS=123456789 \
  -e PROTECT_CONTENT=true \
  -e SHOW_SOURCE=true \
  -e SEND_CONCURRENCY=10 \
  -e BATCH_INTERVAL=1.0 \
  -e VIDEO_INTERVAL=5 \
  -v ./data:/app/data/ \
  aiastia/mytgbot:vqueue
```

### Docker Compose

```yaml
services:
  vqueue-bot:
    image: aiastia/mytgbot:vqueue
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
      - BOT_TOKEN=你的Bot_Token
      - ADMIN_IDS=123456789
      - PROTECT_CONTENT=true
      - SHOW_SOURCE=true
      - SEND_CONCURRENCY=10
      - BATCH_INTERVAL=1.0
      - VIDEO_INTERVAL=5
      - QUEUE_CHECK_INTERVAL=5
      - ACTIVE_CHECK_INTERVAL=3600
      - MIN_VIDEOS_24H=10
    volumes:
      - ./data:/app/data/
    logging:
      options:
        max-size: "10m"
        max-file: "3"
```

```bash
docker compose up -d
```

## 环境变量

| 变量 | 必填 | 默认值 | 说明 |
|------|------|--------|------|
| `BOT_TOKEN` | ✅ | - | Telegram Bot Token |
| `ADMIN_IDS` | ✅ | - | 管理员 ID（逗号分隔） |
| `PROTECT_CONTENT` | ❌ | `true` | 转发保护，防止接收者转发媒体 |
| `SHOW_SOURCE` | ❌ | `true` | 显示来源标注 |
| `SEND_CONCURRENCY` | ❌ | `10` | 并发发送数 |
| `BATCH_INTERVAL` | ❌ | `1.0` | 每批发完后间隔（秒） |
| `VIDEO_INTERVAL` | ❌ | `5` | 不同组之间间隔（秒） |
| `QUEUE_CHECK_INTERVAL` | ❌ | `5` | 队列检查间隔（秒） |
| `ACTIVE_CHECK_INTERVAL` | ❌ | `3600` | 24h 活跃度检查间隔（秒） |
| `MIN_VIDEOS_24H` | ❌ | `10` | 24h 内最少发送视频数（不足则停止） |