let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Wanz
│ ✎ _Sekolah_ : SMKS 
│ ✎ _Umur_ : 16
│ ✎ _Asal_ : Kedah
│ ✎ _Status_ : Pelajar SMK
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/JxD4ZjQiLVSCohWaRmyv0V
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HbbYGD9VkoKBUQXG1vOLke
│ ✎ _Official Grup 3_ :
│    https://chat.whatsapp.com/FJUrvlGsiFhI0jvv5EE3rC
│ ✎ _Instagram_ : 
│    instagram.com/MidWanzofficial
│ ✎ _WhatsApp_ :
│    wa.me/60195471037
╰───────────────────
`.trim(), m)
}

handler.help = ['infomursid']
handler.tags = ['main', 'utama']
handler.command = /^(infomursid)$/i

handler.exp = 150

module.exports = handler
