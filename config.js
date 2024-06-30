//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "";
global.MONGODB = process.env.MONGODB_URI || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdtU2MrWWV6WENITE44WTRRcVJFSGd0VDVtK2VCdEtPanBsV1grbEZGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZBVkxkaHEvY1ZGTVlqVmx0eVhTMWIwcTZac0h3eFRzbVNPbzFVMEMydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SURlSUpWVnkxYmF0SU9yVlVKZWdWcE5qNXRzNUg2Ylo3anNyVzNqR1hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNZ2QxWTZGMG9wbStOMEllQitqaEFJS2swQ3UxN3c1NTF2TkVhT1ZSbVgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNWWxOMEpyTktCcks5YjVwNEh1Z3k1MStxV3E2WmFkWWhDWFR6c2llbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhtQ1NXV2Iwd3pPdzI2WnBRS3BnWHZZU1BQNHdKUFh5NjdkTzd4VVdvakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEd3eURRTS8yZGtZNitCVHNzalo3L3VwZVI1ZHpZTDdPMFhSZEpEODBIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVE2dzIwdGx0RDh6MWVKVlYzMDZGaFhIS3FiVGlKRXNzSEV4ODZiV0FCVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp3SUNla3k2OGlmRHJZZzJ3U1BSOWNKS0Rod0JoZ01vbXBpWUQyL29tRzJRNmhkc1NSOFZ2K0s1c2pPWFJYd05EUmNrWlRHTTlUUGE0Rmk3OUUzT2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6IkRtL3pDdFJnb2sxKzc2Ri9YWUFiNGdkMDdTL2t2d3k1L1FWcVRvcWkxeXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktGMmZuazhXVEZhUzYwaVE3SkQyTUEiLCJwaG9uZUlkIjoiYTIyMzcyNTQtODNiYy00OWRjLThmZTgtMDMzNGU3MzllMTYwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhKNU16YkJ6YW9ZS3JIVk94eHA0d1cyajBIVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhMjdtQmw4OGNxRmV1NllOOWJYOWRiSFVWZGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUDQzQUdUQ04iLCJtZSI6eyJpZCI6IjI2Mzc4Njk5NzEwODozM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNciBNYXJhaXJlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKekx0NVlHRU11K2g3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxZU9Bc3VDdmR3Z2JMVHJtcUNXU0J5Z3lPSmYxcUprYjZWU3Vva3B0SUcwPSIsImFjY291bnRTaWduYXR1cmUiOiJaMy9CRzRqS202cmlRRGlzdWU1dkU3WHdCUVJKeElEcm1CK09xWmZpNEw0dHFxaGJCMGRPMHBMYnNzWGt4Ty9vLzJQNFdVRzJMQXdFeVZoZVBUMU1CQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUVZNaW9lQ3FNYm01eGMzQ1hJbVlTVDBYVVR2SDR1SkRKaTFaNGl6d0NYZW9FL2JFUGVpQnEyRmJubVMyNzZLQmMxTUh3cU9LSk9iWnA2T2krbXRvZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODY5OTcxMDg6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFhqZ0xMZ3IzY0lHeTA2NXFnbGtnY29NamlYOWFpWkcrbFVycUpLYlNCdCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTc4NzM1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQMDEifQ==";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "263786997108";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "Tanaboy",
  ownername: process.env.OWNER_NAME || "Mr Maraire",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
