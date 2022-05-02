/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xa = require('xfarr-api')
const hx = require('hxz-api')
const RA = require('ra-api')
const zyapi = require('kotz-api')
const ffmpeg = require('fluent-ffmpeg')
const translate = require('@vitalets/google-translate-api')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const { instagramdl, instagramdlv2, instagramStory, instagramStoryv2, youtubedl, youtubedlv2, tiktokdl, tiktokdlv2, latinToAksara, aksaraToLatin, stickerTelegram, googleImage, pinterest, wallpaper, jadwalsholat, listJadwalSholat, cnbindonesia, antaranews, kompas } = require('@bochilteam/scraper')

let vien = JSON.parse(fs.readFileSync('./src/vien.json'))
let setik = JSON.parse(fs.readFileSync('./src/setik.json'))
let premi = JSON.parse(fs.readFileSync('./src/premium.json'))
autorespon = false

let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let siapaaku = db.data.game.siapaaku = []
let asahotak = db.data.game.asahotak = []
let susunkata = db.data.game.susunkata = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakkabupaten = db.data.game.tebakkabupaten = []
let tebakkimia = db.data.game.tebakkimia = []
let tekateki = db.data.game.tekateki = []
let vote = db.data.others.vote = []
let absenstart = db.data.others.absenstart = []
let displaymenu = db.data.settings.displaymenu = 'gif'
let canvasvariant = db.data.settings.canvasvariant = 'BA'

module.exports = miku = async (miku, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await miku.decodeJid(miku.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const from = m.key.remoteJid
        const type = Object.keys(m.message)[0] 
        const content = JSON.stringify(mek.message)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split("@")[0] 
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
       const hour_now = moment.tz('Asia/Jakarta').format('HH')
var ucapanWaktu = '𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗣𝗮𝗴𝗶🌄'//'Pagi🌄'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗣𝗮𝗴𝗶🌅'//'Pagi 🌅'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗦𝗶𝗮𝗻𝗴🌞'//'Siang 🌞'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗦𝗼𝗿𝗲☀'//'Soree ☀️'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗣𝗲𝘁𝗮𝗻𝗴🌇'//'Selamat 🌠'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗠𝗮𝗹𝗮𝗺🌆'//'Malam 🌆'
} else {
ucapanWaktu = '𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗠𝗮𝗹𝗮𝗺🌌'//'Selamat Malam!'
}
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
// Random image
const randomimage = Math.floor(Math.random() * 2) + 1
const yahaha = fs.readFileSync(`./imgmenu/${randomimage}.jpg`)

// Video gif
const menuvideo = fs.readFileSync(`./videomenu/shiroko.mp4`)

        // Group
        const groupMetadata = m.isGroup ? await miku.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || premi.includes(m.sender) || false


	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
                if (!('cheatgame' in user)) user.cheatgame = false
                if (!('banned' in user)) user.banned = false
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
                cheatgame: false,
                banned: false,
            }
            
            let chats = global.db.data.chats[m.chat]
                if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antiviewonce' in chats)) chats.antiviewonce = false
                if (!('antiporn' in chats)) chats.antiporn = false
             } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antiviewonce: false,
                antiporn: false,
        }
        
        let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('autoread' in setting)) setting.autoread = false
		if (!('autoketik' in setting)) setting.autoketik = false
		if (!('autorecord' in setting)) setting.autoketik = false
		if (!('autoonline' in setting)) setting.autoonline = false
		if (!('autooffline' in setting)) setting.autooffline = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		autoread: false,
		autoketik: false,
		autorecord: false,
		autoonline: false,
		autooffline: false,
	    }
        } catch (err) {
            console.error(err)
        }

        const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return miku.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return miku.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return miku.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return miku.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return miku.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }

let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
		
		const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: mikuAi, surface: 200, message: wm, orderTitle: 'BOTm', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: mikuAi}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": wm, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': wm, 'jpegThumbnail': mikuAi}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": wm, 'jpegThumbnail': mikuAi}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': mikuAi}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${author}`,jpegThumbnail: mikuAi}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': mikuAi, thumbnail: mikuAi,sendEphemeral: true}}}
		const reply = (teks) => {
            miku.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${ucapanWaktu}\n${week} ${weton}, ${date}`,"body": `${botname}`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/miku.png`),"sourceUrl": "http://wa.me/6281334109123"}}}, { quoted: m})
        }
        const pickRandom= (list) => {
  return list[Math.floor(Math.random() * list.length)]
  }

        // Public & Self
        if (!miku.public) {
            if (!m.key.fromMe) return
        }
        // auto read
        if (db.data.settings[botNumber].autoread) {
            miku.sendReadReceipt(m.chat, m.sender, [m.key.id])
        }
       // auto ketik 
        if (db.data.settings[botNumber].autoketik) {
            miku.sendPresenceUpdate( 'composing', m.chat)
        }
        // auto vn
        if (db.data.settings[botNumber].autorecord) {
            miku.sendPresenceUpdate( 'recording', m.chat)
        }
        // statsu online
        if (db.data.settings[botNumber].autoonline) {
            miku.sendPresenceUpdate( 'available', m.chat)
        }
        // statsu offline
        if (db.data.settings[botNumber].autooffline) {
            miku.sendPresenceUpdate( 'unavailable', m.chat)
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
    
    if (budy.includes('Farel')) {
    reply('Dia Nama Owner Saya Kak :)\nDia Orangnya Ganteng>.<')
	  }
	  
	  if (budy.includes('farel')) {
	  reply('Dia Nama Owner Saya Kak :)\nDia Orangnya Ganteng>.<')
	  }
	  
	  if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply('── 「 *LINK DETECTED* 」 ──\n\nGroup ini sudah di pasang antilink, jadi anda akan saya kick, Goodbye untuk mu!!')
        if (!isBotAdmins) return reply('── 「 *LINK DETECTED* 」 ──\n\nWahh Nakal sekaliii, Grup ini Sudah dipasang Antilink. Tapi bot bukan admin disini jadi gk bisa ngekick😔')
        let gclink = (`https://chat.whatsapp.com/`+await miku.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply('Untung itu link gc group ini gak jadi di kick deh😔')
        if (isAdmins) return reply('Oh ternyata dia Admin, Sorry ya lord!!')
        if (isCreator) return reply('Untung Owner ganteng ku yang ngirimnya, Jadi gakpp:v')
        miku.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
      
      if (db.data.users[m.sender].banned) {
      return 
      }
      
      if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await miku.setStatus(`Hello I am a bot👋🏻 || ${runtime(process.uptime())} || ${dateIslamic}`)
		setting.status = new Date() * 1
	    }
	}
	
	  if (db.data.chats[m.chat].antiviewonce) {
    if (m.mtype == 'viewOnceMessage') {
        let anys= `── 「 *ANTI VIEWONCE* 」 ──\n\n❑ *Nama* : ${m.pushName}\n❑ *Tag* : @${m.sender.split('@')[0]}\n❑ *Time* : ${time} WIB\n❑ *Tanggal* : ${week}, ${date}\n❑ *MessageType* : ${m.mtype}`
        await miku.sendTextWithMentions(m.chat, anys, m)
        miku.copyNForward(m.chat, await store.loadMessage(m.chat, m.key.id), false, { readViewOnce: true })
    }
    }
        
    if (m.mtype == 'protocolMessage') {
        reply('Kenapa pesannya dihapus kak?')
    }
        
        // Simih-Simih
        if (!m.isGroup && budy && !m.key.fromMe && autorespon) {
        simi = await fetchJson(`https://api.simsimi.net/v2/?text=${command}&lc=id`)
        reply(simi.success)
	}
	
	for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					miku.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author })
					}
			}
	for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/sound/${anju}.mp3`)
					miku.sendMessage(m.chat, { audio: result, mimetype: 'audio/mpeg', ptt:true}, {quoted: fvn })
					}
			}

        // write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)
                
        // reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: miku.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, miku.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        miku.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            miku.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = siapaaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak siapaaku', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `🎮 Tebak Siapa Aku 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete siapaaku[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        if (asahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = asahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak asahotak', buttonText: { displayText: 'Asah Otak' }, type: 1 }], `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete asahotak[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak kabupaten', buttonText: { displayText: 'Tebak Kabupaten' }, type: 1 }], `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak kimia', buttonText: { displayText: 'Tebak Kimia' }, type: 1 }], `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete caklontong[m.sender.split('@')[0]]
                delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = susunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak susunkata', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete susunkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].limit += 20
                await miku.sendButtonText(m.chat, [{ buttonId: 'tebak tekateki', buttonText: { displayText: 'Tebak Tekateki' }, type: 1 }], `🎮 Tekateki 🎮\n\nJawaban Benar 🎉\n\nSelamat Limit Kamu bertambah '20', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}.\nIngin bermain lagi? tekan button dibawah`, wm, m)
                delete tekateki[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await miku.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await miku.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    miku.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    miku.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) miku.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) miku.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) miku.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    miku.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) miku.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) miku.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    miku.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
let gropm =  `┏━━━━━❲ 𝗚𝗥𝗢𝗨𝗣 👥 ❳
┃
┃➥ ${prefix}linkgroup
┃➥ ${prefix}resetlink
┃➥ ${prefix}aboutgroup
┃➥ ${prefix}creategroup
┃➥ ${prefix}carigrup
┃➥ ${prefix}setppgc
┃➥ ${prefix}malingpp
┃➥ ${prefix}setname [text]
┃➥ ${prefix}setdesc [text]
┃➥ ${prefix}group [option]
┃➥ ${prefix}editinfo [option]
┃➥ ${prefix}add @user
┃➥ ${prefix}kick @user
┃➥ ${prefix}hidetag [text]
┃➥ ${prefix}vote [text]
┃➥ ${prefix}devote
┃➥ ${prefix}upvote
┃➥ ${prefix}cekvote
┃➥ ${prefix}hapusvote
┃➥ ${prefix}absenstart
┃➥ ${prefix}absen
┃➥ ${prefix}cekabsen
┃➥ ${prefix}hapusabsen
┃➥ ${prefix}tagall [text]
┃➥ ${prefix}promote @user
┃➥ ${prefix}demote @user
┃➥ ${prefix}listadmin
┃➥ ${prefix}antiviewonce on/off
┃➥ ${prefix}antiporn on/off
┃➥ ${prefix}antilink on/off
┃➥ ${prefix}mute on/off
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let serchm = `┏━━━━━❲ 𝗦𝗘𝗔𝗥𝗖𝗛𝗜𝗡𝗚 🔎 ❳
┃
┃➥ ${prefix}play [query]
┃➥ ${prefix}yts [query]
┃➥ ${prefix}google [query]
┃➥ ${prefix}gimage [query]
┃➥ ${prefix}pinterest [query]
┃➥ ${prefix}wallpaper [query]
┃➥ ${prefix}film [query]
┃➥ ${prefix}wikimedia [query]
┃➥ ${prefix}ytsearch [query]
┃➥ ${prefix}ringtone [query]
┃➥ ${prefix}resep [query]
┃➥ ${prefix}jooxdl [query]
┃➥ ${prefix}soundcloud [url]
┃➥ ${prefix}herolist
┃➥ ${prefix}herodetail [namehero]
┃➥ ${prefix}stalk [option] [query]
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let dlm = `┏━━━━━❲ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ⬇️ ❳
┃
┃➥ ${prefix}tiktoknowm [url]
┃➥ ${prefix}tiktokwm [url]
┃➥ ${prefix}tiktokmp3 [url]
┃➥ ${prefix}instagram [url]
┃➥ ${prefix}instagram2
┃➥ ${prefix}twitter [url]
┃➥ ${prefix}twittermp3 [url]
┃➥ ${prefix}facebook [url]
┃➥ ${prefix}pinterestdl [url]
┃➥ ${prefix}ytmp3 [url]
┃➥ ${prefix}ytmp4 [url]
┃➥ ${prefix}getmusic [query]
┃➥ ${prefix}getvideo [query]
┃➥ ${prefix}umma [url]
┃➥ ${prefix}ytmp32 [url]
┃➥ ${prefix}ytmp42 [url]
┃➥ ${prefix}getmusic2 [query]
┃➥ ${prefix}getvideo2 [query]
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let convm = `┏━━━━━❲ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 ♻️ ❳
┃
┃➥ ${prefix}toimage
┃➥ ${prefix}removebg
┃➥ ${prefix}sticker
┃➥ ${prefix}smeme teks1|teks2
┃➥ ${prefix}take <replysticker>
┃➥ ${prefix}emoji
┃➥ ${prefix}semoji
┃➥ ${prefix}pastebin
┃➥ ${prefix}nulis [text]
┃➥ ${prefix}emojimix
┃➥ ${prefix}tovideo
┃➥ ${prefix}tovn
┃➥ ${prefix}bass
┃➥ ${prefix}blown
┃➥ ${prefix}deep
┃➥ ${prefix}earrape
┃➥ ${prefix}fast
┃➥ ${prefix}fat
┃➥ ${prefix}nightcore
┃➥ ${prefix}reverse
┃➥ ${prefix}robot
┃➥ ${prefix}slow
┃➥ ${prefix}tupai
┃➥ ${prefix}toaudio
┃➥ ${prefix}tomp3
┃➥ ${prefix}togif
┃➥ ${prefix}tourl
┃➥ ${prefix}styletext
┃➥ ${prefix}translate
┃➥ ${prefix}tts
┃➥ ${prefix}ebinary
┃➥ ${prefix}dbinary
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let islm = `┏━━━━━❲ 𝗜𝗦𝗟𝗔𝗠 🕌 ❳
┃
┃➥ ${prefix}iqra
┃➥ ${prefix}hadist
┃➥ ${prefix}alquran
┃➥ ${prefix}juzamma
┃➥ ${prefix}tafsirsurah
┃➥ ${prefix}asmaulhusna
┃➥ ${prefix}murothal
┃➥ ${prefix}niatsholat
┃➥ ${prefix}kisahnabi
┃➥ ${prefix}renungan
┃➥ ${prefix}quotesislami
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let anim = `┏━━━━━❲ 𝗔𝗡𝗜𝗠𝗘 ⛩️ ❳
┃
┣━━❲ 𝗞𝗔𝗧𝗔 ❳
┃
┃➥ ${prefix}quotesanime
┃➥ ${prefix}animelink
┃➥ ${prefix}kodenuklir
┃
┣━━❲ 𝗩𝗜𝗗𝗘𝗢 ❳
┃
┃➥ ${prefix}hentai
┃
┣━━❲ 𝗜𝗠𝗔𝗚𝗘 ❳
┃
┃➥ ${prefix}anime
┃➥ ${prefix}waifu
┃➥ ${prefix}husbu
┃➥ ${prefix}husbu2
┃➥ ${prefix}neko
┃➥ ${prefix}shinobu
┃➥ ${prefix}yaoi
┃➥ ${prefix}yuri
┃➥ ${prefix}oneesan
┃➥ ${prefix}milf
┃➥ ${prefix}boobs
┃➥ ${prefix}paizuri
┃➥ ${prefix}pussy
┃➥ ${prefix}tentacle
┃➥ ${prefix}trap
┃➥ ${prefix}futanari
┃➥ ${prefix}megumin
┃➥ ${prefix}bully
┃➥ ${prefix}cuddle
┃➥ ${prefix}cry
┃➥ ${prefix}hug
┃➥ ${prefix}awoo
┃➥ ${prefix}kiss
┃➥ ${prefix}lick
┃➥ ${prefix}pat
┃➥ ${prefix}bonk
┃➥ ${prefix}smug
┃➥ ${prefix}blush
┃➥ ${prefix}yeet
┃➥ ${prefix}smile
┃➥ ${prefix}wave
┃➥ ${prefix}highfive
┃➥ ${prefix}handhold
┃➥ ${prefix}nom
┃➥ ${prefix}bite
┃➥ ${prefix}glomp
┃➥ ${prefix}slap
┃➥ ${prefix}kill
┃➥ ${prefix}happy
┃➥ ${prefix}wink
┃➥ ${prefix}poke
┃➥ ${prefix}dance
┃➥ ${prefix}cringe
┃➥ ${prefix}waifus
┃➥ ${prefix}nekos
┃➥ ${prefix}trap
┃➥ ${prefix}blowjob
┃
┗━━━━━❲ ${botname} ❳━━━━━️`

let pornm = `┏━━━━━❲ 𝗣𝗢𝗥𝗡 🔞 ❳
┃
┃➥ ${prefix}filebokep
┃➥ ${prefix}porntok
┃➥ ${prefix}indohot
┃➥ ${prefix}phsearch
┃➥ ${prefix}asupan
┃➥ ${prefix}donghua
┃➥ ${prefix}xvsearch
┃➥ ${prefix}xnxxsearch
┃➥ ${prefix}javhddsearch
┃➥ ${prefix}javpornsearch
┃➥ ${prefix}xvideodl
┃➥ ${prefix}xnxxdl
┃➥ ${prefix}nekosearch
┃➥ ${prefix}nekolatest
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let randm = `┏━━━━━❲ 𝗥𝗔𝗡𝗗𝗢𝗠 🔀 ❳
┃
┃➥ ${prefix}coffe
┃➥ ${prefix}gore
┃➥ ${prefix}motivasi
┃➥ ${prefix}dilanquote
┃➥ ${prefix}bucinquote
┃➥ ${prefix}dilan
┃➥ ${prefix}bucin
┃➥ ${prefix}hekerbucin
┃➥ ${prefix}katailham
┃➥ ${prefix}katasenja
┃➥ ${prefix}puisi
┃➥ ${prefix}cerpen
┃➥ ${prefix}ceritahoror
┃➥ ${prefix}couple
┃➥ ${prefix}couple2
┃➥ ${prefix}cecan
┃➥ ${prefix}kodebahasa
┃➥ ${prefix}font
┃➥ ${prefix}template
┃➥ ${prefix}modapk
┃➥ ${prefix}puisi2
┃➥ ${prefix}quotes
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let makm = `┏━━━━━❲ 𝗠𝗔𝗞𝗘𝗥 🛠️ ❳
┃
┣━━❲ 𝗧𝗘𝗫𝗧 𝗣𝗥𝗢 ❳
┃
┃➥ ${prefix}3dchristmas
┃➥ ${prefix}3ddeepsea
┃➥ ${prefix}americanflag
┃➥ ${prefix}3dscifi
┃➥ ${prefix}3drainbow
┃➥ ${prefix}3dwaterpipe
┃➥ ${prefix}halloweenskeleton
┃➥ ${prefix}sketch
┃➥ ${prefix}bluecircuit
┃➥ ${prefix}space
┃➥ ${prefix}metallic
┃➥ ${prefix}fiction
┃➥ ${prefix}greenhorror
┃➥ ${prefix}transformer
┃➥ ${prefix}berry
┃➥ ${prefix}thunder
┃➥ ${prefix}magma
┃➥ ${prefix}3dcrackedstone
┃➥ ${prefix}3dneonlight
┃➥ ${prefix}impressiveglitch
┃➥ ${prefix}naturalleaves
┃➥ ${prefix}fireworksparkle
┃➥ ${prefix}matrix
┃➥ ${prefix}dropwater
┃➥ ${prefix}harrypotter
┃➥ ${prefix}foggywindow
┃➥ ${prefix}neondevils
┃➥ ${prefix}christmasholiday
┃➥ ${prefix}3dgradient
┃➥ ${prefix}blackpink
┃➥ ${prefix}gluetext
┃➥ ${prefix}flaming
┃➥ ${prefix}fluming
┃➥ ${prefix}flarun
┃➥ ${prefix}flasmurf
┃
┣━━❲ 𝗣𝗛𝗢𝗧𝗢 𝗢𝗫𝗬 ❳
┃
┃➥ ${prefix}shadow
┃➥ ${prefix}romantic
┃➥ ${prefix}smoke
┃➥ ${prefix}burnpapper
┃➥ ${prefix}naruto
┃➥ ${prefix}lovemsg
┃➥ ${prefix}grassmsg
┃➥ ${prefix}lovetext
┃➥ ${prefix}coffecup
┃➥ ${prefix}butterfly
┃➥ ${prefix}harrypotter
┃➥ ${prefix}retrolol
┃
┣━━❲ 𝗘𝗣𝗛𝗢𝗧𝗢 ❳
┃
┃➥ ${prefix}ffcover
┃➥ ${prefix}crossfire
┃➥ ${prefix}galaxy
┃➥ ${prefix}glass
┃➥ ${prefix}neon
┃➥ ${prefix}beach
┃➥ ${prefix}blackpink
┃➥ ${prefix}igcertificate
┃➥ ${prefix}ytcertificate
┃
┗━━━━━❲ ${botname} ❳━━━━━️`

let funm = `┏━━━━━❲ 𝗙𝗨𝗡 😂 ❳
┃
┃➥ ${prefix}halah
┃➥ ${prefix}hilih
┃➥ ${prefix}huluh
┃➥ ${prefix}heleh
┃➥ ${prefix}holoh
┃➥ ${prefix}jadian
┃➥ ${prefix}jodohku
┃➥ ${prefix}truth
┃➥ ${prefix}dare
┃➥ ${prefix}ceksifat
┃➥ ${prefix}darkjokes
┃➥ ${prefix}tarot2
┃➥ ${prefix}memeindo
┃➥ ${prefix}rategoodlooking
┃➥ ${prefix}afk
┃➥ ${prefix}repeat
┃➥ ${prefix}simi
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let gamem =`┏━━━━━❲ 𝗚𝗔𝗠𝗘 🎮 ❳
┃
┃➥ ${prefix}delttt
┃➥ ${prefix}tictactoe
┃➥ ${prefix}family100
┃➥ ${prefix}game [option]
┃➥ ${prefix}math [mode]
┃➥ ${prefix}suitpvp [@tag]
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let prim = `┏━━━━━❲ 𝗣𝗥𝗜𝗠𝗕𝗢𝗡 🔮 ❳
┃
┃➥ ${prefix}nomorhoki
┃➥ ${prefix}artimimpi
┃➥ ${prefix}artinama
┃➥ ${prefix}ramaljodoh
┃➥ ${prefix}ramaljodohbali
┃➥ ${prefix}suamiistri
┃➥ ${prefix}ramalcinta
┃➥ ${prefix}cocoknama
┃➥ ${prefix}pasangan
┃➥ ${prefix}jadiannikah
┃➥ ${prefix}sifatusaha
┃➥ ${prefix}rezeki
┃➥ ${prefix}pekerjaan
┃➥ ${prefix}nasib
┃➥ ${prefix}penyakit
┃➥ ${prefix}tarot
┃➥ ${prefix}fengshui
┃➥ ${prefix}haribaik
┃➥ ${prefix}harisangar
┃➥ ${prefix}harisial
┃➥ ${prefix}nagahari
┃➥ ${prefix}arahrezeki
┃➥ ${prefix}peruntungan
┃➥ ${prefix}weton
┃➥ ${prefix}karakter
┃➥ ${prefix}keberuntungan
┃➥ ${prefix}memancing
┃➥ ${prefix}masasubur
┃➥ ${prefix}zodiak
┃➥ ${prefix}shio
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let anonm = `┏━━━━━❲ 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 💬 ❳
┃
┃➥ ${prefix}anonymous
┃➥ ${prefix}start
┃➥ ${prefix}next
┃➥ ${prefix}keluar
┃➥ ${prefix}sendkontak
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let mainm = `┏━━━━━❲ 𝗠𝗔𝗜𝗡 🤖 ❳
┃
┃➥ ${prefix}ping
┃➥ ${prefix}reqfitur
┃➥ ${prefix}owner
┃➥ ${prefix}menu / ${prefix}help
┃➥ ${prefix}delete
┃➥ ${prefix}infochat
┃➥ ${prefix}quoted / ${prefix}q
┃➥ ${prefix}aboutuser
┃➥ ${prefix}cheatgame on/off
┃➥ ${prefix}listpc
┃➥ ${prefix}olistgc
┃➥ ${prefix}listgc
┃➥ ${prefix}sendFile
┃➥ ${prefix}ceklimit
┃➥ ${prefix}bannedlist
┃➥ ${prefix}listprem
┃➥ ${prefix}olistprem
┃➥ ${prefix}listonline
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let dbm = `┏━━━━━❲ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 📂 ❳
┃
┃➥ ${prefix}setcmd
┃➥ ${prefix}listcmd
┃➥ ${prefix}delcmd
┃➥ ${prefix}lockcmd
┃➥ ${prefix}addmsg
┃➥ ${prefix}listmsg
┃➥ ${prefix}getmsg
┃➥ ${prefix}delmsg
┃➥ ${prefix}addvn
┃➥ ${prefix}listvn
┃➥ ${prefix}delvn
┃➥ ${prefix}addstick
┃➥ ${prefix}liststick
┃➥ ${prefix}delstick
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let ownm = `┏━━━━━❲ 𝗢𝗪𝗡𝗘𝗥 🧑‍💻 ❳
┃
┃➥ ${prefix}chat [option]
┃➥ ${prefix}ephemeral [option]
┃➥ ${prefix}display [option]
┃➥ ${prefix}canvas [option]
┃➥ ${prefix}setppbot
┃➥ ${prefix}join [link]
┃➥ ${prefix}leave
┃➥ ${prefix}block @user
┃➥ ${prefix}unblock @user
┃➥ ${prefix}bcgroup [text]
┃➥ ${prefix}bcall [text]
┃➥ ${prefix}bcmediatogc
┃➥ ${prefix}bcmedia
┃➥ ${prefix}totag
┃➥ ${prefix}setstatus
┃➥ ${prefix}addprem
┃➥ ${prefix}delprem
┃➥ ${prefix}dellimit
┃➥ ${prefix}banned
┃➥ ${prefix}unbanned
┃➥ ${prefix}autobio on/off
┃➥ ${prefix}autorespon on/off
┃➥ ${prefix}autoread on/off
┃➥ ${prefix}autoketik on/off
┃➥ ${prefix}autorecord on/off
┃➥ ${prefix}autoonline on/off
┃➥ ${prefix}autooffline on/off
┃➥ ${prefix}setexif
┃➥ ${prefix}eval
┃➥ =>
┃➥ >
┃➥ <
┃➥ $
┃
┗━━━━━❲ ${botname} ❳━━━━━`

let tobnn = [{
             urlButton: {
               displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
               url: 'https://youtube.com/channel/UCP4_s8Y7mKnhmZQemOq2xdw'
             }
           },
           {
             urlButton: {
               displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
               url: 'https://s.id/xyrobot'
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗢𝗪𝗡𝗘𝗥',
               id: 'owner',
             }
           },
           {
             quickReplyButton: {
               displayText: 'SEWABOT',
               id: 'donasi',
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧',
               id: 'ping',
             }
           }]
           
let buttonmenu = [{
             urlButton: {
               displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
               url: 'https://youtube.com/channel/UCP4_s8Y7mKnhmZQemOq2xdw'
             }
           },
           {
             urlButton: {
               displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
               url: 'https://s.id/xyrobot'
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗢𝗪𝗡𝗘𝗥',
               id: 'owner',
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗥𝗨𝗟𝗘𝗦',
               id: 'rules',
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗖𝗢𝗠𝗠𝗔𝗡𝗗',
               id: 'menu2',
             }
           }]
           
        switch(command) {
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await miku.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await miku.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            miku.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
            if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await miku.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) miku.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
            let sst =  `*Hai Kak ${m.pushName}*\n\n *🌿~List sewa bot zigxy~*
 •| 1 Minggu: 2K
 •| 1 bulan : 4K
 •| permanen: 5K
 •| premium: 2K

