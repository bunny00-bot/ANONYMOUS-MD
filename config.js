//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kibuukauthuman0@gmail.com@gmail.com";
global.location = "Wakiso, Uganda";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Uganda";
global.github = process.env.GITHUB || "https://github.com/Terrizev/ANONYMOUS-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/aid1i4.jpg";
global.devs = "https://t.me/terrizev";
global.sudo = process.env.SUDO || "256784670936";
global.owner = process.env.OWNER_NUMBER || "256784670936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || "3";
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/ecbf11.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.save_status_from = process.env.SAVE_STATUS_FROM || "256784670936";
global.read_status_from = process.env.READ_STATUS_FROM || "256784670936";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://anonymous-session-id-gen.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dsbUhLaEpwYmNobFdEaElVQmx6SG02b0J6ZUNEMjgyemJqUFZaem9rWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1lGMDhIcnl5MzVkZzFlM29MTlhRV0xZNVZONm1yUlVFK3RGVGZqaFIxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQ2dHRnlVSDJDNXJWcU9PY0UybmdoKzgrMFAzWU9GZG5wNnVnd2U2cEVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyU3JvOUUyeHZzNTQrRXhwekZ4bDBBSitHU1l2QzEvUlhDK0l2VGpHeTJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BQ3lKTEUvck51S0ZzSDVrYTJYZDZyOTFTejV1bzJ6SEJNVHpCRm5kbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik10TU1Xc2JkVEx3M2NUcWxpd25LeHBlZm9BOFdpSDZYbTlzVytEYVNVd0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0grOUF5NzBEUnpCUUFtL3ZTNWRDWTB4NDVDSE44bXI4M3ZlNW5PUDQwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1JaM2dGTmtBMDZ3Wmp4dnZWQ1JyRzR6S2h2eklNRGhjNGwzangxM2lCQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhTenlyc0UyRkZ4SzBFWWZ5cFg5NCsxeUExdDZZaDd4ZDRFV3kzbVNKSTFqdnpGOU5vLy9nMVNiZW85SDZndHUySE1YYkx6YmhTZENxRU94OHhPekNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6IkE3OHZsMndqOVdLZjV0UStzS0N0azQ0RHpYRWhRTjZadHk1UjlKNHVqbnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii1iMmhWY3lOU1BtWTdwaGFpRVVLUWciLCJwaG9uZUlkIjoiMTMxMzVlZjAtODdlZi00YmY4LWI3Y2QtM2QwZDE5OGE2NmQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5KUjdnbHNRVElrcXpWQTMwMHpLYVpuN3dGQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsSk9ZUi8xaTJZSHpPY1JXcVpQa3J0am9wUlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFM3VzVGSjgiLCJtZSI6eyJpZCI6IjI1Njc4NDY3MDkzNjo0MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXU3ejRrRUVPR1BwY0FHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoicy93Wmd1K241Zll2YS8rWUJuUlVFNWZ4cmRXMGNHYkZHN2tHWlF3bDN5OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL1Q0UnMwYnZnaDdKdWQ3citDRnlWRGF5d1F2VVJaNHhzNGxVOXNSMm55U3h5R3F1ZXhLb1ptdlRFU2s1M212eGNjb0x3Y3liOVJrVzkzc3Q3NTVYQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImxZRUJjV21iQXVOcWZ1NCsrUXhOUUZlRkhPQURZVzMrOUw2NDdrNVNxRHJYR21lYVh5WGI3UXZjaThTL21VamRsYm8vZmFpR2lRUkZsVjR4OSsxZUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2Nzg0NjcwOTM2OjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJQOEdZTHZwK1gyTDJ2L21BWjBWQk9YOGEzVnRIQm14UnU1Qm1VTUpkOHYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU0Mzg3MDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1YxIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ANONYMOIS-MD™`",
  author: process.env.PACK_AUTHER || "ANONYMOUS-MD",
  packname: process.env.PACK_NAME || "A N O N Y M O U S",
  botname: process.env.BOT_NAME || "ANONYMOUS-MD",
  ownername: process.env.OWNER_NAME || "TERRIZEV",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N O N Y M O U S").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
