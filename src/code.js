const { Telegraf } = require("telegraf");
require('dotenv').config();

const bot = new Telegraf(process.env.token);

bot.start((ctx) => {
    ctx.reply("Оберіть континент:", {
        reply_markup: {
            inline_keyboard: [
                [{ text: ' Європа', callback_data: 'Europe' }],
                [{ text: ' Азія', callback_data: 'Asia' }],
                [{ text: ' Африка', callback_data: 'Africa' }],
            ]
        }
    });
});

bot.on("callback_query", (ctx) => {
    const data = ctx.callbackQuery.data;

    if (data === "Europe") {
        ctx.reply("Виберіть країну в Європі:", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Франція', callback_data: 'France' }],
                    [{ text: 'Німеччина', callback_data: 'Germany' }],
                ]
            }
        });
    } else if (data === "Asia") {
        ctx.reply("Виберіть країну в Азії:", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Японія', callback_data: 'Japan' }],
                    [{ text: 'Індія', callback_data: 'India' }],
                ]
            }
        });
    } else if (data === "Africa") {
        ctx.reply("Виберіть країну в Африці:", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: ' Єгипет', callback_data: 'Egypt' }],
                    [{ text: 'ПАР', callback_data: 'SouthAfrica' }],
                ]
            }
        });
    } else if (data === "France") {
        ctx.reply("У Франції розмовляють французькою мовою.");
    } else if (data === "Germany") {
        ctx.reply("У Німеччині розмовляють німецькою мовою.");
    } else if (data === "Japan") {
        ctx.reply("У Японії розмовляють японською мовою.");
    } else if (data === "India") {
        ctx.reply("В Індії розмовляють гінді та англійською мовами.");
    } else if (data === "Egypt") {
        ctx.reply("В Єгипті розмовляють арабською мовою.");
    } else if (data === "SouthAfrica") {
        ctx.reply("У ПАР розмовляють англійською та африкаанс.");
    }
});

bot.launch(() => console.log("Bot started"));
