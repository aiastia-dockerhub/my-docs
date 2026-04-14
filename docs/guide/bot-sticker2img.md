# 贴纸转图片 Bot（Sticker2Img）

## 功能介绍

Telegram Bot，收到贴纸后自动转换为 PNG 图片发送。支持单个贴纸转换和整个表情包批量下载。支持群组中通过 @mention 触发。

**主要功能：**
- 🖼️ 发送贴纸自动转为图片
- 📦 `/pack` 回复贴纸下载整个表情包
- 💬 群组中 @mention 触发转换
- ⚡ webm/webp 自动转 PNG

## 快速部署

### Docker Run

```bash
docker run -d \
  --name sticker2img-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e BOT_TOKEN=你的Bot_Token \
  aiastia/mytgbot:sticker2img
```

### Docker Compose

```yaml
services:
  sticker2img-bot:
    image: aiastia/mytgbot:sticker2img
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
      - BOT_TOKEN=你的Bot_Token
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