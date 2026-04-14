# 导航链接 Bot（Top）

## 功能介绍

Telegram Bot，通过内联按钮展示分类导航链接。对接自建 API（如 Cloudflare Workers），支持分类浏览、链接展示，可按 ID 或关键词过滤隐藏特定链接。

**主要功能：**
- 📂 分类展示导航链接
- 🔗 点击直接跳转目标网站
- 🚫 按分类 ID / 链接 ID / 关键词过滤
- 🔄 `/clearcache` 刷新缓存

## 快速部署

### Docker Run

```bash
docker run -d \
  --name top-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e API_BASE=https://your-api.example.com/api \
  -e "HIDE_CATEGORY_IDS={2, 3}" \
  -e "HIDE_LINK_IDS={58, 101}" \
  -e 'HIDE_LINK_KEYWORDS=["keyword1", "keyword2"]' \
  -v ./data:/app/data/ \
  aiastia/mytgbot:top
```

### Docker Compose

```yaml
services:
  top-bot:
    image: aiastia/mytgbot:top
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
      - API_BASE=https://your-api.example.com/api
      - "HIDE_CATEGORY_IDS={2, 3}"
      - "HIDE_LINK_IDS={58, 101}"
      - 'HIDE_LINK_KEYWORDS=["keyword1", "keyword2"]'
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
| `API_BASE` | ✅ | - | 导航 API 地址 |
| `HIDE_CATEGORY_IDS` | ❌ | `{}` | 隐藏的分类 ID 集合 |
| `HIDE_LINK_IDS` | ❌ | `{}` | 隐藏的链接 ID 集合 |
| `HIDE_LINK_KEYWORDS` | ❌ | `[]` | 按关键词隐藏链接 |