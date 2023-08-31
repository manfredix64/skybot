const fetch = require('node-fetch');

module.exports = {
    name: 'mayor',
    execute(message) {
        message.channel.send('alr')
    }
}