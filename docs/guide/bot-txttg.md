# TXT 文件分享 Bot（TxtTg）

## 功能介绍

Telegram Bot，用于管理和分享 TXT/PDF 等文本文件。支持文件上传、搜索、积分系统、VIP 用户管理，内置 OCR 文字识别。适合做付费内容分享平台。

**主要功能：**
- 📤 上传 TXT/PDF 文件自动入库
- 🔍 `/search` 关键词搜索文件
- 💰 积分系统 — 签到获取积分，积分兑换文件
- 👑 VIP 用户管理 — 管理员设置 VIP 等级
- 🎫 兑换码系统 — `/redeem` 兑换积分
- 📥 管理员审核机制 — 文件上传需审批
- 🔥 `/hot` 热门文件排行

## 快速部署

### Docker Run

```bash
docker run -d \
  --name txttg-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e BOT_TOKEN=你的Bot_Token \
  -e ADMIN_USER_ID=123456789 \
  -e TXT_ROOT=/app/share_folder \
  -e DB_PATH=./data/sent_files.db \
  -v ./data:/app/data/ \
  -v ./share_folder:/app/share_folder \
  aiastia/mytgbot:txt
```

### Docker Compose

```yaml
services:
  newtg:
    image: aiastia/mytgbot:txt
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
      - BOT_TOKEN=你的Bot_Token
      - ADMIN_USER_ID=123456789
      - TXT_ROOT=/app/share_folder
      - DB_PATH=./data/sent_files.db
    volumes:
      - ./data:/app/data/
      - ./share_folder:/app/share_folder
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
| `ADMIN_USER_ID` | ✅ | - | 管理员 ID（逗号分隔） |
| `TXT_ROOT` | ❌ | `/app/share_folder` | 文件存储目录 |
| `DB_PATH` | ❌ | `./data/sent_files.db` | 数据库路径 |
| `DB_TYPE` | ❌ | `sqlite` | 数据库类型：`sqlite` / `mysql` |
| `TXT_EXTS` | ❌ | `.txt,.pdf` | 支持的文件扩展名 |
| `USE_FILE_PATH` | ❌ | `true` | 使用文件路径方式 |
| `TELEGRAM_API_URL` | ❌ | - | 自定义 Telegram API（突破限制） |
| `IDATARIVER_API_URL` | ❌ | - | OCR API 地址 |
| `IDATARIVER_API_KEY` | ❌ | - | OCR API Key |