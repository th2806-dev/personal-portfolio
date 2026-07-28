<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/1445f458-0c2f-4ba5-8d8b-010d40cc94c8

## Environment Variables (Local & Production / Vercel)

Configure the following variables in `.env.local` for local dev or in **Vercel Project Settings > Environment Variables** for production:

- `VITE_GEMINI_API_KEY`: Your Gemini API Key from Google AI Studio.
- `VITE_TELEGRAM_BOT_TOKEN`: Your Telegram Bot Token for chat log alerts.
- `VITE_TELEGRAM_CHAT_ID`: Your Telegram Chat ID.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Configure [.env.local](.env.local) with your API keys
3. Run the app:
   `npm run dev`

Link Vercel deploy: https://vercel.com/th2806dev/personal-portfolio/settings/environment-variables
Nhập lần lượt 3 biến (không đưa giá trị bí mật vào repo):
- Key: VITE_GEMINI_API_KEY
- Key: VITE_TELEGRAM_BOT_TOKEN
- Key: VITE_TELEGRAM_CHAT_ID
\
Lưu ý: Không commit giá trị thực của API keys vào repository. Thay vào đó, thêm chúng trong Vercel Project Settings → Environment Variables hoặc dùng `vercel env` từ CLI.