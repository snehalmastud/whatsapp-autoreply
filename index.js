const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const config = require('./config');

console.log('🚀 WhatsApp Auto-Reply Bot Starting...\n');

const client = new Client({
    authStrategy: new LocalAuth({ dataPath: './sessions' }),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// Show QR code to scan
client.on('qr', (qr) => {
    console.log('📱 Scan this QR code with your WhatsApp:\n');
    qrcode.generate(qr, { small: true });
    console.log('\n⏳ Waiting for scan...');
});

client.on('authenticated', () => {
    console.log('✅ Authenticated successfully!');
});

client.on('ready', () => {
    console.log('\n✅ Bot is READY and listening for messages!');
    console.log('👥 Watching contacts:', config.contacts.map(c => c.name).join(', '));
    console.log('\n💡 Press Ctrl+C to stop the bot.\n');
});

client.on('message', async (message) => {
    try {
        // Ignore messages sent by yourself
        if (message.fromMe) return;
        // Ignore group messages (optional — set allowGroups: true in config to allow)
        if (message.isGroupMsg && !config.allowGroups) return;

        const senderId = message.from; // format: "919876543210@c.us"
        const senderNumber = senderId.replace('@c.us', '');

        // Find matching contact in config
        const matchedContact = config.contacts.find(contact =>
            normalizeNumber(contact.number) === normalizeNumber(senderNumber)
        );

        if (matchedContact) {
            const replyText = buildReply(matchedContact, message.body);
            await message.reply(replyText);

            const timestamp = new Date().toLocaleTimeString();
            console.log(`[${timestamp}] 💬 Message from ${matchedContact.name}: "${message.body}"`);
            console.log(`[${timestamp}] ✉️  Auto-replied: "${replyText}"\n`);
        }

    } catch (err) {
        console.error('❌ Error handling message:', err.message);
    }
});

client.on('disconnected', (reason) => {
    console.log('❌ Client disconnected:', reason);
    console.log('🔄 Restart the bot to reconnect.');
});

// Normalize phone number (remove spaces, dashes, +)
function normalizeNumber(num) {
    return num.replace(/[\s\-\+]/g, '').trim();
}

// Build the reply message
function buildReply(contact, incomingMessage) {
    const lowerMsg = incomingMessage.toLowerCase();

    // Check for keyword-based replies first
    if (contact.keywordReplies) {
        for (const [keyword, reply] of Object.entries(contact.keywordReplies)) {
            if (lowerMsg.includes(keyword.toLowerCase())) {
                return reply;
            }
        }
    }

    // Fallback to default reply
    let reply = contact.defaultReply || config.globalDefaultReply;

    // Replace placeholders
    reply = reply
        .replace('{name}', contact.name)
        .replace('{time}', new Date().toLocaleTimeString())
        .replace('{date}', new Date().toLocaleDateString());

    return reply;
}

client.initialize();
