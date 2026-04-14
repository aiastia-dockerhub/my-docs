# Telegram 媒体监控 Bot（MPT）

## 功能介绍

基于 Telethon 的 Telegram 媒体监控 Bot，可监控群组、频道和私聊中的消息，自动下载媒体文件，支持关键词正则匹配和消息转发。

**主要功能：**
- 👀 监控群组、频道、私聊消息
- 📥 自动下载媒体文件（图片、视频、文档）
- 🔑 关键词正则匹配监控
- 🔄 消息转发系统
- 🌐 支持 SOCKS5/HTTP 代理
- 📂 多账号支持

## 快速部署

### Docker Run

```bash
docker run -d \
  --name mpt-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -v ./data:/app/data/ \
  -v ./config.yaml:/app/config.yaml \
  aiastia/mytgbot:mpt
```

### Docker Compose

```yaml
services:
  mpt-bot:
    image: aiastia/mytgbot:mpt
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
    volumes:
      - ./data:/app/data/
      - ./config.yaml:/app/config.yaml
    logging:
      options:
        max-size: "10m"
        max-file: "3"
```

```bash
docker compose up -d
```

## 配置文件

需要挂载 `config.yaml` 配置文件，主要配置项：

```yaml
api_id: "你的API_ID"         # 从 my.telegram.org 获取
api_hash: "你的API_HASH"     # 从 my.telegram.org 获取

accounts:
  - name: account1
    admin_ids: [123456789]
    enabled: true
    session_name: ./data/bot_session_1.session
    monitoring:
      enabled_chats: []
      keywords: []
      auto_forward_media: true
    storage:
      auto_download: true
      download_path: ./data/account1
```

> ⚠️ 首次启动需要交互式登录生成 session 文件，建议先在本地运行一次后再 Docker 部署。

## 管理命令

| 命令 | 说明 |
|------|------|
| `/watch enable <chat_id>` | 开始监控聊天 |
| `/watch disable <chat_id>` | 停止监控聊天 |
| `/keywords add <pattern>` | 添加关键词 |
| `/keywords remove <id>` | 移除关键词 |