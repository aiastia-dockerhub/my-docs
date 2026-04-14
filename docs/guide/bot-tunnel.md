# Gost 隧道管理 Bot（Tunnel）

## 功能介绍

通过 Telegram Bot 管理 [gost v3](https://gost.run/) 隧道和代理服务，支持多服务器链路组网。可在 Bot 中完成服务器管理、代理创建、隧道组网等操作。

**主要功能：**
- 🖥️ 服务器管理 — 添加/删除/查看/批量添加服务器
- 📡 代理服务 — 在单台服务器上创建 SOCKS5/HTTP/Shadowsocks 代理
- 🔗 隧道组网 — 多台服务器组成加密隧道链路（relay+tls）
- 📦 批量操作 — 批量添加服务器、批量检查状态
- 📊 状态监控 — 实时检查服务器连通性和服务运行状态
- 🔐 安全存储 — API 密码加密存储（AES-256）

## 前置条件

在被管理的服务器上部署 gost：

```bash
docker run -d --name gost --restart=always --net=host \
  gogost/gost \
  -api "用户名:密码@:18080"
```

## 快速部署

### Docker Run

```bash
docker run -d \
  --name tunnel-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e BOT_TOKEN=你的Bot_Token \
  -e ADMIN_IDS=123456789 \
  -e ENCRYPTION_KEY=你的随机32位加密密钥 \
  -v ./data:/app/data/ \
  aiastia/mytgbot:tunnel
```

### Docker Compose

```yaml
services:
  tg-tunnel:
    image: aiastia/mytgbot:tunnel
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
      - BOT_TOKEN=你的Bot_Token
      - ADMIN_IDS=123456789
      - ENCRYPTION_KEY=你的随机32位加密密钥
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
| `ENCRYPTION_KEY` | ✅ | - | 数据库加密密钥（随机32位字符串） |
| `TZ` | ❌ | `Asia/Shanghai` | 时区 |