# 📱 WhatsApp Auto-Reply Bot

Automatically reply to WhatsApp messages from specific contacts (like Mom & Dad) while you're busy.

---

## ✅ Prerequisites

Install **Node.js v18+** from: https://nodejs.org/

To check if it's installed, open Terminal / Command Prompt and run:
```
node --version
```

---

## 🚀 Setup & Run (Step-by-Step)

### Step 1 — Edit your contacts

Open `config.js` and replace the phone numbers:

```js
{
    name: "Mom",
    number: "919876543210",  // Country code + number, no + or spaces
    ...
}
```

**How to find the number format:**
- India: +91 98765 43210 → `"919876543210"`
- US:    +1 555 123 4567 → `"15551234567"`

---

### Step 2 — Install dependencies

Open Terminal in the project folder and run:
```
npm install
```

This may take 1–2 minutes (it downloads Chromium for automation).

---

### Step 3 — Start the bot

```
npm start
```

---

### Step 4 — Scan the QR code

1. A QR code will appear in your terminal
2. Open WhatsApp on your phone
3. Go to **Settings → Linked Devices → Link a Device**
4. Scan the QR code
5. The bot will say `✅ Bot is READY!`

---

### Step 5 — Test it

Ask a friend (or use another phone) to send a WhatsApp message from one of the numbers you added in `config.js`. The bot will automatically reply!

You'll also see the message logged in the terminal.

---

## ⚙️ Customization

### Change the auto-reply message
Edit `defaultReply` in `config.js` for each contact.

### Add keyword-based replies
In `config.js`, use `keywordReplies` to send different messages based on keywords:
```js
keywordReplies: {
    "where are you": "I'm safe, talk soon!",
    "call me":       "Calling you shortly!",
}
```

### Add more contacts
Copy-paste an existing contact block and fill in new details.

### Reply in group chats too
Set `allowGroups: true` in `config.js`.

---

## 🔄 Keep Bot Running (Advanced)

To keep it running even after closing Terminal, use **PM2**:

```bash
npm install -g pm2
pm2 start index.js --name whatsapp-bot
pm2 save
```

---

## ❓ Troubleshooting

| Problem | Fix |
|---|---|
| QR code not showing | Make sure Node 18+ is installed |
| `npm install` fails | Try: `npm install --legacy-peer-deps` |
| Bot stops after closing terminal | Use PM2 (see above) |
| Wrong person getting replies | Double-check the number format in config.js |
| QR expired | Restart with `npm start` to get a fresh QR |

---

## 📁 Project Structure

```
whatsapp-autoreply/
├── index.js       ← Main bot logic
├── config.js      ← YOUR contacts & replies (edit this!)
├── package.json   ← Dependencies
├── sessions/      ← Auto-created; stores your login session
└── README.md      ← This file
```

---

## ⚠️ Notes

- The bot uses the **WhatsApp Web** protocol — keep your phone connected to internet
- Your session is saved locally in `sessions/` folder — no passwords stored
- This is for personal use only
