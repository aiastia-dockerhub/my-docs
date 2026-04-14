# Bot 指挥官（Commander）

## 功能介绍

LLM 驱动的 Telegram Bot 指挥官，通过自然语言指令调度群组中其他 Bot 协同工作。支持接入 OpenAI / DeepSeek / Ollama 等多种 LLM 后端。

**主要功能：**
- 🤖 自然语言驱动的 Bot 调度
- 🧠 接入 LLM 理解用户意图并路由到对应 Bot
- 🔗 多 Bot 协同，在群组中联动工作
- ⚙️ 可自定义技能配置（`skills.yml`）

## 快速部署

### Docker Run

```bash
docker run -d \
  --name commander-bot \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -e BOT_TOKEN=你的Bot_Token \
  -e ADMIN_IDS=123456789 \
  -e WORK_GROUP_ID=-1001234567890 \
  -e LLM_API_URL=https://api.openai.com/v1 \
  -e LLM_API_KEY=sk-your-api-key \
  -e LLM_MODEL=gpt-4o-mini \
  -v ./data:/app/data/ \
  -v ./skills.yml:/app/skills.yml:ro \
  aiastia/mytgbot:commander
```

### Docker Compose

```yaml
services:
  commander:
    image: aiastia/mytgbot:commander
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
      - BOT_TOKEN=你的Bot_Token
      - ADMIN_IDS=123456789
      - WORK_GROUP_ID=-1001234567890
      - LLM_API_URL=https://api.openai.com/v1
      - LLM_API_KEY=sk-your-api-key
      - LLM_MODEL=gpt-4o-mini
    volumes:
      - ./data:/app/data/
      - ./skills.yml:/app/skills.yml:ro
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
| `WORK_GROUP_ID` | ✅ | - | 工作群组 ID（负数） |
| `LLM_API_URL` | ✅ | - | LLM API 地址 |
| `LLM_API_KEY` | ✅ | - | LLM API Key |
| `LLM_MODEL` | ❌ | `gpt-4o-mini` | 模型名称 |
| `LLM_MAX_TOKENS` | ❌ | `512` | 最大 token 数 |
| `LLM_TEMPERATURE` | ❌ | `0.3` | 温度参数 |
| `RATE_LIMIT_PER_BOT` | ❌ | `1.0` | 每个 Bot 每秒最大消息数 |
| `MAX_INTERACTION_DEPTH` | ❌ | `5` | 最大交互深度 |
| `RESPONSE_TIMEOUT` | ❌ | `30` | 等待回复超时（秒） |
| `DEDUP_WINDOW` | ❌ | `60` | 消息去重窗口（秒） |