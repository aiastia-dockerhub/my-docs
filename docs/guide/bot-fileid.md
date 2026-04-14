# FileID 管理 Bot

## 功能介绍

Telegram Bot，用于获取、存储和管理 Telegram 文件的 File ID。可以通过代码快速引用已上传的文件（图片、视频、文档等），避免重复上传，支持加密存储。

**主要功能：**
- 📎 获取任意文件的 File ID
- 🔐 可选加密存储 File ID
- 🏷️ 自定义代码前缀，方便引用
- 👥 管理员权限控制

## 快速部署

### Docker Run

```bash
docker run -d \
  --name fileid-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e BOT_TOKEN=你的Bot_Token \
  -e ADMIN_IDS=123456789 \
  -v ./data:/app/data/ \
  aiastia/mytgbot:fileid
```

### Docker Compose

```yaml
services:
  fileid-bot:
    image: aiastia/mytgbot:fileid
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
      - BOT_TOKEN=你的Bot_Token
      - ADMIN_IDS=123456789
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
| `ENCRYPTION_KEY` | ❌ | - | 加密密钥（Fernet 格式） |
| `CODE_PREFIX` | ❌ | Bot 用户名 | 自定义代码前缀 |