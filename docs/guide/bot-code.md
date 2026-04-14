# 消息内容提取 Bot

## 功能介绍

Telegram Bot，自动从用户发送的消息中提取特定内容（如验证码、链接等），分类存储到数据库，支持按类型查看、导出和统计。

**主要功能：**
- 📝 自动提取消息中的关键内容
- 📂 按类型分类存储（验证码、链接等）
- 📤 `/send` 查看新消息，`/all` 导出全部消息
- 📊 管理员可查看用户统计和消息历史

## 快速部署

### Docker Run

```bash
docker run -d \
  --name code-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e BOT_TOKEN=你的Bot_Token \
  -e ADMIN_IDS=123456789 \
  -v ./data:/app/data/ \
  aiastia/mytgbot:code
```

### Docker Compose

```yaml
services:
  code-bot:
    image: aiastia/mytgbot:code
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
| `ADMIN_IDS` | ❌ | - | 管理员 ID（逗号分隔） |