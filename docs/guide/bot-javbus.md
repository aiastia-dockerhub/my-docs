# JavBus 搜索 Bot

## 功能介绍

Telegram Bot，用于搜索 JavBus 影片信息、获取磁力链接。需要配合自建的 javbus-api 服务使用。

**主要功能：**
- 🔍 按番号、关键字搜索影片
- 🧲 获取磁力链接（可按大小/日期排序）
- 📖 查看影片详情（封面、演员、标签等）
- ⚙️ 支持有码/无码类型切换

## 快速部署

### Docker Run

```bash
docker run -d \
  --name javbus-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e BOT_TOKEN=你的Bot_Token \
  -e ADMIN_IDS=123456789 \
  -e JAVBUS_API_URL=http://your-javbus-api:3000 \
  aiastia/mytgbot:javbus
```

### Docker Compose

```yaml
services:
  javbus-bot:
    image: aiastia/mytgbot:javbus
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
      - BOT_TOKEN=你的Bot_Token
      - ADMIN_IDS=123456789
      - JAVBUS_API_URL=http://your-javbus-api:3000
      - DEFAULT_TYPE=normal
      - MAGNET_SORT_BY=size
      - MAGNET_SORT_ORDER=desc
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
| `JAVBUS_API_URL` | ✅ | - | 自建 javbus-api 地址 |
| `JAVBUS_AUTH_TOKEN` | ❌ | - | API 认证 Token |
| `DEFAULT_TYPE` | ❌ | `normal` | 默认影片类型：`normal` / `uncensored` |
| `MAGNET_SORT_BY` | ❌ | `size` | 磁力排序：`size` / `date` |
| `MAGNET_SORT_ORDER` | ❌ | `desc` | 排序方向：`desc` / `asc` |
| `MAX_CONCURRENT` | ❌ | `10` | 并发请求数 |
| `MAX_PAGES` | ❌ | `20` | 单次搜索最大页数 |
| `RATE_LIMIT` | ❌ | `3` | 每分钟最大请求数 |