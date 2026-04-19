// ============================================================
//  ✏️  EDIT THIS FILE to configure your auto-replies
// ============================================================

module.exports = {

    // Set to true if you also want to auto-reply in group chats
    allowGroups: false,

    // Default reply used if no contact-specific reply is set
    globalDefaultReply: "Hi! I'm currently busy and will get back to you soon. 😊",

    // ── ADD YOUR CONTACTS BELOW ─────────────────────────────
    // number : include country code, NO + or spaces
    //          e.g. India +91 89283 03079  →  "918928303079"
    //               US   +1  555 123 4567  →  "15551234567"
    // ────────────────────────────────────────────────────────
    contacts: [
        {
            name: "My Love",
            number: "918928303079",   // ← replace with your mother's number
            defaultReply: "Hi Mom! 😊 I'm a bit busy right now. I'll call you back soon. Love you! ❤️",
            keywordReplies: {
                "where are you":    "Don't worry Mom, I'm safe! Talk soon. 😊",
                "call me":          "I'll call you as soon as I'm free, Mom! ❤️",
                "food":             "Yes Mom, I've eaten! 😄 Talk soon.",
                "okay":             "Okay Mom! Love you ❤️",
                "ok":               "Okay Mom! Love you ❤️",
                "Jevli ka":         "Ho Mumma, Jevli mi kam karat ahe! 😄 Nantar bolte.",
                "Have you eaten":     "Yes Mom, I've eaten! 😄 Talk soon.",
            }
        },
        {
            name: "My Heart",
            number: "919969452212",   // ← replace with your father's number
            defaultReply: "Hi Dad! 😊 Currently occupied, will get back to you shortly!",
            keywordReplies: {
                "where are you":    "I'm fine Dad, no worries! Talk soon. 👍",
                "call me":          "I'll call you shortly Dad!",
                "okay":             "Okay Dad! 👍",
                "ok":               "Okay Dad! 👍",
                "Jevli ka":         "Ho Pappu, Jevli mi kam karat ahe! 😄 Nantar bolte.",
                "Have you eaten":     "Yes Dad, I've eaten! 😄 Talk soon.",
                "जेवली का ":         "हो पप्पू, जेवली मी काम करत आहे! तुम्ही जेवला का ? 😄 नंतर बोलते.",
            }
        },

        // ── Add more contacts like this: ──────────────────
        // {
        //     name: "Sister",
        //     number: "919876543212",
        //     defaultReply: "Hey Sis! Busy rn, ttyl! 😄",
        //     keywordReplies: {
        //         "hello": "Heyy! 👋",
        //     }
        // },
    ]
};
