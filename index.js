const { Client, Intents } = require("discord.js");
const { token, prefix } = require('./config.json');

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers']
})

client.on('ready', () => {
    console.log('good')
})

client.login(token)