*~🌱Keuntungan bot~*
•On 24Jam
•Fast respon (sesuai jaringan)
•Bisa untuk jaga grup
•Menu bot nya banyak
•DLL 

*Bagi yang mau berdonasi*
*Agar bot bisa terus berkembang*
GOPAY:081334109123
DANA:081334109123
PULSA:081334109123
QRISS:MINTA KE OWNER
~TERIMAKASIH YANG TELAH BERDONASI~`
           let tobdn = [{
             urlButton: {
               displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
               url: 'https://youtube.com/channel/UCP4_s8Y7mKnhmZQemOq2xdw'
             }

           },
           {
             urlButton: {
               displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
               url: 'https://s.id/xyrobot'
             }
           },
           {
             urlButton: {
               displayText: '𝗢𝗪𝗡𝗘𝗥',
               url: 'http://wa.me/6281334109123'
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
               id: 'listmenu',
             }
           }]
           if (db.data.settings.displaymenu == 'gif') {
           miku.send5Gif(m.chat, sst, wm, menuvideo, tobdn)
           } else if (db.data.settings.displaymenu == 'image') {
           miku.send5Img(m.chat, sst, wm, yahaha, tobdn)
           } else if (db.data.settings.displaymenu == 'location') {
           miku.send5Loc(m.chat, sst, wm, yahaha, tobdn)
           } else if (db.data.settings.displaymenu == 'video') {
           miku.send5Vid(m.chat, sst, wm, menuvideo, tobdn)
           }
           }
           break
            case 'sc': {
            reply('Base Sc : https://github.com/DikaArdnt/Hisoka-Morou\n\nDont Forget Give Star And Donate To Dev&Contributor☺️')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (args[0] === 'mute') {
                    miku.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    miku.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    miku.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    miku.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    miku.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    miku.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    miku.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else {
           const sections = [
    {
	title: "𝗖𝗛𝗔𝗧 𝗠𝗨𝗧𝗘",
	rows: [
	    {title: "𝗠𝗨𝗧𝗘 ✅", rowId: ".chat mute", description: "❬-->> Mute Chat <<--❭"}
	]
    },
   {
	title: "𝗖𝗛𝗔𝗧 𝗨𝗡𝗠𝗨𝗧𝗘",
	rows: [
	    {title: "𝗨𝗡𝗠𝗨𝗧𝗘 ❎", rowId: ".chat unmute", description: "❬-->> Unmute Chat <<--❭"}
	]
    },
    {
	title: "𝗖𝗛𝗔𝗧 𝗔𝗥𝗖𝗛𝗜𝗩𝗘",
	rows: [
	    {title: "𝗔𝗥𝗖𝗛𝗜𝗩𝗘 ❎", rowId: ".chat archive", description: "❬-->> Archive Chat <<--❭"}
	]
    },
    {
	title: "𝗖𝗛𝗔𝗧 𝗨𝗡𝗔𝗥𝗖𝗛𝗜𝗩𝗘",
	rows: [
	    {title: "𝗨𝗡𝗔𝗥𝗖𝗛𝗜𝗩𝗘 ❎", rowId: ".chat unarchive", description: "❬-->> Unarchive Chat <<--❭"}
	]
    },
    {
	title: "𝗖𝗛𝗔𝗧 𝗥𝗘𝗔𝗗",
	rows: [
	    {title: "𝗥𝗘𝗔𝗗 ❎", rowId: ".chat read", description: "❬-->> Read Chat <<--❭"}
	]
    },
    {
	title: "𝗖𝗛𝗔𝗧 𝗨𝗡𝗥𝗘𝗔𝗗",
	rows: [
	    {title: "𝗨𝗡𝗥𝗘𝗔𝗗 ❎", rowId: ".chat unread", description: "❬-->> Unread Chat <<--❭"}
	]
    },
    {
	title: "𝗖𝗛𝗔𝗧 𝗗𝗘𝗟𝗘𝗧𝗘",
	rows: [
	    {title: "𝗗𝗘𝗟𝗘𝗧𝗘 ❎", rowId: ".chat delete", description: "❬-->> Delete Chat <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
            }
            break
	    case 'family100': {
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if ('family100'+m.chat in _family100) {
                    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                if (db.data.users[m.sender].cheatgame) {
                miku.sendMessage(m.sender, { text: `*Jawabanya :* ${util.format(random.jawaban)}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                }
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await miku.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'truth':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
              let trut = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/truth.json')
              let ttrth = trut[Math.floor(Math.random() * trut.length)]
              let jjs = `── 「 𝗧𝗥𝗨𝗧𝗛 」 ──\n\n${ttrth}`
              let tobn = [{
             urlButton: {
               displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
               url: 'https://s.id/chyoutubeku'
             }
           },
           {
             urlButton: {
               displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
               url: 'https://s.id/mikubot'
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗧𝗥𝗨𝗧𝗛',
               id: 'truth',
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗗𝗔𝗥𝗘',
               id: 'dare',
             }
           }]
              if (db.data.settings.displaymenu == 'gif') {
              miku.send5Gif(m.chat, jjs, wm, menuvideo, tobn)
              } else if (db.data.settings.displaymenu == 'image') {
              miku.send5Img(m.chat, jjs, wm, yahaha, tobn)
              } else if (db.data.settings.displaymenu == 'location') {
              miku.send5Loc(m.chat, jjs, wm, yahaha, tobn)
              } else if (db.data.settings.displaymenu == 'video') {
              miku.send5Vid(m.chat, jjs, wm, menuvideo, tobn)
              }
              break
              case 'dare':
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
              let dare = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/dare.json')
              let der = dare[Math.floor(Math.random() * dare.length)]
              let jjss = `── 「 𝗗𝗔𝗥𝗘 」 ──\n\n${der}`
              let tobni = [{
             urlButton: {
               displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
               url: 'https://s.id/chyoutubeku'
             }
           },
           {
             urlButton: {
               displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
               url: 'https://s.id/mikubot'
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗧𝗥𝗨𝗧𝗛',
               id: 'truth',
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗗𝗔𝗥𝗘',
               id: 'dare',
             }
           }]
              if (db.data.settings.displaymenu == 'gif') {
              miku.send5Gif(m.chat, jjss, wm, menuvideo, tobni)
              } else if (db.data.settings.displaymenu == 'image') {
              miku.send5Img(m.chat, jjss, wm, yahaha, tobni)
              } else if (db.data.settings.displaymenu == 'location') {
              miku.send5Loc(m.chat, jjss, wm, yahaha, tobni)
              } else if (db.data.settings.displaymenu == 'video') {
              miku.send5Vid(m.chat, jjss, wm, menuvideo, tobni)
              }
              break
              case 'bucin':
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
              let bucinq = fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/bucin.json')
              let quotb = bucinq[Math.floor(Math.random() * bucinq.length)]
              let busa = [
                    { buttonId: 'bucin', buttonText: { displayText: '𝗡𝗘𝗫𝗧' }, type: 1 }
                    ]
              miku.sendButtonText(m.chat, busa, quotb, wm, m)
              break
              case 'renungan': {
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
              db.data.users[m.sender].limit -= 1 
              let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/renungan.json')
              let result = anu[Math.floor(Math.random() * anu.length)]
              miku.sendMessage(m.chat, { caption: 'Renungan for Everyone', image: { url: result }, footer: wm, buttons: [{buttonId: `${prefix}renungan`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
              }
              break
              case 'hekerbucin':
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
              db.data.users[m.sender].limit -= 1 
              let bucinhq = JSON.parse(fs.readFileSync('./src/fitur/hekerbucin.json'))
              let quohb = bucinhq[Math.floor(Math.random() * bucinhq.length)]
              let ksksq = [
                    { buttonId: 'hekerbucin', buttonText: { displayText: '𝗡𝗘𝗫𝗧' }, type: 1 }
                    ]
              miku.sendButtonText(m.chat, ksksq, quohb, wm, m)
              break
              case 'katailham':
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
              db.data.users[m.sender].limit -= 1 
              let ihm = JSON.parse(fs.readFileSync('./src/fitur/katailham.json'))
              let knsk = ihm[Math.floor(Math.random() * ihm.length)]
              let hqbn = [
                    { buttonId: 'katailham', buttonText: { displayText: '𝗡𝗘𝗫𝗧' }, type: 1 }
                    ]
              miku.sendButtonText(m.chat, hqbn, knsk, wm, m)
              break
case 'indohot':
if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let indh = JSON.parse(fs.readFileSync('./src/fitur/indohot.json'))
let rndh = indh[Math.floor(Math.random() * indh.length)]
let hos = `── 「 *INDO HOT* 」 ──\n\n${rndh}`
let buttonsq = [
                    { buttonId: 'indohot', buttonText: { displayText: '𝗡𝗘𝗫𝗧' }, type: 1 }
                    ]
              miku.sendButtonText(m.chat, buttonsq, hos, wm, m)
break
case 'puisi2':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let pui = JSON.parse(fs.readFileSync('./src/fitur/puisi.json'))
let isis = pui[Math.floor(Math.random() * pui.length)]
let buttoqqns = [
                    { buttonId: 'puisi2', buttonText: { displayText: '𝗡𝗘𝗫𝗧' }, type: 1 }
                    ]
              miku.sendButtonText(m.chat, buttoqqns, isis, wm, m)
break
case 'dilan':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let dilanq = JSON.parse(fs.readFileSync('./src/fitur/dilan.json'))
let quotbb = dilanq[Math.floor(Math.random() * dilanq.length)]
let dialnn = `_"${quotbb}"_\n_Dilan_`
let ttons = [
                    { buttonId: 'dilan', buttonText: { displayText: '𝗡𝗘𝗫𝗧' }, type: 1 }
                    ]
miku.sendButtonText(m.chat, ttons, dialnn, wm, m)
break
case 'herolist':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let { herolist } = require('./lib/herolist.js')
await herolist().then((ress) => {
let listt = `── 「 *HERO LIST* 」 ──\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
m.reply(listt)
})
break
case 'kodenuklir':
if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let  { kodeE, kodeMe, kodeH, kodeMl, kodemd, kodeR, kodeZp, kodeCn, kodeCn2, kodeByn, kodeBynm, kodeRn, kodeKn } = require('./src/fitur/kodenuklir')
let kodenyA = [ kodeE(), kodeMe(), kodeH(), kodeMl(), kodemd(), kodeR(), kodeZp(), kodeCn(), kodeCn2(), kodeByn(), kodeBynm(), kodeRn(), kodeKn() ]
let hashj = kodenyA[Math.floor(Math.random() * kodenyA.length)]
let babq = [
                    { buttonId: 'kodenuklir', buttonText: { displayText: '𝗡𝗘𝗫𝗧' }, type: 1 }
                    ]
miku.sendButtonText(m.chat, babq, hashj, wm, m)
break
case 'herodetail':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
if (!q) return reply('Nama Heronya?')
let { herodetails } = require('./lib/herodetail.js')
res = await herodetails(q)
her = `── 「 *HERO DETAIL* 」 ──

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
m.reply(her)
break
case 'resepmasakan':
case 'resep':
case 'masakan':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
if (!q) return reply(`Example: ${prefix + command} nasi kuning`)
mask = await fetchJson(`https://api.zeks.me/api/resep-masak?apikey=apivinz&q=${q}`)
knt = `*Judul :* ${mask.title}\n*Sumber :* ${mask.url}\n*Kesulitan :* ${mask.tingkat}\n\n*Bahan :* ${mask.bahan}\n*Caranya :* ${mask.cara}`
miku.sendMessage(m.chat, { image: { url: mask.thumb },  caption: knt }, { quoted: m })
break
case 'darkjokes':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
data = fs.readFileSync('./src/fitur/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
miku.sendMessage(m.chat, { caption: 'Dark Banget Kek Hati Dia :)', image: hasil, footer: wm, buttons: [{buttonId: `${prefix}darkjokes`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
break
case 'tarot2':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
data = fs.readFileSync('./src/fitur/tarot.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result.thumbnail)
miku.sendMessage(m.chat, { caption: `── 「 *${randKey.result.title}* 」 ──\n\n${randKey.result.desc}\n${randKey.result.story}`, image: hasil, footer: wm, buttons: [{buttonId: `${prefix}tarot2`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
break
case 'memeindo':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
data = fs.readFileSync('./src/fitur/memeindo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
miku.sendMessage(m.chat, { caption: ':v', image: hasil, footer: wm, buttons: [{buttonId: `${prefix}memeindo`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
break
case 'couple2':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
data = fs.readFileSync('./src/fitur/couple.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
miku.sendMessage(m.chat, { image: { url: randKey.male }, caption: `Couple Male` }, { quoted: m })
miku.sendMessage(m.chat, { image: { url: randKey.female }, caption: `Couple Female` }, { quoted: m })
break
case 'cerpen':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
data = fs.readFileSync('./src/fitur/cerpen.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = `── 「 *CERPEN* 」 ──\n\n*Judul :* ${randKey.result.title}\n*Creator :* ${randKey.result.creator}\n*Ceritanya :* ${randKey.result.cerpen}`
let bagbq = [
                    { buttonId: 'cerpen', buttonText: { displayText: '𝗡𝗘𝗫𝗧' }, type: 1 }
                    ]
miku.sendButtonText(m.chat, bagbq, hasil, wm, m)
break
case 'murothal':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let { Murothal } = require('./src/fitur/kodenuklir')
if (args[0]) {
reply(`Waitt,, jika audio tidak terkirim itu berarti ada kesalahan/error\nKamu bisa kunjungi sendiri web nya bila file audio nya lama terkirim, web : https://ia601804.us.archive.org/11/items/MisharyRasyidPerJuz/Mishary/${args[0]}.mp3`)
miku.sendMessage(m.chat, { audio: { url: `https://ia601804.us.archive.org/11/items/MisharyRasyidPerJuz/Mishary/${args[0]}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m })
} else {
const sections = [
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 1", description: "❬-->> Juz 1 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 2", description: "❬-->> Juz 2 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 3", description: "❬-->> Juz 3 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 4", description: "❬-->> Juz 4 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 5", description: "❬-->> Juz 5 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 6", description: "❬-->> Juz 6 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 7", description: "❬-->> Juz 7 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 8", description: "❬-->> Juz 8 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 9", description: "❬-->> Juz 9 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 10", description: "❬-->> Juz 10 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 11", description: "❬-->> Juz 11 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 12", description: "❬-->> Juz 12 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 13", description: "❬-->> Juz 13 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 14", description: "❬-->> Juz 14 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 15", description: "❬-->> Juz 15 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 16", description: "❬-->> Juz 16 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 17", description: "❬-->> Juz 17 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 18", description: "❬-->> Juz 18 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 19", description: "❬-->> Juz 19 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 20", description: "❬-->> Juz 20 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 21", description: "❬-->> Juz 21 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 22", description: "❬-->> Juz 22 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 23", description: "❬-->> Juz 23 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 24", description: "❬-->> Juz 24 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 25", description: "❬-->> Juz 25 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 26", description: "❬-->> Juz 26 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 27", description: "❬-->> Juz 27 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 28", description: "❬-->> Juz 28 To Audio <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊", rowId: ".murothal 29", description: "❬-->> Juz 29 To Audio <<--❭"}
	]
    },
    {
	title: "𝗠𝗨𝗥𝗢𝗧𝗛𝗔𝗟",
	rows: [
	    {title: "𝗔𝗨𝗗𝗜𝗢 𝗝𝗨𝗭 🔊️", rowId: ".murothal 30", description: "❬-->> Juz 30 To Audio <<--❭"}
	]
    },
]
       
const listMessage = {
  text: Murothal(),
  footer: wm,
  title: `LINK MUROTHAL`,
  buttonText: "𝗧𝗢 𝗔𝗨𝗗𝗜𝗢",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
}
break
case 'kisahnabi':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
if (args[0]) {
let anu = await fetchJson(`https://hardianto.xyz/api/muslim/kisahnabi?nabi=${args[0]}&apikey=hardianto`)
miku.sendText(m.chat, `── 「 𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜 」 ──\n\n𝗡𝗔𝗠𝗔 : ${anu.result.name}\n𝗟𝗔𝗛𝗜𝗥 : ${anu.result.kelahiran}\n𝗪𝗔𝗙𝗔𝗧 : ${anu.result.wafat_usia}\n𝗦𝗜𝗡𝗚𝗚𝗔𝗛 : ${anu.result.singgah}\n\n── 「 𝗞𝗜𝗦𝗔𝗛 𝗡𝗬𝗔 」 ──\n${anu.result.kisah}`, m)
} else {
const sections = [
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗔𝗗𝗔𝗠 𝗔𝗦 👳", rowId: ".kisahnabi adam", description: "❬-->> Kisah Nabi Adam As. <<--❭"}
	]
    },
   {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗜𝗗𝗥𝗜𝗦 𝗔𝗦 👳", rowId: ".kisahnabi idris", description: "❬-->> Kisah Nabi Idris As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗡𝗨𝗛 𝗔𝗦 👳️", rowId: ".kisahnabi nuh", description: "❬-->> Kisah Nabi Nuh As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗛𝗨𝗗 𝗔𝗦 👳", rowId: ".kisahnabi hud", description: "❬-->> Kisah Nabi Hud As. <<--❭"}
	]
    },
   {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗦𝗛𝗢𝗟𝗘𝗛 𝗔𝗦 👳", rowId: ".kisahnabi sholeh", description: "❬-->> Kisah Nabi Sholeh As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗜𝗕𝗥𝗔𝗛𝗜𝗠 𝗔𝗦 👳️", rowId: ".kisahnabi ibrahim", description: "❬-->> Kisah Nabi Ibrahim As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗜𝗦𝗠𝗔𝗜𝗟 𝗔𝗦 👳", rowId: ".kisahnabi ismail", description: "❬-->> Kisah Nabi Ismail As. <<--❭"}
	]
    },
   {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗟𝗨𝗧𝗛 𝗔𝗦 👳", rowId: ".kisahnabi luth", description: "❬-->> Kisah Nabi Luth As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗜𝗦𝗛𝗔𝗤 𝗔𝗦 👳️", rowId: ".kisahnabi ishaq", description: "❬-->> Kisah Nabi Ishaq As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗬𝗔𝗤𝗨𝗕 𝗔𝗦 👳", rowId: ".kisahnabi yaqub", description: "❬-->> Kisah Nabi Yaqub As. <<--❭"}
	]
    },
   {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗬𝗨𝗦𝗨𝗙 𝗔𝗦 👳", rowId: ".kisahnabi yusuf", description: "❬-->> Kisah Nabi Yusuf As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗦𝗬𝗨'𝗔𝗜𝗕 𝗔𝗦 👳️", rowId: ".kisahnabi syuaib", description: "❬-->> Kisah Nabi Syu'aib As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗔𝗬𝗬𝗨𝗕 𝗔𝗦 👳", rowId: ".kisahnabi ayyub", description: "❬-->> Kisah Nabi Ayyub As. <<--❭"}
	]
    },
   {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗗𝗭𝗨𝗟𝗞𝗜𝗙𝗟𝗜 𝗔𝗦 👳", rowId: ".kisahnabi dzulkifli", description: "❬-->> Kisah Nabi Dzulkifli As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗠𝗨𝗦𝗔 𝗔𝗦 👳️", rowId: ".kisahnabi musa", description: "❬-->> Kisah Nabi Musa As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗛𝗔𝗥𝗨𝗡 𝗔𝗦 👳", rowId: ".kisahnabi harun", description: "❬-->> Kisah Nabi Harun As. <<--❭"}
	]
    },
   {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗗𝗔𝗨𝗗 𝗔𝗦 👳", rowId: ".kisahnabi daud", description: "❬-->> Kisah Nabi Daud As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗦𝗨𝗟𝗔𝗜𝗠𝗔𝗡 𝗔𝗦 👳️", rowId: ".kisahnabi sulaiman", description: "❬-->> Kisah Nabi Sulaiman As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗜𝗟𝗬𝗔𝗦 𝗔𝗦 👳", rowId: ".kisahnabi ilyas", description: "❬-->> Kisah Nabi Ilyas As. <<--❭"}
	]
    },
   {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗜𝗟𝗬𝗔𝗦𝗔 𝗔𝗦 👳", rowId: ".kisahnabi ilyasa", description: "❬-->> Kisah Nabi Ilyasa As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗬𝗨𝗡𝗨𝗦 𝗔𝗦 👳️", rowId: ".kisahnabi yunus", description: "❬-->> Kisah Nabi Yunus As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗭𝗔𝗞𝗔𝗥𝗜𝗬𝗔 𝗔𝗦 👳", rowId: ".kisahnabi zakariya", description: "❬-->> Kisah Nabi Zakariya As. <<--❭"}
	]
    },
   {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗬𝗔𝗛𝗬𝗔 𝗔𝗦 👳", rowId: ".kisahnabi yahya", description: "❬-->> Kisah Nabi Yahya As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗜𝗦𝗔 𝗔𝗦 👳️", rowId: ".kisahnabi isa", description: "❬-->> Kisah Nabi Isa As. <<--❭"}
	]
    },
    {
	title: "𝗞𝗜𝗦𝗔𝗛 𝗡𝗔𝗕𝗜",
	rows: [
	    {title: "𝗠𝗨𝗛𝗔𝗠𝗠𝗔𝗗 𝗦𝗔𝗪 👳", rowId: ".kisahnabi muhammad", description: "❬-->> Kisah Nabi Muhammad Saw. <<--❭"}
	]
    },
]
       
const listMessage = {
  text: "Gunakan Fitur Dengan Baik Ya Kak. Jika Menemukan Bug/Error Dan Sejenisnya, Langsung Lapor/Beritau Saja Ke Owner",
  footer: "Silahlkan Dipilih, I Hope Your Happy :)",
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
}
break
case 'modapk':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let { ModApk } = require('./src/fitur/kodenuklir')
reply(ModApk())
break
case 'template':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let { Template } = require('./src/fitur/kodenuklir')
reply(Template())
break
case 'font':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let { Font } = require('./src/fitur/kodenuklir')
reply(Font())
break
case 'ceritahoror':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
data = fs.readFileSync('./src/fitur/horor.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = `── 「 *CERITA HOROR* 」 ──\n\n*Judul :* ${randKey.result.title}\n*Ceritanya :* ${randKey.result.desc}`
let ings = await getBuffer(randKey.result.thumbnail)
miku.sendMessage(m.chat, { caption: hasil, image: ings, footer: wm, buttons: [{buttonId: `${prefix}ceritahoror`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
break
case 'filebokep':
if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 5
data = fs.readFileSync('./src/fitur/18.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
let bbq = [
                    { buttonId: 'filebokep', buttonText: { displayText: '𝗡𝗘𝗫𝗧' }, type: 1 }
                    ]
miku.sendButtonText(m.chat, bbq, randKey.teks, wm, m)
break
case 'asupan':
if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 5
data = fs.readFileSync('./src/fitur/asupan.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
miku.sendMessage(m.chat, { caption: 'Jan Ngaceng Ya Anjc', video: { url: randKey.result }, footer: wm, buttons: [{buttonId: `${prefix}asupan`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
break
case 'donghua': {
if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 2
let dong = JSON.parse(fs.readFileSync('./src/fitur/donghua.json'))
let hua = dong[Math.floor(Math.random() * dong.length)]
miku.sendMessage(m.chat, { caption: 'Jan Ngaceng Ya Anjc', video: { url: hua.result }, footer: wm, buttons: [{buttonId: `${prefix}donghua`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
}
break
case 'rategoodlooking': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
rateganteng = body.slice(1)
const rate = ['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','1%','11%','12%','13%','14%','6%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']
const ganteng = rate[Math.floor(Math.random() * rate.length)]
miku.sendMessage(m.chat, { text: '*Pertanyaan :* '+rateganteng+'\n*Jawaban :* '+ ganteng }, { quoted: fkontak })
}
break
case 'ceksifat': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
if (!m.mentionedJid[0] && !m.quoted) throw `*${prefix + command} <Tag/Reply User nya>*`
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let kosn = `── 「 *CEK SIFAT* 」 ──

User : @${users.split('@')[0]}
Ahlak Baik : ${pickRandom(['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','1%','11%','12%','13%','14%','6%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%','98,3%','99,7%','99,9%','2,9%','0%','0,4%'])}
Ahlak Buruk : ${pickRandom(['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','1%','11%','12%','13%','14%','6%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%','98,3%','99,7%','99,9%','2,9%','0%','0,4%'])}
Orang yang : ${pickRandom(['Baik Hati','Sombong','Pelit','Dermawan','Rendah Hati','Rendah Diri','Pemalu','Penakut','Pengusil','Cengeng','Pemarah'])}
Selalu : ${pickRandom(['Rajin','Malas','Membantu','Ngegosip','Jail','Gak jelas','Shoping','Chattan sama Doi','Chattan di WA karna Jomblo','Sedih','Kesepian','Bahagia','Coli pake foto kartun','Minta duit ke orang tua','Ngelawan ke Orang Tua'])}
Kecerdasan : ${pickRandom(['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','1%','11%','12%','13%','14%','6%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%','98,3%','99,7%','99,9%','2,9%','0%','0,4%'])}
Kenakalan : ${pickRandom(['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','1%','11%','12%','13%','14%','6%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%','98,3%','99,7%','99,9%','2,9%','0%','0,4%'])}
Keberanian : ${pickRandom(['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','1%','11%','12%','13%','14%','6%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%','98,3%','99,7%','99,9%','2,9%','0%','0,4%'])}
Ketakutan : ${pickRandom(['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','1%','11%','12%','13%','14%','6%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%','98,3%','99,7%','99,9%','2,9%','0%','0,4%'])}`
miku.sendTextWithMentions(m.chat, kosn, m)
}
break
case 'kodebahasa':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let { KodeB } = require('./src/fitur/kodenuklir')
reply(KodeB())
break
            case 'banned': case 'ban': case 'banuser': case 'banneduser': {
            if (!isCreator) throw mess.owner
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            if (db.data.users[users].banned) return reply(`Dia sudah dibanned!`)
            db.data.users[users].banned = true
            miku.sendTextWithMentions(m.chat, `Berhasil membanned @${users.split('@')[0]}`, m)
            }
            break
            case 'unbanned': case 'unbanuser': case 'unban': case 'unbanneduser': {
            if (!isCreator) throw mess.owner
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            if (!db.data.users[users].banned) return reply(`Dia belum dibanned!`)
            db.data.users[users].banned = false
            miku.sendTextWithMentions(m.chat, `Berhasil unbanned @${users.split('@')[0]}`, m)
            }
            break
            case 'infoban': case 'infobanned': case 'bannedlist': case 'listban': case 'listbanned': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
            let caption = `── 「 *LIST USER TERBANNED* 」 ──

Total : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
${i + 1}. ${miku.getName(jid) == undefined ? 'Unknown' : miku.getName(jid)}
${isCreator ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
`.trim()

miku.sendTextWithMentions(m.chat, caption, m)
            }
            break
            case 'game': case 'tebak': {
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    let msg = await miku.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    miku.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.name}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendImage(m.chat, result.img, `Silahkan Jawab Bendera Negara Apakah Di Atas Ini\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {             
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.title}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendImage(m.chat, result.url, `Silahkan Jawab Bendera Kabupaten Apakah Di Atas Ini\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak kabupaten', buttonText: { displayText: 'Tebak Kabupaten' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapaaku') {
                    if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    siapaaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak siapaaku', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `Waktu Habis\nJawaban:  ${siapaaku[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete siapaaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                    if (asahotak.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    asahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak asahotak', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `Waktu Habis\nJawaban:  ${asahotak[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete asahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                    if (tekateki.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak tekateki', buttonText: { displayText: 'Tebak Tekateki' }, type: 1 }], `Waktu Habis\nJawaban:  ${tekateki[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tekateki[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.lambang}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `Apa lambang dari unsur ${result.unsur} dalam kimia?\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak kimia', buttonText: { displayText: 'Tebak Kimia' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                    if (susunkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `Susun Kata Tersebut : *${result.soal}*?\nTipe : *${tipe}*\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${susunkata[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete susunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    if (db.data.users[m.sender].cheatgame) {
                    miku.sendMessage(m.sender, { text: `*Jawabanya :* ${result.jawaban}\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<` }, { quoted: m})
                    }
                    miku.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    miku.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nIngin bermain? tekan button dibawah`, wm, m)
                    delete caklontong[m.sender.split('@')[0]]
                    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                } else {
           const sections = [
    {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨",
	rows: [
	    {title: "𝗟𝗔𝗚𝗨 🎤", rowId: ".tebak lagu", description: "❬-->> Tebak Lagu <<--❭"}
	]
    },
   {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗚𝗔𝗠𝗕𝗔𝗥",
	rows: [
	    {title: "𝗚𝗔𝗠𝗕𝗔𝗥 🖼️", rowId: ".tebak gambar", description: "❬-->> Tebak Lagu <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗕𝗘𝗡𝗗𝗘𝗥𝗔",
	rows: [
	    {title: "𝗕𝗘𝗡𝗗𝗘𝗥𝗔 🏴️", rowId: ".tebak bendera", description: "❬-->> Tebak Bendera <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗕𝗨𝗣𝗔𝗧𝗘𝗡",
	rows: [
	    {title: "𝗞𝗔𝗕𝗨𝗣𝗔𝗧𝗘𝗡 🏳️️", rowId: ".tebak kabupaten", description: "❬-->> Tebak Kabupaten <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗧𝗔",
	rows: [
	    {title: "𝗞𝗔𝗧𝗔 🅰️", rowId: ".tebak kata", description: "❬-->> Tebak Kata <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗧𝗘𝗕𝗔𝗞𝗔𝗡",
	rows: [
	    {title: "𝗧𝗘𝗕𝗔𝗞𝗔𝗡 🤔", rowId: ".tebak tebakan", description: "❬-->> Tebak Tebakan <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔",
	rows: [
	    {title: "𝗞𝗜𝗠𝗜𝗔 🔬️", rowId: ".tebak kimia", description: "❬-->> Tebak Kimia <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘  𝗧𝗘𝗞𝗔-𝗧𝗘𝗞𝗜",
	rows: [
	    {title: "𝗧𝗘𝗞𝗔-𝗧𝗘𝗞𝗜 ️", rowId: ".tebak tekateki", description: "❬-->> Tebak Teka-teki <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧",
	rows: [
	    {title: "𝗞𝗔𝗟𝗜𝗠𝗔𝗧 📝", rowId: ".tebak kalimat", description: "❬-->> Tebak Kalimat <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞",
	rows: [
	    {title: "𝗟𝗜𝗥𝗜𝗞 🎶", rowId: ".tebak lirik", description: "❬-->> Tebak Lirik <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗦𝗜𝗔𝗣𝗔 𝗔𝗞𝗨",
	rows: [
	    {title: "𝗦𝗜𝗔𝗣𝗔 𝗔𝗞𝗨 ❓", rowId: ".tebak siapaaku", description: "❬-->> Tebak Siapa Aku <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗖𝗔𝗞𝗟𝗢𝗡𝗧𝗢𝗡𝗚",
	rows: [
	    {title: "𝗖𝗔𝗞𝗟𝗢𝗡𝗧𝗢𝗡𝗚 🛎️", rowId: ".tebak lontong", description: "❬-->> Tebak Caklontong <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞",
	rows: [
	    {title: "𝗔𝗦𝗔𝗛𝗢𝗧𝗔𝗞 🧠", rowId: ".tebak asahotak", description: "❬-->> Asah Otak <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔",
	rows: [
	    {title: "𝗦𝗨𝗦𝗨𝗡𝗞𝗔𝗧𝗔 🧑‍🏫", rowId: ".tebak susunkata", description: "❬-->> Susun Kata <<--❭"}
	]
    },
    {
	title: "𝗚𝗔𝗠𝗘 𝗙𝗔𝗠𝗜𝗟𝗬 100",
	rows: [
	    {title: "𝗙𝗔𝗠𝗜𝗟𝗬100 👨‍👩‍👧‍👦️", rowId: ".family100", description: "❬-->> family100 <<--❭"}
	]
    },
    {
	title: "𝗞𝗨𝗜𝗦 𝗠𝗔𝗧𝗛 𝗡𝗢𝗢𝗕",
	rows: [
	    {title: "𝗡𝗢𝗢𝗕 😹", rowId: ".kuismath noob", description: "❬-->> Kuis Math Noob <<--❭"}
	]
    },
    {
	title: "𝗞𝗨𝗜𝗦 𝗠𝗔𝗧𝗛 𝗘𝗔𝗦𝗬",
	rows: [
	    {title: "𝗘𝗔𝗦𝗬 😸", rowId: ".kuismath easy", description: "❬-->> Kuis Math Easy <<--❭"}
	]
    },
    {
	title: "𝗞𝗨𝗜𝗦 𝗠𝗔𝗧𝗛 𝗠𝗘𝗗𝗜𝗨𝗠 ",
	rows: [
	    {title: "𝗠𝗘𝗗𝗜𝗨𝗠  😺️", rowId: ".kuismath medium", description: "❬-->> Kuis Math Medium <<--❭"}
	]
    },
    {
	title: "𝗞𝗨𝗜𝗦 𝗠𝗔𝗧𝗛 𝗛𝗔𝗥𝗗",
	rows: [
	    {title: "𝗛𝗔𝗥𝗗 😼", rowId: ".kuismath hard", description: "❬-->> Kuis Math Hard <<--❭"}
	]
    },
    {
	title: "𝗞𝗨𝗜𝗦 𝗠𝗔𝗧𝗛 𝗘𝗫𝗧𝗥𝗘𝗠𝗘",
	rows: [
	    {title: "𝗘𝗫𝗧𝗥𝗘𝗠𝗘 🙀", rowId: ".kuismath extreme", description: "❬-->> Kuis Math Extreme <<--❭"}
	]
    },
    {
	title: "𝗞𝗨𝗜𝗦 𝗠𝗔𝗧𝗛 𝗜𝗠𝗣𝗢𝗦𝗦𝗜𝗕𝗟𝗘",
	rows: [
	    {title: "𝗜𝗠𝗣𝗢𝗦𝗦𝗜𝗕𝗟𝗘 😿", rowId: ".kuismath impossible", description: "❬-->> Kuis Math Impossible <<--❭"}
	]
    },
    {
	title: "𝗞𝗨𝗜𝗦 𝗠𝗔𝗧𝗛 𝗜𝗠𝗣𝗢𝗦𝗦𝗜𝗕𝗟𝗘2",
	rows: [
	    {title: "𝗜𝗠𝗣𝗢𝗦𝗦𝗜𝗕𝗟𝗘2 😾", rowId: ".kuismath impossible2", description: "❬-->> Kuis Math Impossible2 <<--❭"}
	]
    },
]

               const listMessage = {
  text: "Mau Main Game Apa Nih kira-kira ?? SemogaSelalu Berhasil Dan Beruntung Selalu Ya Kak",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

let quts = await miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
if (isPremium) {
if (!db.data.users[m.sender].cheatgame) {
let busa = [
                    { buttonId: '.cheatgame on', buttonText: { displayText: '𝗬𝗔' }, type: 1 }
                    ]
miku.sendButtonText(m.chat, busa, 'Tetapi sebelum Kamu memulai game, apakah Kamu ingin menggunakan cheat? Tekan button di bawah untuk "YA", Jangan tekan button di bawah jika tidak ingin menggunakan cheat:v\n\n*Note :* Fitur Cheatgame hanya ada untuk user premium:v', wm, quts)
} else if (db.data.users[m.sender].cheatgame) {
let busa = [
                    { buttonId: '.cheatgame off', buttonText: { displayText: '𝗬𝗔' }, type: 1 }
                    ]
miku.sendButtonText(m.chat, busa, 'Tetapi sebelum Kamu memulai game, apakah Kamu yakin masih ingin menggunakan cheat!! Mau nonaktifkan Cheatgame? Tekan button "YA" di bawah untuk menonaktifkan Cheatgame, Jangan tekan button di bawah jika masih ingin menggunakan cheat:v\n\n*Note :* Fitur Cheatgame hanya ada untuk user premium:v', wm, quts)
}
}
           }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                if (db.data.users[m.sender].cheatgame) {
                let wjb = await m.reply(result.jawaban)
                miku.sendMessage(m.sender, { text: 'Itu Jawabannya:v\nAku ngasih tau kamu jawabannya karena kamu itu spesial buat aku>.<' }, { quoted: wjb})
                }
                await miku.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik\n\nJika Kamu tidak bisa menjawab maka limit Kamu akan dikurangi sebesar '5'. Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    db.data.users[m.sender].limit -= 5
                    reply(`Waktu Habis\nLimit Kamu berkurang '5', Limit Kamu sekarang sebesar ${db.data.users[m.sender].limit}\nJawaban: ` + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, jawab, wm, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, jawab, wm, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await miku.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await miku.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply('sukses kick member')).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply('sukses menambahkan member baru')).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply('sukses membuat member jelata menjadi admin')).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply('sukses membuat admin menjadi member jelata')).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await miku.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await miku.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setprofile': case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                await miku.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
                case 'setstatus': case 'setbio': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} miku Ganteng`
                await miku.setStatus(text)
                reply(mess.success)
                }
                break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                await miku.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
                case 'autoonline': {
                if (!isCreator && !m.key.fromMe) return reply(mess.owner)
                if (args[0] === 'on'){
                if (db.data.settings[botNumber].autoonline) return reply(`Status Bot Online sudah diaktifkan sebelumnya`)
                db.data.settings[botNumber].autoonline = true
                db.data.settings[botNumber].autooffline = false
                reply(`Status Bot Online berhasil diaktifkan, Sekarang status Bot akan terlihat Online`)
                } else if (args[0] === 'off'){
                if (!db.data.settings[botNumber].autoonline) return reply(`Status Bot Online sudah dinonaktifkan sebelumnya`)
                db.data.settings[botNumber].autoonline = false
                db.data.settings[botNumber].autooffline = true
                reply(`Status Bot Online berhasil dinonaktifkan, Sekarang status Bot akan terlihat Offline`)
                } else {
                const sections = [
    {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢 𝗢𝗡𝗟𝗜𝗡𝗘 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".autoonline on", description: "❬-->> Aktifkan status Online Bot <<--❭"}
	]
    },
   {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢 𝗢𝗡𝗟𝗜𝗡𝗘 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".autoonline off", description: "❬-->> Nonaktifkan status Online Bot <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
           }
           break
           case 'autooffline': {
                if (!isCreator && !m.key.fromMe) return reply(mess.owner)
                if (args[0] === 'on'){
                if (db.data.settings[botNumber].autooffline) return reply(`Status Bot Offline sudah diaktifkan sebelumnya`)
                db.data.settings[botNumber].autooffline = true
                db.data.settings[botNumber].autoonline = false
                reply(`Status Bot Offline berhasil diaktifkan, Sekarang status Bot akan terlihat Offline`)
                } else if (args[0] === 'off'){
                if (!db.data.settings[botNumber].autooffline) return reply(`Status Bot Offline sudah dinonaktifkan sebelumnya`)
                db.data.settings[botNumber].autooffline = false
                db.data.settings[botNumber].autoonline = true
                reply(`Status Bot Offline berhasil dinonaktifkan, Sekarang status Bot akan terlihat Online`)
                } else {
                const sections = [
    {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢 𝗢𝗙𝗙𝗟𝗜𝗡𝗘 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".autooffline on", description: "❬-->> Aktifkan status Offline Bot <<--❭"}
	]
    },
   {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢 𝗢𝗙𝗙𝗟𝗜𝗡𝗘 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".autooffline off", description: "❬-->> Nonaktifkan status Offline Bot <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
           }
           break
           case 'autoketik':
                if (!isCreator && !m.key.fromMe) return reply(mess.owner)
                if (args[0] === 'on'){
                if (db.data.settings[botNumber].autoketik) return reply(`Status Bot Auto Ketik sudah diaktifkan sebelumnya`)
                db.data.settings[botNumber].autoketik = true
                //db.data.settings[botNumber].autorecord = false
                reply(`Sukses Mengaktifkan Auto Ketik, Sekarang Bot Auto Ketik`)
                } else if (args[0] === 'off'){
                if (!db.data.settings[botNumber].autoketik) return reply(`Status Bot Auto Ketik sudah dinonaktifkan sebelumnya`)
                db.data.settings[botNumber].autoketik = false
                //db.data.settings[botNumber].autorecord = true
                reply(`Sukses Menonaktifkan Auto Ketik, Sekarang Bot Tidak Auto Ketik`)
                } else {
                const sections = [
    {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢 𝗞𝗘𝗧𝗜𝗞",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".autoketik on", description: "❬-->> Aktifkan Bot Auto Ketik <<--❭"}
	]
    },
   {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢 𝗞𝗘𝗧𝗜𝗞",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".autoketik off", description: "❬-->> Nonktifkan Bot Auto Ketik <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
           break
           case 'autorecord':
                if (!isCreator && !m.key.fromMe) return reply(mess.owner)
                if (args[0] === 'on'){
                if (db.data.settings[botNumber].autorecord) return reply(`Status Bot Auto Record sudah diaktifkan sebelumnya`)
                db.data.settings[botNumber].autorecord = true
                //db.data.settings[botNumber].autoketik = false
                reply(`Sukses Mengaktifkan Auto Record, Sekarang Bot Auto Record`)
                } else if (args[0] === 'off'){
                if (!db.data.settings[botNumber].autorecord) return reply(`Status Bot Auto Record sudah dinonaktifkan sebelumnya`)
                db.data.settings[botNumber].autorecord = false
                //db.data.settings[botNumber].autoketik = true
                reply(`Sukses Menonaktifkan Auto Record, Sekarang Bot Tidak Auto Record`)
                } else {
                const sections = [
    {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢 𝗥𝗘𝗖𝗢𝗥𝗗𝗜𝗡𝗚",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".autorecord on", description: "❬-->> Aktifkan Bot Auto Record <<--❭"}
	]
    },
   {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢 𝗥𝗘𝗖𝗢𝗥𝗗𝗜𝗡𝗚",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".autorecord off", description: "❬-->> Nonktifkan Bot Auto Record <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
           break
            case 'autoread':
            if (!isCreator) return reply(mess.owner)
           if (args[0] === 'on'){
           if (db.data.settings[botNumber].autoread) return reply(`Bot Auto Read sudah diaktifkan sebelumnya`)
           db.data.settings[botNumber].autoread = true
           reply(`Berhasil mengaktifkan autoread`)
           } else if (args[0] === 'off'){
           if (!db.data.settings[botNumber].autoread) return reply(`Bot Auto Read sudah dinonaktifkan sebelumnya`)
           db.data.settings[botNumber].autoread = false
           reply(`Berhasil menonaktifkan autoread`)
           } else {
           const sections = [
    {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢𝗥𝗘𝗔𝗗 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".autoread on", description: "❬-->> Aktifkan Autoread <<--❭"}
	]
    },
   {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢𝗥𝗘𝗔𝗗 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".autoread off", description: "❬-->> Nonaktifkan Autoread <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
           break
           case 'afk': {
           if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break
            case 'autostatus': case 'autobio':
            if (!isCreator) throw mess.owner
                if (args[0] === "on") {
                if (db.data.settings[botNumber].autobio) return reply(`Autobio sudah diaktifkan sebelumnya`)
                db.data.settings[botNumber].autobio = true
                reply(`Berhasil mengaktifkan Autobio!`)
                } else if (args[0] === "off") {
                if (!db.data.settings[botNumber].autobio) return reply(`Autobio sudah dinonaktifkan sebelumnya`)
                db.data.settings[botNumber].autobio = false
                reply(`Berhasil menonaktifkan Autobio!`)
                } else {
           const sections = [
    {
	title: "𝗔𝗨𝗧𝗢𝗕𝗜𝗢 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".autobio on", description: "❬-->> Aktifkan Autobio <<--❭"}
	]
    },
   {
	title: "𝗔𝗨𝗧𝗢𝗕𝗜𝗢 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".autobio off", description: "❬-->> Nonaktifkan Autobio <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
            break
            case 'autorespon':
            if (m.isGroup) throw mess.private
            if (!isCreator) return reply(mess.owner)
            if (args[0] === 'on'){
            if (autorespon) return reply(`Autorespon sudah diaktifkan sebelumnya`)
            autorespon = true
            reply(`Berhasil mengaktifkan autorespon`)
            } else if (args[0] === 'off'){
            if (!autorespon) return reply(`Autorespon sudah dinonaktifkan sebelumnya`)
            autorespon = false
            reply(`Berhasil menonaktifkan autorespon`)
            } else {
           const sections = [
    {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢𝗥𝗘𝗦𝗣𝗢𝗡 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".autorespon on", description: "❬-->> Aktifkan Autorespon <<--❭"}
	]
    },
   {
	title: "𝗕𝗢𝗧 𝗔𝗨𝗧𝗢𝗥𝗘𝗦𝗣𝗢𝗡 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".autorespon off", description: "❬-->> Nonaktifkan Autorespon <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
            break
            case 'display':
            if (!isCreator) return reply(mess.owner)
            if (args[0] === 'gif'){
            db.data.settings.displaymenu = 'gif'
            reply(`Berhasil menggunakan display ${q}`)
            } else if (args[0] === 'location'){
            db.data.settings.displaymenu = 'location'
            reply(`Berhasil menggunakan display ${q}`)
            } else if (args[0] === 'image'){
            db.data.settings.displaymenu = 'image'
            reply(`Berhasil menggunakan display ${q}`)
            } else if (args[0] === 'video'){
            db.data.settings.displaymenu = 'video'
            reply(`Berhasil menggunakan display ${q}`)
            } else {
           const sections = [
    {
	title: "𝗗𝗜𝗦𝗣𝗟𝗔𝗬 𝗚𝗜𝗙",
	rows: [
	    {title: "𝗚𝗜𝗙 📽️", rowId: ".display gif", description: "❬-->> Gunakan Display Gif <<--❭"}
	]
    },
   {
	title: "𝗗𝗜𝗦𝗣𝗟𝗔𝗬 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡",
	rows: [
	    {title: "𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡 📍", rowId: ".display location", description: "❬-->> Gunakan Display Location <<--❭"}
	]
    },
    {
	title: "𝗗𝗜𝗦𝗣𝗟𝗔𝗬 𝗜𝗠𝗔𝗚𝗘",
	rows: [
	    {title: "𝗜𝗠𝗔𝗚𝗘 🖼️", rowId: ".display image", description: "❬-->> Gunakan Display Image <<--❭"}
	]
    },
    {
	title: "𝗗𝗜𝗦𝗣𝗟𝗔𝗬 𝗩𝗜𝗗𝗘𝗢",
	rows: [
	    {title: "𝗩𝗜𝗗𝗘𝗢 📹", rowId: ".display video", description: "❬-->> Gunakan Display Video <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
            break
            case 'canvas':
            if (!isCreator) return reply(mess.owner)
            if (args[0] === 'A'){
            db.data.settings.canvasvariant = 'A'
            reply(`Berhasil menggunakan canvas ${q}`)
            } else if (args[0] === 'B'){
            db.data.settings.canvasvariant = 'B'
            reply(`Berhasil menggunakan canvas ${q}`)
            } else if (args[0] === 'AB'){
            db.data.settings.canvasvariant = 'AB'
            reply(`Berhasil menggunakan canvas ${q}`)
            } else if (args[0] === 'BA'){
            db.data.settings.canvasvariant = 'BA'
            reply(`Berhasil menggunakan canvas ${q}`)
            } else {
           const sections = [
    {
	title: "𝗖𝗔𝗡𝗩𝗔𝗦 𝗩𝗔𝗥𝗜𝗔𝗡𝗧",
	rows: [
	    {title: "𝗩𝗔𝗥𝗜𝗔𝗡𝗧 🅰️️", rowId: ".canvas A", description: "❬-->> Gunakan Canvas A <<--❭"}
	]
    },
   {
	title: "𝗖𝗔𝗡𝗩𝗔𝗦 𝗩𝗔𝗥𝗜𝗔𝗡𝗧",
	rows: [
	    {title: "𝗩𝗔𝗥𝗜𝗔𝗡𝗧 ️🅱️", rowId: ".canvas B", description: "❬-->> Gunakan Canvas B <<--❭"}
	]
    },
    {
	title: "𝗖𝗔𝗡𝗩𝗔𝗦 𝗩𝗔𝗥𝗜𝗔𝗡𝗧",
	rows: [
	    {title: "𝗩𝗔𝗥𝗜𝗔𝗡𝗧 🅰️🅱️️", rowId: ".canvas AB", description: "❬-->> Gunakan Canvas AB <<--❭"}
	]
    },
    {
	title: "𝗖𝗔𝗡𝗩𝗔𝗦 𝗩𝗔𝗥𝗜𝗔𝗡𝗧",
	rows: [
	    {title: "𝗩𝗔𝗥𝗜𝗔𝗡𝗧 🅱️🅰️", rowId: ".canvas BA", description: "❬-->> Gunakan Canvas BA <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
            break
            case 'antiporn': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isPremium && !isAdmins) throw 'Fitur ini hanya bisa digunakan digroup untuk owner/user premium/admin saja'
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antiporn) return reply(`Antiporn sudah diaktifkan di group ini sebelumnya`)
                db.data.chats[m.chat].antiporn = true
                reply(`Berhasil mengaktifkan antiporn!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antiporn) return reply(`Antiporn sudah dinonaktifkan di group ini sebelumnya`)
                db.data.chats[m.chat].antiporn = false
                reply(`Berhasil menonaktifkan antiporn!`)
                } else {
           const sections = [
    {
	title: "𝗔𝗡𝗧𝗜 𝗣𝗢𝗥𝗡 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".antiporn on", description: "❬-->> Aktifkan Antiporn <<--❭"}
	]
    },
   {
	title: "𝗔𝗡𝗧𝗜 𝗣𝗢𝗥𝗡 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".antiporn off", description: "❬-->> Nonaktifkan Antiporn <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
             }
             break
             case 'antilink': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isPremium && !isAdmins) throw 'Fitur ini hanya bisa digunakan digroup untuk owner/user premium/admin saja'
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Antilink sudah diaktifkan di group ini sebelumnya`)
                db.data.chats[m.chat].antilink = true
                reply(`Berhasil mengaktifkan antilink!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Antilink sudah dinonaktifkan di group ini sebelumnya`)
                db.data.chats[m.chat].antilink = false
                reply(`Berhasil menonaktifkan antilink!`)
                } else {
           const sections = [
    {
	title: "𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".antilink on", description: "❬-->> Aktifkan Antilink <<--❭"}
	]
    },
   {
	title: "𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".antilink off", description: "❬-->> Nonaktifkan Antilink <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
             }
             break
             case 'antiviewonce': {
                if (!isPremium && !isAdmins) throw 'Fitur ini hanya bisa digunakan untuk owner/user premium/admin saja'
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antiviewonce) return reply(`Antiviewonce sudah diaktifkan di chat ini sebelumnya`)
                db.data.chats[m.chat].antiviewonce = true
                reply(`Berhasil mengaktifkan antiviewonce di chat ini!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antiviewonce) return reply(`Antiviewonce sudah dinonaktifkan di chat ini sebelumnya`)
                db.data.chats[m.chat].antiviewonce = false
                reply(`Berhasil menonaktifkan antiviewonce di chat ini!`)
                } else {
           const sections = [
    {
	title: "𝗔𝗡𝗧𝗜𝗩𝗜𝗘𝗪𝗢𝗡𝗖𝗘 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".antiviewonce on", description: "❬-->> Aktifkan Antiviewonce <<--❭"}
	]
    },
   {
	title: "𝗔𝗡𝗧𝗜𝗩𝗜𝗘𝗪𝗢𝗡𝗖𝗘 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".antiviewonce off", description: "❬-->> Nonaktifkan Antiviewonce <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
             }
             break
             case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif berhasil diubah menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)
            }
            break
             case 'mute': {
             if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isPremium && !isAdmins) throw 'Fitur ini hanya bisa digunakan digroup untuk owner/user premium/admin saja'
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                reply(`Sekarang Group ini di mute oleh Admin!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                reply(`Sekarang Group ini di unmute oleh Admin!`)
                } else {
           const sections = [
    {
	title: "𝗠𝗨𝗧𝗘 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: "mute on", description: "❬-->> Aktifkan Mute <<--❭"}
	]
    },
   {
	title: "𝗠𝗨𝗧𝗘 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: "mute off", description: "❬-->> Nonaktifkan Mute <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
             }
             break
             case 'cheatgame': case 'citgem': case 'cheatgem': {
                if (!isPremium) throw mess.premi
                if (args[0] === "on") {
                if (db.data.users[m.sender].cheatgame) return reply(`Cheatgame Untuk Mu Sudah Aktif Sebelumnya!`)
                db.data.users[m.sender].cheatgame = true
                reply(`Fitur Cheatgame untuk Mu sekarang sudah aktif, Selamat ya!`)
                } else if (args[0] === "off") {
                if (!db.data.users[m.sender].cheatgame) return reply(`Cheatgame Untuk Mu Sudah Tidak Aktif Sebelumnya`)
                db.data.users[m.sender].cheatgame = false
                reply(`Fitur Cheatgame untuk Mu sekarang sudah nonaktif, Anti cheat-cheat club😎!`)
                } else {
           const sections = [
    {
	title: "𝗖𝗛𝗘𝗔𝗧 𝗚𝗔𝗠𝗘 𝗢𝗡",
	rows: [
	    {title: "𝗢𝗡 ✅", rowId: ".cheatgame on", description: "❬-->> Aktifkan Cheatgame <<--❭"}
	]
    },
   {
	title: "𝗖𝗛𝗘𝗔𝗧 𝗚𝗔𝗠𝗘 𝗢𝗙𝗙",
	rows: [
	    {title: "𝗢𝗙𝗙 ❎", rowId: ".cheatgame off", description: "❬-->> Nonaktifkan Cheatgame <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
             }
             break
            case 'tagall': {
            if (!m.isGroup) throw mess.group
                if (!isCreator && !isPremium && !isAdmins) throw 'Fitur ini hanya bisa digunakan digroup untuk owner/user premium/admin saja'
let teks = `── 「 𝗧𝗔𝗚 𝗔𝗟𝗟 」 ──
 
*Pesan : ${q ? q : ''}*\n\n`
                for (let mem of participants) {
                teks += `@${mem.id.split('@')[0]}\n`
                }
                miku.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'carigrup': case 'searchgc': case 'searchgroup': case 'carigc': case 'carigroup': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!q) return reply('Mau cari group apa?')
                let linkny = await fetchJson(`https://hardianto.xyz/api/search/linkwa?name=${q}&apikey=hardianto`)
                let teks = `── 「 𝗟𝗜𝗡𝗞 𝗚𝗥𝗢𝗨𝗣 」 ──\n\n`
                for (let m of linkny.result) {
                teks += `*Nama :* ${m.nama}\n*Link :* ${m.link}\n\n`
                }
                m.reply(teks)
                }
                break
                case 'creategroup': case 'creategrup': case 'buatgroup': case 'buatgrup': {
                if (!m.isGroup) throw mess.group
                if (!isCreator && !isPremium && !isAdmins) throw 'Fitur ini hanya bisa digunakan digroup untuk owner/user premium/admin saja'
                let member = participants.map(a => a.id)
                let group = await miku.groupCreate(q ? q : "New Group By miku Bot", member)
                let metadata = await miku.groupMetadata(group.id)
                teks = `── 「 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗔𝗟𝗟 𝗠𝗘𝗠 」 ──\n\n*Name :* ${metadata.subject}\n*Owner :* @${metadata.owner.split('@')[0]}\n*ID :* ${metadata.id}\n*Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Member :* ${metadata.participants.length}`
                let sapaan = await miku.sendMessage(group.id, { text: teks, mentions: participants.map(u => u.id) }, { quoted: m })
                miku.sendMessage(group.id, { text: 'I Hope Your Happy With The New Group', mentions: participants.map(b => b.id) }, { quoted: sapaan })
                reply(`Sukes Membuat Group Baru Dengan Nama '${metadata.subject}'. Jika ada member yang gak ke add otomatis silahkan klik link ini untuk join https://chat.whatsapp.com/${await miku.groupInviteCode(group.id)}`)
                }
                break
                case 'hidetag': {
                if (!m.isGroup) throw mess.group
            if (!isCreator && !isPremium && !isAdmins) throw 'Fitur ini hanya bisa digunakan digroup untuk owner/user premium/admin saja'
            let anjaw = m.quoted ? m.quoted.text : args.slice(1).join(' ')
            miku.sendMessage(m.chat, { text : anjaw ? anjaw : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'totag': {
            if (!m.isGroup) throw mess.group
            if (!isCreator && !isPremium && !isAdmins) throw 'Fitur ini hanya bisa digunakan digroup untuk owner/user premium/admin saja'
            if (!isMedia) throw 'Send/Kirim Image/Video/Audio/Sticker nya!'
            let media = await miku.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    await miku.sendMessage(m.chat, { sticker: { url: media }, mentions: participants.map(a => a.id)}, { quoted: fkontak })
                    } else if (/image/.test(mime)) {
                    miku.sendMessage(m.chat, { caption: q ? q : '', image: buffer, mentions: participants.map(a => a.id)}, {quoted: m})
                    } else if (/video/.test(mime)) {
                    miku.sendMessage(m.chat, { caption: q ? q : '', video: buffer, mentions: participants.map(a => a.id)}, {quoted: m})
                    } else if (/audio/.test(mime)) {
                    miku.sendMessage(m.chat, {audio: buffer, mimetype: 'audio/mpeg', ptt: q ? q : false, mentions: participants.map(a => a.id)}, { quoted : fvn })
                    } else {
                    reply('Send/Kirim Image/Video/Audio/Sticker nya!')
                    }
                    await fs.unlinkSync(media)
                    }
                    break
            case 'absenstart': {
            if (!m.isGroup) throw mess.group
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (m.chat in absenstart) throw `_Masih ada absen di group ini!! Jangan lupa absen ya!!_\n\n*${prefix}hapusabsen* - untuk menghapus absen`
            reply(`Absen dimulai!\n\n*${prefix}absen* - untuk absen\n*${prefix}cekabsen* - untuk mengecek absen\n*${prefix}hapusabsen* - untuk menghapus absen`)
            absenstart[m.chat] = [q, []]
            await sleep(1000)
            absen = absenstart[m.chat][1]
            qs = absenstart[m.chat][0] || ''
            teks_absen = `𝗔𝗕𝗦𝗘𝗡 : ${qs}

Pada Tanggal ${date}

𝗔𝗕𝗦𝗘𝗡
 
Total: ${absenstart[m.chat][1].length}

*${prefix}hapusabsen* - untuk menghapus absen`

let buttonsAbsen = [
  {buttonId: `${prefix}absen`, buttonText: {displayText: '𝗔𝗕𝗦𝗘𝗡'}, type: 1}
]

let buttonMessageAbsen = {
                text: teks_absen,
                footer: wm,
                buttons: buttonsAbsen,
                headerType: 1
            }
            miku.sendMessage(m.chat, buttonMessageAbsen)
	    }
	    break
	    case 'absen': {
	    if (!m.isGroup) throw mess.group
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1
            if (!(m.chat in absenstart)) throw `_*tidak ada absen digrup ini!*_\n\n*${prefix}absenstart* - untuk memulai absen`
            isAbsen = absenstart[m.chat][1]
            wasAbsen = isAbsen.includes(m.sender)
            if (wasAbsen) throw 'Kamu Sudah Absen'
            absenstart[m.chat][1].push(m.sender)
            menabsen = absenstart[m.chat][1]
            qs = absenstart[m.chat][0] || ''
            teks_absen = `𝗔𝗕𝗦𝗘𝗡 : ${qs}

Pada Tanggal ${date}

𝗔𝗕𝗦𝗘𝗡

Total: ${absenstart[m.chat][1].length}
${absenstart[m.chat][1].map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusabsen* - untuk menghapus absen`

let buttonsAbsen = [
  {buttonId: `${prefix}absen`, buttonText: {displayText: '𝗔𝗕𝗦𝗘𝗡'}, type: 1}
]

let buttonMessageAbsen = {
                text: teks_absen,
                footer: wm,
                buttons: buttonsAbsen,
                headerType: 1,
                mentions: menabsen
            }
            miku.sendMessage(m.chat, buttonMessageAbsen)
	    }
	    break
	    case 'cekabsen':
	    if (!m.isGroup) throw mess.group
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1
            if (!(m.chat in absenstart)) throw `_*tidak ada absen digrup ini!*_\n\n*${prefix}absenstart* - untuk memulai absen`
            qs = absenstart[m.chat][0] || ''
            teks_absen = `𝗔𝗕𝗦𝗘𝗡 : ${qs}

Pada Tanggal ${date}

𝗔𝗕𝗦𝗘𝗡
 
Total: ${absenstart[m.chat][1].length}
${absenstart[m.chat][1].map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusabsen* - untuk menghapus absen
${wm}`
miku.sendTextWithMentions(m.chat, teks_absen, m)
break
case 'deleteabsen': case'delabsen': case 'hapusabsen': {
if (!m.isGroup) throw mess.group
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1
            if (!(m.chat in absenstart)) throw `_*tidak ada absen digrup ini!*_\n\n*${prefix}absenstart* - untuk memulai absen`
            delete absenstart[m.chat]
            reply('Berhasil Menghapus Sesi Absen Di Grup Ini')
            }
            break
            case 'vote': {
            if (!m.isGroup) throw mess.group
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `── 「 *VOTE* 」 ──

*Alasan:* ${vote[m.chat][0]}

𝗨𝗣𝗩𝗢𝗧𝗘

Total: ${vote[m.chat][1].length}


𝗗𝗘𝗩𝗢𝗧𝗘

Total: ${vote[m.chat][2].length}


*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝗨𝗣𝗩𝗢𝗧𝗘'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝗗𝗘𝗩𝗢𝗧𝗘'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: wm,
                buttons: buttonsVote,
                headerType: 1
            }
            miku.sendMessage(m.chat, buttonMessageVote)
	    }
            break
            case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `── 「 𝗩𝗢𝗧𝗘 」 ──

*Alasan:* ${vote[m.chat][0]}

𝗨𝗣𝗩𝗢𝗧𝗘

Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')}


𝗗𝗘𝗩𝗢𝗧𝗘

Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')}
 

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝗨𝗣𝗩𝗢𝗧𝗘'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝗗𝗘𝗩𝗢𝗧𝗘'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: wm,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            miku.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
             case 'devote': {
             if (!m.isGroup) throw mess.group
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `── 「 𝗩𝗢𝗧𝗘 」 ──

*Alasan:* ${vote[m.chat][0]}

𝗨𝗣𝗩𝗢𝗧𝗘
             
Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')}


𝗗𝗘𝗩𝗢𝗧𝗘

Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')}


*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝗨𝗣𝗩𝗢𝗧𝗘'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝗗𝗘𝗩𝗢𝗧𝗘'}, type: 1}
            ]

let buttonMessageDevote = {
                text: teks_vote,
                footer: wm,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            miku.sendMessage(m.chat, buttonMessageDevote)
	}
            break
            case 'cekvote':
            if (!m.isGroup) throw mess.group
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `── 「 𝗩𝗢𝗧𝗘 」 ──

*Alasan:* ${vote[m.chat][0]}}

𝗨𝗣𝗩𝗢𝗧𝗘

Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')}


𝗗𝗘𝗩𝗢𝗧𝗘

Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')}


*${prefix}hapusvote* - untuk menghapus vote
${miku.user.id}`
miku.sendTextWithMentions(m.chat, teks_vote, m)
break
            case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (args[0] === 'close'){
                    await miku.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await miku.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
                } else {
           const sections = [
    {
	title: "𝗚𝗥𝗢𝗨𝗣 𝗢𝗣𝗘𝗡",
	rows: [
	    {title: "𝗢𝗣𝗘𝗡 🌝", rowId: ".group open", description: "❬-->> Buka Group <<--❭"}
	]
    },
   {
	title: "𝗚𝗥𝗢𝗨𝗣 𝗧𝗨𝗧𝗨𝗣",
	rows: [
	    {title: "𝗧𝗨𝗧𝗨𝗣 🌚", rowId: ".group close", description: "❬-->> Tutup Group <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
             if (args[0] === 'open'){
                await miku.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group Untuk Member`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await miku.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group Untuk Member`)).catch((err) => reply(jsonformat(err)))
             } else {
           const sections = [
    {
	title: "𝗘𝗗𝗜𝗧 𝗜𝗡𝗙𝗢 𝗚𝗥𝗢𝗨𝗣 𝗢𝗣𝗘𝗡",
	rows: [
	    {title: "𝗢𝗣𝗘𝗡 𝗘𝗗𝗜𝗧 𝗜𝗡𝗙𝗢 🌝", rowId: ".editinfo open", description: "❬-->> Buka Edit Info Group <<--❭"}
	]
    },
   {
	title: "𝗘𝗗𝗜𝗧 𝗜𝗡𝗙𝗢 𝗚𝗥𝗢𝗨𝗣 𝗧𝗨𝗧𝗨𝗣",
	rows: [
	    {title: "𝗧𝗨𝗧𝗨𝗣 𝗘𝗗𝗜𝗧 𝗜𝗡𝗙𝗢 🌚", rowId: ".editinfo close", description: "❬-->> Tutup Edit Info Group <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await miku.groupInviteCode(m.chat)
                miku.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'revoke': case 'resetlink': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            miku.groupRevokeInvite(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'ephemeral': {
                if (!isCreator) throw mess.owner
                if (m.isGroup) throw 'Belum bisa digunakan di grup :)!'
                if (args[0] === 'enable') {
                    await miku.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await miku.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else {
           const sections = [
    {
	title: "𝗘𝗣𝗛𝗘𝗠𝗘𝗥𝗔𝗟 𝗘𝗡𝗔𝗕𝗟𝗘",
	rows: [
	    {title: "𝗘𝗡𝗔𝗕𝗟𝗘 ✅", rowId: ".ephemeral enable", description: "❬-->> Enable Ephemeral«--•}"}
	]
    },
   {
	title: "𝗘𝗣𝗛𝗘𝗠𝗘𝗥𝗔𝗟 𝗗𝗜𝗦𝗔𝗕𝗟𝗘",
	rows: [
	    {title: "𝗗𝗜𝗦𝗔𝗕𝗟𝗘 ❎", rowId: ".ephemeral disable", description: "❬-->> Disable Ephemeral <<--❭"}
	]
    },
]
       
               const listMessage = {
  text: "Mau Nge Settings Gimana Nih Orangkyuu>.< , Semua Hak Ada Di Anda, Because Your Special",
  footer: "_Silahlkan Dipilih, I Hope Your Happy :)_",
  title: `𝗛𝗮𝗶 𝗢𝘄𝗻𝗲𝗿 ${pushname}, ${ucapanWaktu}`,
  buttonText: "𝗧𝗢𝗨𝗖𝗛 𝗛𝗘𝗥𝗘",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
           }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                miku.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} miku Ganteng `
                let getGroups = await miku.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
                                    url: 'https://s.id/chyoutubekug'
                                }
                            },
                            {
                            	urlButton: {
                                displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
                                    url: 'https://s.id/mikubot'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗢𝗪𝗡𝗘𝗥',
                                    id: 'owner'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗗𝗢𝗡𝗔𝗦𝗜',
                                    id: 'donasi'
                                }  
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗠𝗘𝗡𝗨',
                                    id: 'menu'
                                }
                            }]
                    let nuls = `── 「 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 𝗚𝗥𝗢𝗨𝗣 」 ──\n\n${text}`
                    if (db.data.settings.displaymenu == 'gif') {
                    miku.send5Gif(i, nuls, wm, menuvideo, butoon)
                    } else if (db.data.settings.displaymenu == 'image') {
                    miku.send5Img(i, nuls, wm, yahaha, butoon)
                    } else if (db.data.settings.displaymenu == 'location') {
                    miku.send5Loc(i, nuls, wm, yahaha, butoon)
                    } else if (db.data.settings.displaymenu == 'video') {
                    miku.send5Vid(i, nuls, wm, menuvideo, butoon)
                    }
                }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} miku Ganteng`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let butoon = [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
                                    url: 'https://s.id/chyoutubekug'
                                }
                            },
                            {
                            	urlButton: {
                                displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
                                    url: 'https://s.id/mikubot'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗢𝗪𝗡𝗘𝗥',
                                    id: 'owner'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗗𝗢𝗡𝗔𝗦𝗜',
                                    id: 'donasi'
                                }  
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗠𝗘𝗡𝗨',
                                    id: 'menu'
                                }
                            }]
		    let junn = `── 「 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 」 ──\n\n${text}`
		    if (db.data.settings.displaymenu == 'gif') {
		    miku.send5Gif(yoi, junn, wm, menuvideo, butoon)
		    } else if (db.data.settings.displaymenu == 'image') {
		    miku.send5Img(yoi, junn, wm, yahaha, butoon)
		    } else if (db.data.settings.displaymenu == 'location') {
		    miku.send5Loc(yoi, junn, wm, yahaha, butoon)
		    } else if (db.data.settings.displaymenu == 'video') {
		    miku.send5Vid(yoi, junn, wm, menuvideo, butoon)
		    }
		    }
		    reply('Sukses Broadcast')
            }
            break
            case 'bcmediatogc': {
                if (!isCreator) throw mess.owner
                if (!isMedia) throw `Kirim/Reply Video/Audio/Image/Sticker Yang Ingin Di Broadcast Ke Group Dengan Caption ${prefix + command}`
                let getGroups = await miku.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
                                    url: 'https://s.id/chyoutubekug'
                                }
                            },
                            {
                            	urlButton: {
                                displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
                                    url: 'https://s.id/mikubot'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗢𝗪𝗡𝗘𝗥',
                                    id: 'owner'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗗𝗢𝗡𝗔𝗦𝗜',
                                    id: 'donasi'
                                }  
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗠𝗘𝗡𝗨',
                                    id: 'menu'
                                }
                            }]
                    let media = await miku.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    await miku.sendMessage(i, { sticker: { url: media } }, { quoted: fkontak })
                    } else if (/image/.test(mime)) {
                    let junn = `── 「 𝗕𝗖 𝗚𝗖 𝗜𝗠𝗔𝗚𝗘 」 ──${text ? '\n\n' + text : ''}`
                    miku.send5Img(i, junn, wm, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `── 「 𝗕𝗖 𝗚𝗖 𝗩𝗜𝗗𝗘𝗢  」 ──${text ? '\n\n' + text : ''}`
                    miku.send5Vid(i, junn, wm, buffer, butoon)
                    } else if (/audio/.test(mime)) {
                    miku.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg', ptt: q ? q : false}, { quoted : fvn })
                    } else {
                    reply(`Kirim/Reply Video/Audio/Image/Sticker Yang Ingin Di Broadcast Ke Group Dengan Caption ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bcmedia': {
                if (!isCreator) throw mess.owner
                if (!isMedia) throw `Kirim/Reply Video/Audio/Image/Sticker Yang Ingin Di Broadcast Ke Chattingan Dengan Caption ${prefix + command}`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let butoon = [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
                                    url: 'https://s.id/chyoutubekug'
                                }
                            },
                            {
                            	urlButton: {
                                displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
                                    url: 'https://s.id/mikubot'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗢𝗪𝗡𝗘𝗥',
                                    id: 'owner'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗗𝗢𝗡𝗔𝗦𝗜',
                                    id: 'donasi'
                                }  
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝗠𝗘𝗡𝗨',
                                    id: 'menu'
                                }
                            }]
		    let media = await miku.downloadAndSaveMediaMessage(quoted)
		    let buffer = fs.readFileSync(media)
		    if (/webp/.test(mime)) {
		    await miku.sendMessage(yoi, { sticker: { url: media } }, { quoted: fkontak })
		    } else if (/image/.test(mime)) {
		    let junn = `── 「 𝗕𝗖 𝗜𝗠𝗔𝗚𝗘 」 ──${text ? '\n\n' + text : ''}`
		    miku.send5Img(yoi, junn, wm, buffer, butoon)
		    } else if (/video/.test(mime)) {
		    let junn = `── 「 𝗕𝗖 𝗩𝗜𝗗𝗘𝗢  」 ──${text ? '\n\n' + text : ''}`
		    miku.send5Vid(yoi, junn, wm, buffer, butoon)
		    } else if (/audio/.test(mime)) {
		    miku.sendMessage(yoi, {audio: buffer, mimetype: 'audio/mpeg', ptt: q ? q : false}, { quoted : fvn })
		    } else {
		    reply(`Kirim/Reply Video/Audio/Image/Sticker Yang Ingin Di Broadcast Ke Chattingan Dengan Caption ${prefix + command}`)
		    }
		    await fs.unlinkSync(media)
		    }
		    reply('Sukses Broadcast Media Ke Chatting')
            }
            break
            case 'infochat': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!m.quoted) return reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `@${i.userJid.split('@')[0]}\n`
                    teks += `*Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                miku.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Pesannya!!')
		let wokwol = await miku.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
	    case 'request': case 'req': case 'reqfitur':
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	    db.data.users[m.sender].limit -= 1 
	    if (!q) return reply('Mau Req Fitur Apa Dan Kayak Gimana?')
	    miku.sendMessage("6281334109123@s.whatsapp.net", { text: `*REQUEST :*\n\n*From :* https://wa.me/${senderNumber}\n*Req :* ${q}`}, { quoted: m})
        reply('Fitur Bot Yang Kamu Request Sudah Sampai Ke Owner,Nantikan Kelanjutannya Hhe :)')
        break
            case 'listpc': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `── 「 *LIST PERSONAL CHAT* 」 ──\n\nTotal Chat : ${anu.length} Chat\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `\n*Nama :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n─────────────────────`
                 }
                 miku.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'olistgc': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
getGroups = await miku.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `── 「 *LIST GROUP CHAT* 」 ──\n\nTotal Group : ${anu.length} Group\n`
for (let i of anu) {
let metadata = await miku.groupMetadata(i)
teks += `\n*Nama :* ${metadata.subject}\n*Owner :* @${groupMetadata.owner.split('@')[0]}\n*ID :* ${metadata.id}\n*Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Member :* ${metadata.participants.length}\n─────────────────────`
}
miku.sendTextWithMentions(m.chat, teks, m)
}
break
case 'ceklimit': {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender ? m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
miku.sendTextWithMentions(m.chat, `Limit @${users.split`@`[0]} sekarang Sebesar ${global.db.data.users[users].limit} Limit.`, m)
}
break
case 'hapuslimit': case 'deletelimit': case 'dellimit': {
if (!isCreator) return reply(mess.owner)
let users = m.mentionedJid[1] ? m.mentionedJid[1] : m.quoted ? m.quoted.sender : m.sender ? m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
db.data.users[users].limit -= args[0]
let teds = await miku.sendTextWithMentions(m.chat, `Sukses menghapus limit @${users.split`@`[0]} sebesar ${args[0]}. Limit @${users.split`@`[0]} sekarang Sebesar ${global.db.data.users[users].limit} Limit.`, m)
miku.sendTextWithMentions(m.chat, `AowkAwok mampus lu @${users.split`@`[0]} limit nya di kuraingin`, teds)
}
break
case 'profil': case 'profile': case 'aboutuser': case 'userinfo': case 'infouser': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender ? m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
try {
anu = await miku.profilePictureUrl(users, 'image')
} catch {
anu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
var lomot = global.db.data.users[users].limit
} catch {
var lomot = global.limitawal.free
}
if (!m.isGroup) {
let ingfo = `── 「 𝗔𝗕𝗢𝗨𝗧 𝗨𝗦𝗘𝗥 」 ──

❑ *USER BOT*
O Premium : ${global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(users) ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Premium : ${premi.includes(users.split`@`[0]) ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Limit : ${lomot}

❑ *INFO USER*
Name : ${miku.getName(users)}
Link : wa.me/${users.split('@')[0]}
Mentions : @${users.split('@')[0]}
Owner Bot : ${[botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(users) ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}`
wwk = await getBuffer(anu)
miku.sendMessage(m.chat, { caption: ingfo, location: { jpegThumbnail: wwk }, footer: wm, buttons: [{buttonId: `${prefix}menu`, buttonText: {displayText: '𝗠𝗘𝗡𝗨'}, type: 1}], headerType: 'LOCATION', mentions: [users] })
} else if (m.isGroup) {
let memjel = groupAdmins.includes(users) || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(users)
let ingfo = `── 「 𝗔𝗕𝗢𝗨𝗧 𝗨𝗦𝗘𝗥 」 ──

❑ *USER BOT*
O Premium : ${global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(users) ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Premium : ${premi.includes(users.split`@`[0]) ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Limit : ${lomot}

❑ *INFO USER*
Name : ${miku.getName(users)}
Link : wa.me/${users.split('@')[0]}
Mentions : @${users.split('@')[0]}
Owner Bot : ${[botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(users) ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Admin Group : ${groupAdmins.includes(users) ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Owner Group : ${groupMetadata.owner.includes(users) ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Member Jelata : ${memjel ? '𝗡𝗢 ❎' : '𝗬𝗘𝗦 ✅'}`
wwk = await getBuffer(anu)
miku.sendMessage(m.chat, { caption: ingfo, location: { jpegThumbnail: wwk }, footer: wm, buttons: [{buttonId: `${prefix}menu`, buttonText: {displayText: '𝗠𝗘𝗡𝗨'}, type: 1}], headerType: 'LOCATION', mentions: [users] })
}
}
break
case 'aboutgroup': case 'infogrup': case 'grupinfo': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
if (!m.isGroup) throw 'Lu tolol ya? Dari Namanya aja udah keliatan kalau Fitur Ini cuma buat group!!'
try {
anu = await miku.profilePictureUrl(m.chat, 'image')
} catch {
anu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
let ingfo = `── 「 𝗔𝗕𝗢𝗨𝗧 𝗚𝗥𝗢𝗨𝗣 」 ──

❑ *SETTING GROUP*
Mute : ${db.data.chats[m.chat].mute ? '𝗢𝗡 ✅' : '𝗢𝗙𝗙 ❎'}
Anti Porn : ${db.data.chats[m.chat].antiporn ? '𝗢𝗡 ✅' : '𝗢𝗙𝗙 ❎'}
Anti Link : ${db.data.chats[m.chat].antilink ? '𝗢𝗡 ✅' : '𝗢𝗙𝗙 ❎'}
Anti Viewonce : ${db.data.chats[m.chat].antiviewonce ? '𝗢𝗡 ✅' : '𝗢𝗙𝗙 ❎'}

❑ *INFO GROUP*
ID : ${m.chat.split('@')[0]}
Name : ${groupName}
Admin : ${groupAdmins.length}
Member : ${participants.length}
Created : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
Created By : @${groupMetadata.owner.split('@')[0]}${groupMetadata.desc ? '\n\n' + groupMetadata.desc : ''}`
wwk = await getBuffer(anu)
miku.sendMessage(m.chat, { caption: ingfo, location: { jpegThumbnail: wwk }, footer: wm, buttons: [{buttonId: `${prefix}menu`, buttonText: {displayText: '𝗠𝗘𝗡𝗨'}, type: 1}], headerType: 'LOCATION', mentions: [groupMetadata.owner] })
}
break
                case 'listgc': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `── 「 *LIST GROUP CHAT* 」 ──\n\nTotal Group : ${anu.length} Group\n`
                 for (let i of anu) {
                     let metadata = await miku.groupMetadata(i)
                     teks += `\n*Nama :* ${metadata.subject}\n*Owner :* @${metadata.owner.split('@')[0]}\n*ID :* ${metadata.id}\n*Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Member :* ${metadata.participants.length}\n─────────────────────`
                 }
                 miku.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listadmin':
             case 'admin':
             case 'tagadmin':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
					if (!m.isGroup) return reply(mess.group)
					teeks = `── 「 𝗟𝗜𝗦𝗧 𝗔𝗗𝗠𝗜𝗡 」 ──\n\nTotal : *${groupAdmins.length}*\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teeks += `${no.toString()}. @${admon.split('@')[0]}\n`
					}
					miku.sendTextWithMentions(m.chat, teeks, m)
					break
             case 'listonline': case 'liston': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    miku.sendText(m.chat, '── 「 𝗟𝗜𝗦𝗧 𝗢𝗡𝗟𝗜𝗡𝗘 」 ──\n\n' + online.map(v => '@' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            reply(mess.wait)
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await miku.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await miku.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'textrepeat' : case 'repeat': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            let anjaw = m.quoted ? m.quoted.text : args.slice(1).join(' ')
            if (!args[0] && !anjaw) return  reply(`*${prefix + command} <jumlah> <textnya>* Example: ${prefix + command} 1000 I will love you`)
            try {
            let teksnya = anjaw.repeat(args[0])
            reply(teksnya)
            } catch {
            reply(`*${prefix + command} <jumlah> <textnya>* Example: ${prefix + command} 1000 I will love you`)
            }
        }
        break
        case 'simi': case 'simisimi': {
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
        db.data.users[m.sender].limit -= 1 
        let anjaw = m.quoted ? m.quoted.text : args.slice(1).join(' ')
        if (!!anjaw) return  reply(`Example: ${prefix + command} *<Text/ReplyText>*`)
        simi = await fetchJson(`https://api.simsimi.net/v2/?text=${anjaw}&lc=id`)
        reply(simi.success)
	}
	break
            case 'emoji':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!q) throw `Emojinya mana? Example: ${prefix}emoji 🙂`
            emoji.get(q)
            .then(async emoji => {
            miku.sendImageAsSticker(m.chat, emoji.images[4].url, m, { packname: global.packname, author: global.author })
            })
            break
            case 'semoji':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!args[0] && !args[1]) throw `Example : ${prefix}semoji 1 🙂\n\nPilih angka dari 0 - 17 , Jika sticker emojinya tidak terkirim maka sticker beserta angka yang anda kirim tidak ada di servernya dan silahkan coba pakai angka lain dengan sticker yang sama`
            if (args[0]){
            emoji.get(`${args[1]}`)
            .then(async emoji => {
            miku.sendImageAsSticker(m.chat, emoji.images[args[0]].url, m, { packname: global.packname, author: global.author })
            })
            } else {
            reply(`Example: ${prefix}semoji 1 🙂\n\nPilih angka dari 0 - 17 , Jika sticker emojinya tidak terkirim maka sticker beserta angka yang anda kirim tidak ada di servernya dan silahkan coba pakai angka lain dengan sticker yang sama`)
            }
            break
            case 'ebinary': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await miku.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!quoted) throw 'Reply Sticker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    miku.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            miku.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            miku.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${wm}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            miku.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'iqra': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		miku.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
		db.data.users[m.sender].limit -= 1 
		if (args[0] === 'pdf') {
		reply(mess.wait)
		miku.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		miku.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		miku.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		miku.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
		db.data.users[m.sender].limit -= 1 
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}
${arab}
${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
		db.data.users[m.sender].limit -= 1 
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		miku.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
		db.data.users[m.sender].limit -= 1 
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `── 「 *TAFSIR SURAH*  」 ──
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
case 'asmaulhusna':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
let asmaul = JSON.parse(fs.readFileSync('./src/fitur/asmaulhusna.json'))
let cncs = `── 「 *ASMAUL HUSNA* 」 ──\n\nDari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"

Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".\n\n`
for (let m of asmaul) {
                cncs += `*Urutan ke* : ${m.index}\n`
                cncs += `*Latin* : ${m.latin}\n`
                cncs += `*Arab* : ${m.arabic}\n`
                cncs += `*Artinya* : ${m.translation_id}\n`
                cncs += `*Meaning* : ${m.translation_en}\n\n`
                }
                m.reply(cncs)
                break
                case 'niatsholat': case 'niatshalat': 
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                let nsho = JSON.parse(fs.readFileSync('./src/fitur/niatsholat.json'))
                let niatnya = `── 「 *NIAT SHOLAT* 」 ──\n\nSuatu ibadah akan diterima bila memenuhi dua hal, yaitu niat dan contoh dari rasulullah saw: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ ...[رواه البخاري ومسلم]رَ"\nArtinya: "Sesungguhnya (sahnya) amal itu tergantung kepada niat ... [Hadits Riwayat al-Bukhari dan Muslim]".\n\n`
                for (let n of nsho) {
                niatnya += `*${n.index} : ${n.niat}*\n`
                niatnya += `*Niatnya* : ${n.arabic}\n`
                niatnya += `*Latin* : ${n.latin}\n`
                niatnya += `*Artinya* : ${n.translation_id}\n\n`
                }
                m.reply(niatnya)
                break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                miku.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'togif': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader')
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl':
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!args[0] && !isMedia) return reply(`Kirim atau reply image/video/sticker/audio dengan caption *${prefix + command} <Servernya>*\n\nNama Server:\nimgbb = imgbb.com\nugu = uguu.se\ntele = telegra.ph\n\nNote: Server telegra.ph hanya bisa meng-upload image & video saja. Server imgbb.com hanya bisa mengupload sticke & image saja. Server uguu.se setelah 48Jam link nya hangus atau kedaluwarsa`)
                let { UploadFileUgu, TelegraPh } = require('./lib/uploader')
                try {
                if (args[0] === 'tele') {
                    let media = await miku.downloadAndSaveMediaMessage(quoted)
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                    await fs.unlinkSync(media)
                } else if (args[0] === 'ugu') {
                    let media = await miku.downloadAndSaveMediaMessage(quoted)
                    let anu = await UploadFileUgu(media)
                    reply(anu.url)
                    await fs.unlinkSync(media)
                } else if (args[0] === 'imgbb') {
                    let imgbb = require('imgbb-uploader')
                    let media = await miku.downloadAndSaveMediaMessage(quoted)
                    let anu = await imgbb("c02ddc5daceb36eb50b59a2f89ea294c", media)
                    reply(anu.display_url)
                    await fs.unlinkSync(media)
                    } else {
                    reply(`Kirim atau reply image/video/sticker/audio dengan caption *${prefix + command} <Servernya>*\n\nNama Server:\nimgbb = imgbb.com\nugu = uguu.se\ntele = telegra.ph\n\nNote: Server telegra.ph hanya bisa meng-upload image & video saja. Server uguu.se setelah 48Jam link nya hangus atau kedaluwarsa`)
                    }
                    } catch {
                    reply(`Kirim atau reply image/video/sticker/audio dengan caption *${prefix + command} <Servernya>*\n\nNama Server:\nimgbb = imgbb.com\nugu = uguu.se\ntele = telegra.ph\n\nNote: Server telegra.ph hanya bisa meng-upload image & video saja. Server uguu.se setelah 48Jam link nya hangus atau kedaluwarsa`)
            }
            break
            case 'smeme': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!isMedia) throw `Kirim Image/Balas Sticker dengan caption *${prefix + command} teks atas|teks bawah*`
            reply(mess.wait)
            let { UploadFileUgu } = require('./lib/uploader')
            let media = await miku.downloadAndSaveMediaMessage(quoted)
            let anu = await UploadFileUgu(media)
            let [atas, bawah] = text.split`|`
            sme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${anu.url}`
            miku.sendImageAsSticker(m.chat, sme, m, { packname: global.packname, author: global.author })
            await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await miku.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    miku.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
case 'nulis':
case 'tulis':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
if (args.length < 1) return reply('Yang mau di tulis apaan?')
tewks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(tewks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
  buff1 = Buffer.from(res.data.result.split(',')[1], 'base64')
miku.sendMessage(m.chat, { image: buff1,caption: 'Gimana Mau Maju, Nulis Aja Males:v' }, { quoted: m}).catch(e => {
  return reply('_Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
case 'gore': case 'randomgore': case 'horror': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
	        let { gore } = require('./lib/scraper')
	        let anu = await gore()
	        let buttons = [
                    {buttonId: `gore`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.video2 || anu.video1 },
                    caption: `Title : ${anu.title}\nTag : ${anu.tag}\nUpload : ${anu.upload}\nAuthor : ${anu.author}\nComment : ${anu.comment}\nVote : ${anu.vote}\nView : ${anu.view}\nSource : ${anu.source}\nMediaUrl : ${anu.video1}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 5
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
	    }
	    break
	    case 'pornotiktok': case 'porntok': case 'bokeptiktok': {
	    if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                reply('Bokeppp tross')
                let { porno } = require('./lib/scraper')
                anu = await porno()
                miku.sendMessage(m.chat, { caption: `Title : ${anu.title}\nViewers : ${anu.views}\nTags : ${anu.tags}\nLikes : ${anu.like}\nDislikes : ${anu.dislike}\nFavourite : ${anu.favorite}\nTime Upload : ${anu.upload}\nDescription : ${anu.desc}\nSource : ${anu.source}`, video: { url: 'https://tikporntok.com/' + anu.video }, footer: wm, buttons: [{buttonId: `${prefix}porntok`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
            }
            break
            case 'hentai': {
            if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                let { hentai } = require('./lib/scraper')
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                miku.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.category}\nMimetype : ${result.type}\nViews : ${result.views_count}\nShares : ${result.share_count}\nSource : ${result.link}\nMedia Url : ${result.video_1}`, video: { url: result.video_1 }, footer: wm, buttons: [{buttonId: `${prefix}hentai`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: ftroli})
		  }
            break
	    case 'yts': case 'ytsearch': {
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n'
                let no = 1
                for (let i of search.all) {
                    teks += `\nNo : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUpload At : ${i.ago}\nAuthor : ${i.author.name}\nUrl : ${i.url}\n─────────────────────`
                }
                miku.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Scarlett Johansson`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n`
                for (let g of res) {
                teks += `\n*Title* : ${g.title}\n`
                teks += `*Description* : ${g.snippet}\n`
                teks += `*Link* : ${g.link}\n─────────────────────`
                } 
                m.reply(teks)
                })
                }
                break
                case 'phsearch': case 'phs': case 'pornhubsearch': {
                if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!q) throw `Example : ${prefix + command} Jordi`
                let bkp = await fetchJson(`https://bx-hunter.herokuapp.com/api/pornhubscraper?query=${q}&apikey=FuckBitch`)
                let teks = `── 「 *PORNHUB SEARCH* 」 ──\n\n*Query* : ${q}\n`
                for (let b of bkp.result) {
                teks += `\n*Title* : ${b.title}\n`
                teks += `*Viewers* : ${b.views}\n`
                teks += `*Link* : ${b.link}\n`
                teks += `*Hd* : ${b.hd ? 'Yes ✅' : 'No ❎'}\n`
                teks += `*Premium* : ${b.premium ? 'Yes ✅' : 'No ❎'}\n─────────────────────`
                }
                let bntex = [{
             urlButton: {
               displayText: 'link nya!',
               url: `${bkp.result[0].link}`
             }
           }]
                miku.send5Text(m.chat, teks, wm, bntex)
                }
                break
                case 'xvsearch': case 'xvs': case 'xvideosearch': {
                if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!q) throw `Example : ${prefix + command} Eva elfie`
                let bkp = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${q}&apikey=FuckBitch`)
                let teks = `── 「 *XVIDEO SEARCH* 」 ──\n\n*Query* : ${q}\n`
                for (let b of bkp.result) {
                teks += `\n*Title* : ${b.title}\n`
                teks += `*Info* : ${b.info}\n`
                teks += `*Link* : ${b.link}\n─────────────────────`
                }
                let bntex = [{
             urlButton: {
               displayText: 'link nya!',
               url: `${bkp.result[0].link}`
             }
           }]
                miku.send5Text(m.chat, teks, wm, bntex)
                }
                break
                case 'xnxxsearch': case 'xnxxs': {
                if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!q) throw `Example : ${prefix + command} Eva elfie`
                let { search } = require('./lib/xnxx')
                let bkp = await search(q)
                let teks = `── 「 *XNXX SEARCH* 」 ──\n\n*Query* : ${q}\n`
                for (let b of bkp.result) {
                teks += `\n*Title* : ${b.title}\n`
                teks += `*Info* : ${b.info}\n`
                teks += `*Link* : ${b.link}\n─────────────────────`
                }
                let bntex = [{
             urlButton: {
               displayText: 'link nya!',
               url: `${bkp.result[0].link}`
             }
           }]
                miku.send5Text(m.chat, teks, wm, bntex)
                }
                break
                case 'javhdds': case 'javhddsearch': case 'javhds': case 'javhdsearch': {
                if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!q) throw `Example : ${prefix + command} Eimi Fukada`
                let bkp = await fetchJson(`https://api.dapuhy.xyz/api/search/javhdd?query=${q}&apikey=DappaAnjing`)
                let teks = `── 「 *JAVHDD SEARCH* 」 ──\n\n*Query* : ${q}\n`
                for (let b of bkp.result) {
                teks += `\n*Title* : ${b.title}\n`
                teks += `*Kualitas* : ${b.quality}\n`
                teks += `*Link* : ${b.url}\n─────────────────────`
                }
                let bntex = [{
             urlButton: {
               displayText: 'link nya!',
               url: `${bkp.result[0].url}`
             }
           }]
                bgs = await getBuffer(bkp.result[0].thumb)
                miku.send5Loc(m.chat, teks, wm, bgs, bntex)
                }
                break
                case 'jvps': case 'javpornsearch': case 'javps': {
                if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!q) throw `Example : ${prefix + command} Hot mom`
                let bkp = await fetchJson(`https://api.dapuhy.xyz/api/search/javhdporn?query=${q}&apikey=DappaAnjing`)
                let teks = `── 「 *JAVPORN SEARCH* 」 ──\n\n*Query* : ${q}\n`
                for (let b of bkp.result) {
                teks += `\n*Title* : ${b.title}\n`
                teks += `*Viewers* : ${b.viewers}\n`
                teks += `*Durasi* : ${b.duration}\n`
                teks += `*Kualitas* : ${b.quality}\n`
                teks += `*Link* : ${b.url}\n─────────────────────`
                }
                let bntex = [{
             urlButton: {
               displayText: 'link nya!',
               url: `${bkp.result[0].url}`
             }
           }]
                bgs = await getBuffer(bkp.result[0].thumb)
                miku.send5Loc(m.chat, teks, wm, bgs, bntex)
                }
                break
                case 'pastebin': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} kaori cicak`
                let paste = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${text}`)
                reply(paste.result)
                }
                break
                case 'nekolatest': case 'nekopoilatest': {
                if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                let { getVideo, getLatest } = require('./lib/nekopoi')
                let latest = await getLatest()
                let { title, links } = await getVideo(latest.link)
                if (links.length == 0) throw 'Video Tidak Ditemukan!'
                teksnya = `── 「 *NEKOPOI LATEST* 」 ──\n\n*Title :* ${title}\n\n${links.join('\n')}`
                let bntex = [{
             urlButton: {
               displayText: 'link nya!',
               url: `${links[0]}`
             }
           }]
                bgs = await getBuffer(latest.image)
                miku.send5Loc(m.chat, teksnya.trim(), wm, bgs, bntex)
                }
                break
                case 'nekopoi': case 'nekopoisearch': case 'nekosearch': {
                if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!q) throw `Example : ${prefix + command} trap`
                let bkp = await fetchJson(`https://api.dapuhy.xyz/api/search/nekopoi?query=${q}&apikey=DappaAnjing`)
                let teks = `── 「 *NEKOPOI SEARCH* 」 ──\n\n*Query* : ${q}\n`
                for (let b of bkp.result) {
                teks += `\n*Title* : ${b.title}\n`
                teks += `*Link* : ${b.url}\n─────────────────────`
                }
                let bntex = [{
             urlButton: {
               displayText: 'link nya!',
               url: `${bkp.result[0].url}`
             }
           }]
                bgs = await getBuffer(bkp.result[0].thumb)
                miku.send5Loc(m.chat, teks, wm, bgs, bntex)
                }
                break
                case 'xvdl': case 'xvideodownload': case 'xvideodl': {
                if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!args[0]) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('xvideos.com')) throw 'Link Invalid!'
                let bkp = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${args[0]}&apikey=FuckBitch`)
                let bitch = `── 「 *XVIDEO DOWNLOAD* 」 ──\n\n*Title* : ${bkp.result.title}\n*Source* : ${bkp.result.URL}`
                let tobnn = [{
             urlButton: {
               displayText: '𝗦𝗢𝗨𝗥𝗖𝗘',
               url: `${bkp.result.URL}`
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗟𝗢𝗪',
               id: `${prefix}sendFile ${bkp.result.files.low}`,
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗛𝗜𝗚𝗛',
               id: `${prefix}sendFile ${bkp.result.files.high}`,
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗛𝗟𝗦',
               id: `${prefix}sendFile ${bkp.result.files.HLS}`,
             }
           }]
           let ranthumb = pickRandom([bkp.result.files.thumb, bkp.result.files.thumb69, bkp.result.files.thumbSlide, bkp.result.files.thumbSlide, bkp.result.files.thumbSlideBig])
           wk = await getBuffer(ranthumb)
           miku.send5Loc(m.chat, bitch, wm, wk, tobnn)
                }
                break
                case 'xnxxdl': case 'xnxxdownload': {
                if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!args[0]) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('xnxx.com')) throw 'Link Invalid!'
                let { detail } = require('./lib/xnxx')
                let xndl = await detail(`${args[0]}`)
                let bitch = `── 「 *XNXX DOWNLOAD* 」 ──\n\n*Title* : ${xndl.result.title}\n*Source* : ${xndl.result.URL}\n*Durasi* : ${xndl.result.duration}\n*Info* : ${xndl.result.info}`
                let tobnn = [{
             urlButton: {
               displayText: '𝗦𝗢𝗨𝗥𝗖𝗘',
               url: `${xndl.result.URL}`
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗟𝗢𝗪',
               id: `${prefix}sendFile ${xndl.result.files.low}`,
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗛𝗜𝗚𝗛',
               id: `${prefix}sendFile ${xndl.result.files.high}`,
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗛𝗟𝗦',
               id: `${prefix}sendFile ${xndl.result.files.HLS}`,
             }
           }]
           let ranthumb = pickRandom([xndl.result.image, xndl.result.files.thumb, xndl.result.files.thumb69, xndl.result.files.thumbSlide, xndl.result.files.thumbSlide, xndl.result.files.thumbSlideBig])
           wk = await getBuffer(ranthumb)
           miku.send5Loc(m.chat, bitch, wm, wk, tobnn)
                }
                break
        case 'sendFile': {
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
        db.data.users[m.sender].limit -= 1 
        if (!q) throw `Example : ${prefix + command} Url`
        await sendFileFromUrl(m.chat , q, `Done`, m)
        }
        break
        case 'malingpp': case 'getpic': {
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
        db.data.users[m.sender].limit -= 1 
        if (!m.mentionedJid[0] && !m.quoted) throw `*${prefix + command} <Tag/Reply User nya>*`
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         try {
        anu = await miku.profilePictureUrl(users, 'image')
        } catch {
        anu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        miku.sendMessage(users, { text: "Kak Izin Ambil PPnya Hhe ;)"}, { quoted: m})
        miku.sendMessage(m.chat, { image: { url: anu}, caption: 'Nih PPnya, Gue Udah Izin Kok :v'}, {quoted: m})
       }
       break
        case 'gimage': {
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
        db.data.users[m.sender].limit -= 1 
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `── 「 *GIMAGE SEARCH* 」 ──
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
        db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Description : ${anu.description}
Url : ${anu.url}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'film': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!q) return reply('Nyari Film Apa?')
            xa.Film(q).then(async data => {
            let txt = `── 「 *FILM-SEARCH* 」 ──\n`
            for (let i of data) {
            let link2 = await fetchJson(`https://hadi-api.herokuapp.com/api/tinyurl?url=${i.link}`)
            txt += `\n*📫 Title :* ${i.judul}\n`
            txt += `*🎞️ Type :* ${i.type}\n`
            txt += `*📟 Quality :* ${i.quality}\n`
            txt += `*📮 Upload :* ${i.upload}\n`
            txt += `*📚 Url :* ${link2.result}\n─────────────────────`
            }
            let tobnn = [{
             urlButton: {
               displayText: '𝗟𝗜𝗡𝗞 𝗙𝗜𝗟𝗠',
               url: `${data[0].link}`
             }
           },
           {
             urlButton: {
               displayText: '𝗟𝗜𝗡𝗞 𝗙𝗜𝗟𝗠',
               url: `${data[1].link}`
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗢𝗪𝗡𝗘𝗥',
               id: 'owner',
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗗𝗢𝗡𝗔𝗦𝗜',
               id: 'donasi',
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧',
               id: 'ping',
             }
           }]
            wkwk = await getBuffer(data[0].thumb)
            miku.send5Loc(m.chat, txt, wm, wkwk, tobnn)
            })
            .catch((err) => {
            reply(mess.errorApi)
            })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
        db.data.users[m.sender].limit -= 1 
                if (!text) return reply('Masukan query link!')
                let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return reply('File Melebihi Batas'+util.format(media))
                miku.sendImage(m.chat, thumbnail, `Title : ${title}\nFile Size : ${media[0].formattedSize}\nUrl : ${url}\nExt : MP3\nResolusi : ${args[1] || '128kbps'}`, m)
                miku.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!text) return reply('Masukan query link!')
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return reply('File Melebihi Batas'+util.format(media))
                miku.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `Title : ${title}\nFile Size : ${media[0].formattedSize}\nUrl : ${url}\nExt : MP4\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return reply('File Melebihi Batas'+util.format(media))
                miku.sendImage(m.chat, thumbnail, `Title : ${title}\nFile Size : ${media[0].formattedSize}\nUrl : ${url}\nExt : MP3\nResolusi : ${args[1] || '128kbps'}`, m)
                miku.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return reply('File Melebihi Batas'+util.format(media))
                miku.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `Title : ${title}\nFile Size : ${media[0].formattedSize}\nUrl : ${url}\nExt : MP4\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'ytmp32': case 'ytaudio2': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                let { yta } = require('./lib/y2mate')
                if (!text) return reply('Masukan query link!')
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                miku.sendImage(m.chat, media.thumb, `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolusi : ${args[1] || '128kbps'}`, m)
                miku.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp42': case 'ytvideo2': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply('Masukan query link!')
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                miku.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'getmusic2': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                miku.sendImage(m.chat, media.thumb, `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolusi : ${args[1] || '128kbps'}`, m)
                miku.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo2': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                miku.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Timothee chalamet`
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                miku.sendMessage(m.chat, { image: { url: result }, caption: 'Media Url : '+result }, { quoted: m })
            }
            break
            case 'cecan': {
            if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                reply(mess.wait)
                miku.sendMessage(m.chat, { caption: 'Media Url : '+result, image: { url: 'https://hadi-api.herokuapp.com/api/randomImage/cecan' }, footer: wm, buttons: [{buttonId: `${prefix}cecan`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
            }
            break
            case 'tts': case 'texttospech': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            let anjaw = m.quoted ? m.quoted.text : args.slice(1).join(' ')
            if (!args[0] && !anjaw) throw `*${prefix + command} <kodebahasa> <textnya>* Example: ${prefix + command} id I will love you\nUntuk melihat kode bahasanya silahkan ketik ${prefix}kodebahasa atau kunjungi web https://cloud.google.com/translate/docs/languages`
            https://hadi-api.herokuapp.com/api/tts?language=${args[0]}&text=${text}
            if (args[0] && anjaw) {
            reply(mess.wait)
            miku.sendMessage(m.chat, { audio: { url: `https://hadi-api.herokuapp.com/api/tts?language=${args[0]}&text=${anjaw}` }, mimetype: 'audio/mpeg' }, { quoted: m })
            } else {
            reply(`*${prefix + command} <kodebahasa> <textnya>* Example: ${prefix + command} id I will love you\nUntuk melihat kode bahasanya silahkan ketik ${prefix}kodebahasa atau kunjungi web https://cloud.google.com/translate/docs/languages`)
            }
            }
            break
            case 'yaoi': case 'yuri': case 'oneesan': case 'milf': case 'paizuri': case 'boobs': case 'pussy': case 'tentacle': case 'trap': case 'futanari': {
            if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
        let { hentaiImage } = require('./lib/scraper')
		let anu = await hentaiImage(command)
		let result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `Title : ${command}\nMedia Url : ${result}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
	    }
	    break
          case 'neko':
          case 'waifu': 
          case 'shinobu': 
          case 'megumin': 
          case 'bully': 
          case 'cuddle': 
          case 'cry': 
          case 'hug': 
          case 'awoo': 
          case 'kiss': 
          case 'lick': 
          case 'pat': 
          case 'smug': 
          case 'bonk': 
          case 'yeet': 
          case 'blush': 
          case 'smile': 
          case 'wave': 
          case 'highfive': 
          case 'handhold': 
          case 'nom': 
          case 'bite': 
          case 'glomp': 
          case 'slap': 
          case 'kill': 
          case 'happy': 
          case 'wink': 
          case 'poke': 
          case 'dance': 
          case 'cringe': 
          if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
          if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
          db.data.users[m.sender].limit -= 1 
              await reply('Loading..')
              let waifu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
              await sendFileFromUrl(from,waifu.url,`Done`,m)
              .catch((err) => {
              for (let x of global.owner) {
              miku.sendMessage(users, { text: `${prefix+command} Error: \n\n` + err}, { quoted: m})
              }
              reply('Sedang Error !! Coba Beberapa Saat Lagi')
                })
		break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob':  {
            if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                reply(mess.wait)
                miku.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
            case 'husbu2':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            let husb= JSON.parse(fs.readFileSync('./src/fitur/husbu.json'))
            let phusb  = husb[Math.floor(Math.random() * husb.length)]
            imgsil = await getBuffer(phusb.image)
            miku.sendMessage(m.chat, { caption: phusb.teks, image: imgsil, footer: wm, buttons: [{buttonId: `${prefix}husbu2`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}] }, {quoted: m})
            break
            case 'animelink':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (db.data.chats[m.chat].antiporn) throw 'Antiporn sedang diaktifkan digroup ini, silahkan izin ke admin untuk bisa menggunakan fitur ini di group!'
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            let { LinkAnime } = require('./src/fitur/kodenuklir')
            reply(LinkAnime())
            break
            case 'couple': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                miku.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                miku.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} text`
                reply(mess.wait)
                miku.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
            case 'flaming':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!text) throw `Example : ${prefix + command} text`
            reply(mess.wait)
            miku.sendMessage(m.chat, { image: { url: global.flaming + text }, caption: `${command} ${text}` }, { quoted: m})
            break
            case 'fluming':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!text) throw `Example : ${prefix + command} text`
            reply(mess.wait)
            miku.sendMessage(m.chat, { image: { url: global.fluming + text }, caption: `${command} ${text}` }, { quoted: m})
            break
            case 'flarun':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!text) throw `Example : ${prefix + command} text`
            reply(mess.wait)
            miku.sendMessage(m.chat, { image: { url: global.flarun + text }, caption: `${command} ${text}` }, { quoted: m})
            break
            case 'flasmurf':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            if (!text) throw `Example : ${prefix + command} text`
            reply(mess.wait)
            miku.sendMessage(m.chat, { image: { url: global.flasmurf + text }, caption: `${command} ${text}` }, { quoted: m})
            break
            case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!text) throw 'No Query Text'
                reply(mess.wait)
                miku.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!text) throw 'No Query Text'
                reply(mess.wait)
                miku.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
            case 'coffe': case 'kopi': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `Title : ${result.title}\nSource : ${result.source}\nMedia Url : ${result.image}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	        db.data.users[m.sender].limit -= 1 
	        let { styletext } = require('./lib/scraper')
	        if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Styletext Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `*${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
            case 'quotesanime': case 'quoteanime': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	        db.data.users[m.sender].limit -= 1 
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 2
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotes': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	        db.data.users[m.sender].limit -= 1 
                let qots = JSON.parse(fs.readFileSync('./src/fitur/quotes.json'))
                ninaa = qots[Math.floor(Math.random() * qots.length)]
                let buttons = [
                    {buttonId: `quotes`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${ninaa.quotes}_\n\nBy '${ninaa.author}'`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 2
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesislami': case 'quotesislam': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	        db.data.users[m.sender].limit -= 1 
                let qots = await fetchJson(`https://hardianto.xyz/api/random/quotes/muslim?apikey=hardianto`)
                let buttons = [
                    {buttonId: `quotesislami`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    text: `${qots.result.text_id}\n\nBy 'Hamba Allah Swt.'`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 2
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tr': case 'translate':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	        db.data.users[m.sender].limit -= 1 
            let anjaw = m.quoted ? m.quoted.text : args.slice(1).join(' ')
            if (!args[0] && !anjaw) throw `*${prefix + command} <kodebahasa> <textnya>* Example: ${prefix + command} id I will love you\nUntuk melihat kode bahasanya silahkan ketik ${prefix}kodebahasa atau kunjungi web https://cloud.google.com/translate/docs/languages`
            translate(`${anjaw}`, {to: `${args[0]}`}).then(res => {
            reply(res.text)
            }).catch(err => {
            console.log(err)
            })
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	        db.data.users[m.sender].limit -= 1 
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '𝗡𝗘𝗫𝗧'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: wm,
                    buttons: buttons,
                    headerType: 2
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'colong': case 'take': case 'swm': case 'takestick': case 'takestik':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	        db.data.users[m.sender].limit -= 1 
            if (!quoted) throw 'Reply Sticker'
			if (!/webp/.test(mime)) throw `Reply stiker dengan caption ${prefix + command} ${text}`
			let setinga = await quoted.download()
			miku.sendImageAsSticker(m.chat, setinga, m, { packname: text.split("|")[0] ? text.split("|")[0] : global.packname, author: text.split("|")[1] ? text.split("|")[1] : global.author })
			break
			case 'addprem': {
			if (!isCreator) return reply(mess.owner)
			if (!m.mentionedJid[0] && !m.quoted && !text) throw `*${prefix + command} <Tag/Reply User nya/Ketik manual nomornya>*`
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
			if (premi.includes(users.split`@`[0])) throw `${miku.getName(users)} Sudah Premium sebelumnya!`
			premi.push(`${users.split`@`[0]}`)
			fs.writeFileSync('./src/premium.json', JSON.stringify(premi))
			reply(`${miku.getName(users)} Sekarang telah menjadi User Premium!`)
			}
			break
			case 'listpremium': case 'listprem': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
			db.data.users[m.sender].limit -= 1 
			tekspr = `── 「 𝗟𝗜𝗦𝗧 𝗨𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 」 ──\n\n`
			for (let mem of premi) {
                tekspr += `@${mem}\n`
            }
            tekspr += `\nTotal : *${premi.length}*`
			miku.sendTextWithMentions(m.chat, tekspr, m)
			}
			break
			case 'olistprem': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
			db.data.users[m.sender].limit -= 1 
			let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != miku.user.id)
			let anunya = `── 「 𝗢 𝗟𝗜𝗦𝗧 𝗨𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 」 ──` + `\n\n` + prem.map(v => isCreator ? '@' + v.replace(/@.+/, '') : ' @' + v.split('@')[0]).join`\n`
			miku.sendTextWithMentions(m.chat, anunya, m)
			}
			break
			case 'delprem': {
			if (!isCreator) return reply(mess.owner)
			if (!m.mentionedJid[0] && !m.quoted && !text) throw `*${prefix + command} <Tag/Reply User nya/Ketik manual nomornya>*`
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
			try {
			var wan = setik.indexOf(`${users.split`@`[0]}`)
			premi.splice(wan)
			fs.writeFileSync('./src/premium.json', JSON.stringify(premi))
			reply(`Sukses menghapus '${users.split`@`[0]}' di list Premium User`)
			} catch (err) {
			reply('Nomor User itu tidak ada di daftar premium!')
			}
			}
			break
            case 'addstick': {
					if (!isCreator) return reply(mess.owner)
					if (!quoted) throw 'Reply Sticker'
					if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix}addstik text*`
					if (!text) return reply('Nama Stikernya apa?')
					if (setik.includes(text)) throw `Nama '${text}' sudah ada sebelumnya di list sticker!`
					let nmd = await quoted.download()
					setik.push(`${text}`)
					fs.writeFileSync(`./media/sticker/${text}.webp`, nmd)
					fs.writeFileSync('./src/setik.json', JSON.stringify(setik))
					reply(`Sukses, Silahkan Cek Dengan *${prefix}liststick*`)
					}
					break
				case 'liststick': {
				if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	        db.data.users[m.sender].limit -= 1 
				if (!isCreator) return reply(mess.owner)
					tekks = '── 「 𝗟𝗜𝗦𝗧 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」 ──\n\n'
					for (let kwkwk of setik) {
						tekks += `${kwkwk}\n`
					}
					tekks += `\nTotal : *${setik.length}*\n\n_Untuk mengambil sticker silahkan ketik nama sticker nya!!_`
					reply(tekks)
					}
					break
					case 'delstick':
					if (!isCreator) return reply(mess.owner)
					if (!text) return reply('Nama sticker yang mau dihapus apa Kak?')
					try {
					 var wan = setik.indexOf(text)
					 setik.splice(wan)
					 fs.writeFileSync('./src/setik.json', JSON.stringify(setik))
					 fs.unlinkSync(`./media/sticker/${text}.webp`)
					reply(`Sukses menghapus sticker ${text}`)
					} catch (err){
						reply('Nama sticker yang mau dihapus gada Kak!')
					}
					break
            case 'addvn': {
					if (!isCreator) return reply(mess.owner)
					if (!/audio/.test(mime)) return reply('Reply Audionya Kak!')
					if (!text) return reply('Nama vn nya apa Kak?')
					if (vien.includes(text)) throw `Nama '${text}' sudah ada sebelumnya di list vn!`
					let mmd = await quoted.download()
					vien.push(`${text}`)
					fs.writeFileSync(`./media/sound/${text}.mp3`, mmd)
					fs.writeFileSync('./src/vien.json', JSON.stringify(vien))
					tkksa = `Sukses, Silahkan Cek Dengan *${prefix}listvn*`
					reply(tkksa)
					}
					break
				case 'listvn': {
				if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
	        db.data.users[m.sender].limit -= 1 
				if (!isCreator) return reply(mess.owner)
					tekkks = '── 「 𝗟𝗜𝗦𝗧 𝗩𝗡 」 ──\n\n'
					for (let awokwkwk of vien) {
						tekkks += `${awokwkwk}\n`
					}
					tekkks += `\nTotal : *${vien.length}*\n\n_Untuk Mengambil Vn Silahkan Ketik Nama Vn Nya!!_`
					reply(tekkks)
					}
					break
					case 'delvn':
					if (!isCreator) return reply(mess.owner)
					if (!text) return reply('Nama vn yang mau dihapus apa Kak?')
					try {
					 var wanu = vien.indexOf(text)
					 vien.splice(wanu)
					 fs.writeFileSync('./src/vien.json', JSON.stringify(vien))
					 fs.unlinkSync(`./media/sound/${text}.mp3`)
					reply(`Sukses menghapus vn ${text}`)
					} catch (err){
						reply('Nama vn yang mau dihapus gada Kak!')
					}
					break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nomor HP :* ${anu.message.nomer_hp}\n*Angka Shuzi :* ${anu.message.angka_shuzi}\n*Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n*Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Mimpi :* ${anu.message.mimpi}\n*Arti :* ${anu.message.arti}\n*Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo, 7, 7, 2005, Udin, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo, 7, 7, 2005, Udin, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo, 7, 7, 2005, Udin, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama Suami :* ${anu.message.suami.nama}\n*Lahir Suami :* ${anu.message.suami.tgl_lahir}\n*Nama Istri :* ${anu.message.istri.nama}\n*Lahir Istri :* ${anu.message.istri.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo, 7, 7, 2005, Udin, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Sisi Positif :* ${anu.message.sisi_positif}\n*Sisi Negatif :* ${anu.message.sisi_negatif}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Arti :* ${anu.message.arti}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Life Path :* ${anu.message.life_path}\n*Destiny :* ${anu.message.destiny}\n*Destiny Desire :* ${anu.message.destiny_desire}\n*Personality :* ${anu.message.personality}\n*Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo|Udin`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendImage(m.chat,  anu.message.gambar, `*Nama Anda :* ${anu.message.nama_anda}\n*Nama Pasangan :* ${anu.message.nama_pasangan}\n*Sisi Positif :* ${anu.message.sisi_positif}\n*Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Tanggal Pernikahan :* ${anu.message.tanggal}\n*karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Lahir :* ${anu.message.hari_lahir}\n*Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Lahir :* ${anu.message.hari_lahir}\n*Rezeki :* ${anu.message.rejeki}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Lahir :* ${anu.message.hari_lahir}\n*Pekerjaan :* ${anu.message.pekerjaan}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Analisa :* ${anu.message.analisa}\n*Angka Akar :* ${anu.message.angka_akar}\n*Sifat :* ${anu.message.sifat}\n*Elemen :* ${anu.message.elemen}\n*Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Analisa :* ${anu.message.analisa}\n*Sektor :* ${anu.message.sektor}\n*Elemen :* ${anu.message.elemen}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendImage(m.chat, anu.message.image, `*Lahir :* ${anu.message.tgl_lahir}\n*Simbol Tarot :* ${anu.message.simbol_tarot}\n*Arti :* ${anu.message.arti}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tahun_lahir}\n*Gender :* ${anu.message.jenis_kelamin}\n*Angka Kua :* ${anu.message.angka_kua}\n*Kelompok :* ${anu.message.kelompok}\n*Karakter :* ${anu.message.karakter}\n*Sektor Baik :* ${anu.message.sektor_baik}\n*Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Lahir :* ${anu.message.tgl_lahir}\n*Kala Tinantang :* ${anu.message.kala_tinantang}\n*Info :* ${anu.message.info}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Lahir :* ${anu.message.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Info :* ${anu.message.info}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Hari Lahir :* ${anu.message.hari_lahir}\n*Tanggal Lahir :* ${anu.message.tgl_lahir}\n*Hari Naas :* ${anu.message.hari_naas}\n*Info :* ${anu.message.catatan}\n*Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Hari Lahir :* ${anu.message.hari_lahir}\n*Tanggal Lahir :* ${anu.message.tgl_lahir}\n*Arah Naga Hari :* ${anu.message.arah_naga_hari}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Hari Lahir :* ${anu.message.hari_lahir}\n*tanggal Lahir :* ${anu.message.tgl_lahir}\n*Arah Rezeki :* ${anu.message.arah_rejeki}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Tanggal :* ${anu.message.tanggal}\n*Jumlah Neptu :* ${anu.message.jumlah_neptu}\n*Watak Hari :* ${anu.message.watak_hari}\n*Naga Hari :* ${anu.message.naga_hari}\n*Jam Baik :* ${anu.message.jam_baik}\n*Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} Edo, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Tanggal :* ${anu.message.tgl_memancing}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Zodiak :* ${anu.message.zodiak}\n*Nomor :* ${anu.message.nomor_keberuntungan}\n*Aroma :* ${anu.message.aroma_keberuntungan}\n*Planet :* ${anu.message.planet_yang_mengitari}\n*Bunga :* ${anu.message.bunga_keberuntungan}\n*Warna :* ${anu.message.warna_keberuntungan}\n*Batu :* ${anu.message.batu_keberuntungan}\n*Elemen :* ${anu.message.elemen_keberuntungan}\n*Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n*Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `*Hasil :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 5
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 5
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await miku.sendMessage(m.chat, buttonMessage, { quoted: m })
                miku.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Urlnya mana kak?!'
                reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) miku.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    miku.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'instagram2': case 'ig2': case 'igdl2': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: text }, 'apikey'))
                miku.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Limit Harian Anda Telah Habis')
                db.data.users[m.sender].limit -= 1 
                if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    miku.sendMedia(m.chat, anu.caption.profile_hd, '', `Full Name : ${anu.caption.full_name}\nUser Name : ${anu.caption.user_name}\nID ${anu.caption.user_id}\nFollowers : ${anu.caption.followers}\nFollowing : ${anu.caption.following}\nBussines : ${anu.caption.bussines}\nProfesional : ${anu.caption.profesional}\nVerified : ${anu.caption.verified}\nPrivate : ${anu.caption.private}\nBio : ${anu.caption.biography}\nBio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`Name : ${anu.name}\nVersion : ${Object.keys(anu.versions)}\nCreated : ${tanggal(anu.time.created)}\nModified : ${tanggal(anu.time.modified)}\nMaintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\nDescription : ${anu.description}\nHomepage : ${anu.homepage}\nKeywords : ${anu.keywords}\nAuthor : ${anu.author.name}\nLicense : ${anu.license}\nReadme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'jooxdl': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Urlnya mana kak?!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await miku.sendImage(m.chat, anu.result.img, `Title : ${anu.result.lagu}\nAlbum : ${anu.result.album}\nSinger : ${anu.result.penyanyi}\nPublish : ${anu.result.publish}\nLirik :\n${anu.result.lirik.result}`, m)
                miku.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Urlnya mana kak?!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await miku.sendImage(m.chat, anu.result.thumb, `Title : ${anu.result.title}\nUrl : ${isUrl(text)[0]}`)
                miku.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: wm,
                    buttons: buttons,
                    headerType: 5
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await miku.sendMessage(m.chat, buttonMessage, { quoted: m })
                miku.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                miku.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
                db.data.users[m.sender].limit -= 1 
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                miku.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
Title : ${anu.title}
Author : ${anu.author.name}
Like : ${anu.like}
Caption : ${anu.caption}
Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: wm,
			buttons,
			headerType: 4
		    }
		    miku.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        miku.sendMessage(m.chat, { image: { url }, caption: `Title : ${anu.title}\nAuthor : ${anu.author.name}\nLike : ${anu.like}\nCaption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
            case 'ringtone': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
		if (!text) throw `Example : ${prefix + command} black rover`
                let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		miku.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                miku.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                miku.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '── 「 𝗟𝗜𝗦𝗧 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 」 ──\n'
		for (let i of seplit) {
		    teks += `\n*Name :* ${i.nama}\n*Type :* ${getContentType(i.message).replace(/Message/i, '')}\n─────────────────────`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
            db.data.users[m.sender].limit -= 1 
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./src/database.json', JSON.stringify(msgs))
		reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                miku.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await miku.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, wm, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await miku.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                let profile = await miku.profilePictureUrl(room.b)
                let status = await miku.fetchStatus(room.b)
                let msg = await miku.sendImage(room.a, profile, `Nama : ${await miku.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                miku.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, wm, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, wm, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await miku.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, wm, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, wm, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await miku.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, wm, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await miku.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, wm, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, wm, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                miku.public = true
                reply('Mode Public On \n\nSekarang Semua Bisa Menggunakan Bot')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                miku.public = false
                reply('Mode Self On \n\nSekarang Hanya Owner Yang Bisa Menggunakan Bot')
            }
            break
            case 'ping': case 'runtime': case 'info': case 'infobot': case 'botinfo': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                let getGroups = await miku.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anuyu = groups.map(v => v.id)
                let anuys = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                respon = `── 「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」 ──

❑ *CHAT*
Private Chat : ${anuys.length}
Group Chat : ${anuyu.length}
User : ${miku.user.id.length} 

❑ *BOT*
Auto Respon : ${autorespon  ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Auto Bio : ${db.data.settings[botNumber].autobio ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Auto Read : ${db.data.settings[botNumber].autoread ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Auto Record : ${db.data.settings[botNumber].autorecord ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Auto Ketik : ${db.data.settings[botNumber].autoketik ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Auto Offline : ${db.data.settings[botNumber].autooffline ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}
Auto Online : ${db.data.settings[botNumber].autoonline ? '𝗬𝗘𝗦 ✅' : '𝗡𝗢 ❎'}

❑ *SERVER*
Respon : ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_

Runtime :
Process : ${runtime(process.uptime())}
Os : ${runtime(os.uptime())}

Host Name : ${os.hostname()}
Platform : ${os.platform()}
Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*NODE JS MEMORY USAGE* :
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                miku.sendContact(m.chat, global.owner, m)
            }
            break
            case 'eval': {
                if (!isCreator) return reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
case 'menu2': case 'help2':
let getGroups = await miku.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anuyu = groups.map(v => v.id)
let anuys = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let kkks = `┏━━━━❲ *BOT INFO* ❳━━━━
┃
┃❒͡ ${botname}
┃❒͡ *Created By ${packname}*
┃
┗━━━━❲ ${botname} ❳━━━━

❉━━━━━━━━━━━━━━━━━━❉
*Name* : *${pushname}*
*(wa.me/${m.sender.split("@")[0]})*
*Limit* : *${global.db.data.users[m.sender].limit}*
❉━━━━━━━━━━━━━━━━━━❉

━━━━❲ *INFO BOT* ❳━━━━

 𒍮 *User : ${miku.user.id.length}*
 
 𒍮 *Private Chat : ${anuys.length}*
 
 𒍮 *Group Chat : ${anuyu.length}*

━━━━❲ ${botname} ❳━━━━`
let tobdn = [{
             urlButton: {
               displayText: '𝗪𝗘𝗕𝗦𝗜𝗧𝗘',
               url: 'https://s.id/mikubot'
             }
           },{
             urlButton: {
               displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘',
               url: 'https://s.id/chyoutubeku'
             }
           },
           {
             urlButton: {
               displayText: '𝗢𝗪𝗡𝗘𝗥',
               url: 'http://wa.me/6281334109123'
             }
           },
           {
             quickReplyButton: {
               displayText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
               id: 'listmenu',
             }
           }]
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, kkks, wm, menuvideo, tobdn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, kkks, wm, yahaha, tobdn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, kkks, wm, yahaha, tobdn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, kkks, wm, menuvideo, tobdn)
}
break
case 'listmenu':
const sections = [
    {
	title: "𝗠𝗘𝗡𝗨 𝗔𝗟𝗟",
	rows: [
	    {title: "𝗔𝗟𝗟 📔", rowId: ".menuall", description: "❬-->> Tampilkan Semua Fitur <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗚𝗥𝗢𝗨𝗣",
	rows: [
	    {title: "𝗚𝗥𝗢𝗨𝗣 👥", rowId: ".menugc", description: "❬-->> Tampilkan Fitur Group <<--❭"}
	]
    },
   {
	title: "𝗠𝗘𝗡𝗨 𝗦𝗘𝗔𝗥𝗖𝗛",
	rows: [
	    {title: "𝗦𝗘𝗔𝗥𝗖𝗛𝗜𝗡𝗚 🔎", rowId: ".menusearch", description: "❬-->> Tampilkan Fitur Searching <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗",
	rows: [
	    {title: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ⬇️", rowId: ".menudl", description: "❬-->> Tampilkan Fitur Downloader <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗖𝗢𝗡𝗩𝗘𝗥𝗧",
	rows: [
	    {title: "𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 ♻️", rowId: ".menucnvrt", description: "❬-->> Tampilkan Fitur Converter <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗔𝗡𝗜𝗠𝗘",
	rows: [
	    {title: "𝗔𝗡𝗜𝗠𝗘 ⛩️", rowId: ".menuanim", description: "❬-->> Tampilkan Fitur Anime <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗜𝗦𝗟𝗔𝗠",
	rows: [
	    {title: "𝗜𝗦𝗟𝗔𝗠 🕌", rowId: ".menuislam", description: "❬-->> Tampilkan Fitur Islam <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗣𝗢𝗥𝗡",
	rows: [
	    {title: "𝗣𝗢𝗥𝗡 🔞", rowId: ".menuporn", description: "❬-->> Tampilkan Fitur Porn <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠",
	rows: [
	    {title: "𝗥𝗔𝗡𝗗𝗢𝗠 🔀", rowId: ".menurndm", description: "❬-->> Tampilkan Fitur Random <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗠𝗔𝗞𝗘𝗥",
	rows: [
	    {title: "𝗠𝗔𝗞𝗘𝗥 🛠️", rowId: ".menumaker", description: "❬-->> Tampilkan Fitur Maker <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗙𝗨𝗡",
	rows: [
	    {title: "𝗙𝗨𝗡 😂", rowId: ".menufun", description: "❬-->> Tampilkan Fitur Fun <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗚𝗔𝗠𝗘",
	rows: [
	    {title: "𝗚𝗔𝗠𝗘 🎮", rowId: ".menugame", description: "❬-->> Tampilkan Fitur Game <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗠𝗕𝗢𝗡",
	rows: [
	    {title: "𝗣𝗥𝗜𝗠𝗕𝗢𝗡 🔮", rowId: ".menuprimbon", description: "❬-->> Tampilkan Fitur Primbon <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦",
	rows: [
	    {title: "𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗛𝗔𝗧 💬", rowId: ".menuanony", description: "❬-->> Tampilkan Fitur Anonymous <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗠𝗔𝗜𝗡",
	rows: [
	    {title: "𝗠𝗔𝗜𝗡 🤖", rowId: ".menumain", description: "❬-->> Tampilkan Fitur Main <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘",
	rows: [
	    {title: "𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 📂", rowId: ".menudatabase", description: "❬-->> Tampilkan Fitur Database <<--❭"}
	]
    },
    {
	title: "𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥",
	rows: [
	    {title: "𝗢𝗪𝗡𝗘𝗥 🧑‍💻", rowId: ".menuowner", description: "❬-->> Tampilkan Fitur Owner <<--❭"}
	]
    },
    {
	title: "𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢",
	rows: [
	    {title: "𝗔𝗟𝗟 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 𝗕𝗢𝗧", rowId: "", description: "❬-->> Thanks For All This <<--❭"},
	    {title: "𝗠𝗬 𝗦𝗘𝗟𝗙", rowId: "", description: "❬-->> Thanks For A.Farel.E <<--❭"},
	    {title: "𝗗𝗜𝗞𝗔 𝗔𝗥𝗗𝗡𝗧", rowId: "", description: "❬-->> Thanks For Sc N Tell Me <<--❭\nWA : https://tinyurl.com/y7xntvpj\nGH : https://tinyurl.com/yas7jna5"},
	    {title: "𝗙𝗔𝗧𝗜𝗛 𝗔𝗥𝗥𝗜𝗗𝗛𝗢", rowId: "", description: "❬-->> Thanks For Sc N Tell Me <<--❭\nWA : https://tinyurl.com/ybz8v3m9\nGH : https://tinyurl.com/ycchee7q\nYT : https://tinyurl.com/y7dvy369\nIG : https://tinyurl.com/y9tdopwz\nFB : https://tinyurl.com/ya9ace6p\nWS : https://tinyurl.com/y53zamhf"},
	    {title: "𝗭𝗘𝗘𝗢𝗡𝗘 𝗢𝗙𝗖", rowId: "", description: "❬-->> Thanks For Sc <<--❭\nWA : https://tinyurl.com/ybouxx4y\nGH : https://tinyurl.com/ycrlrko3\nYT : https://tinyurl.com/y84vweol\nIG : https://tinyurl.com/ybx2qe2f"},
	    {title: "𝗔𝗥𝗜𝗣 𝗦𝗞𝗜𝗨𝗪𝗘𝗥𝗦", rowId: "", description: "❬-->> Thanks For Sc Tell Me <<--❭\nWA : https://tinyurl.com/y8dxwh2u\nGH : https://tinyurl.com/y9pz4geg\nYT : https://tinyurl.com/y7sfag5l\nIG : https://tinyurl.com/ybxgkb2a"},
	    {title: "𝗞𝗔𝗛𝗙𝗭𝗫𝗭𝗬", rowId: "", description: "❬-->> Thanks For Sc N Tell Me <<--❭\nWA : https://tinyurl.com/ybzyrpz2\nGH : https://tinyurl.com/ydey2hmy\nYT : https://tinyurl.com/ya2e8mjr\nIG : https://tinyurl.com/yc9fww3v"},
	]
    },
]

const listMessage = {
  text: `Hai kak ${pushname}, Pilih Menu ${author} Disini`,
  footer: `Jangan Lupa Follow Terus ${author} Ya Kak`,
  title: `Hai Kak ${pushname}, ${ucapanWaktu}`,
  buttonText: "Pilih Disini",
  sections
}

miku.sendMessage(m.chat, listMessage, { quoted: fkontak})
break
case 'menu': case 'help':
teksmenunya = `Hai Kak ${pushname}

Saya ${author}, Bot WhatsApp Yang Membantu Kamu Membuat Sticker Dan Lainnya, Anda Butuh Info Dariku?`

footerteks = `Note: Kamu Pakai WA Lama Atau Mod, Dan Button Ga Keliatan, Langsung Aja Ketik ${prefix}allmenu

${wm}
🔖Owner ${namasbot}: Jika Kamu Menemukan Semacam Bug Atau Error Silahkan Chat Ke Nomor Owner ${namasbot}`
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, teksmenunya, footerteks, menuvideo, buttonmenu)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, teksmenunya, footerteks, yahaha, buttonmenu)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, teksmenunya, footerteks, yahaha, buttonmenu)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, teksmenunya, footerteks, menuvideo, buttonmenu)
}
break
case 'rules': case 'peraturan':
rulesbot = `*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!`

if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, rulesbot, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, rulesbot, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, rulesbot, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, rulesbot, wm, menuvideo, tobnn)
}
break
case 'menugc': case 'groupmenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, gropm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, gropm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, gropm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, gropm, wm, menuvideo, tobnn)
}
break
case 'menusearch': case 'searchmenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, serchm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, serchm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, serchm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, serchm, wm, menuvideo, tobnn)
}
break
case 'menudl': case 'downloadmenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, dlm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, dlm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, dlm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, dlm, wm, menuvideo, tobnn)
}
break
case 'menucnvrt': case 'convertmenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, convm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, convm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, convm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, convm, wm, menuvideo, tobnn)
}
break
case 'menuanim': case 'animemenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, anim, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, anim, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, anim, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, anim, wm, menuvideo, tobnn)
}
break
case 'menuislam': case 'islam': case 'islammenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, islm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, islm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, islm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, islm, wm, menuvideo, tobnn)
}
break
case 'menuporn': case 'pornmenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, pornm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, pornm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, pornm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, pornm, wm, menuvideo, tobnn)
}
break
case 'menurndm': case 'random': case 'randommenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, randm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, randm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, randm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, randm, wm, menuvideo, tobnn)
}
break
case 'menumaker': case 'makermenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, makm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, makm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, makm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, makm, wm, menuvideo, tobnn)
}
break
case 'menufun': case 'funmenu': case 'fun':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, funm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, funm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, funm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, funm, wm, menuvideo, tobnn)
}
break
case 'menugame': case 'gamemenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, gamem, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, gamem, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, gamem, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, gamem, wm, menuvideo, tobnn)
}
break
case 'menuprimbon': case 'primbonmenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, prim, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, prim, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, prim, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, prim, wm, menuvideo, tobnn)
}
break
case 'menuanony': case 'anonymous': case 'anonymousmenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, anonm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, anonm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, anonm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, anonm, wm, menuvideo, tobnn)
}
break
case 'menumain': case 'main': case 'mainmenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, mainm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, mainm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, mainm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, mainm, wm, menuvideo, tobnn)
}
break
case 'menudatabase': case 'menudb':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, dbm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, dbm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, dbm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, dbm, wm, menuvideo, tobnn)
}
break
case 'menuowner': case 'ownermenu':
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, ownm, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, ownm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, ownm, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, ownm, wm, menuvideo, tobnn)
}
break
case 'allmenu': case 'menuall':
let otd = `${gropm}\n\n${serchm}\n\n${dlm}\n\n${convm}\n\n${islm}\n\n${anim}\n\n${pornm}\n\n${randm}\n\n${makm}\n\n${funm}\n\n${gamem}\n\n${prim}\n\n${anonm}\n\n${mainm}\n\n${dbm}\n\n${ownm}`
if (db.data.settings.displaymenu == 'gif') {
miku.send5Gif(m.chat, otd, wm, menuvideo, tobnn)
} else if (db.data.settings.displaymenu == 'image') {
miku.send5Img(m.chat, otd, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'location') {
miku.send5Loc(m.chat, otd, wm, yahaha, tobnn)
} else if (db.data.settings.displaymenu == 'video') {
miku.send5Vid(m.chat, otd, wm, menuvideo, tobnn)
}
break
            default:
                 if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
                
                if (budy.startsWith('<')) {
                if (!isCreator) return reply(mess.owner)
                try {
                return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
                } catch (e) {
                m.reply(e)
                }
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    miku.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
