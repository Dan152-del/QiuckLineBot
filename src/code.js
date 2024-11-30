const { Telegraf } = require("telegraf");
require(`dotenv`).config()
const bot = new Telegraf(process.env.token);
bot.on("text", (ctx) =>{
    console.log(ctx.message)
}
)
bot.start((msg) => msg.reply("Welcome"))
bot.launch(() =>  console.log("start"))
