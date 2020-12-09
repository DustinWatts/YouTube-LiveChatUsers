const secret = require('./secret.json');
const fetch = require('node-fetch');

var names = [];

getChatID();

setInterval(getChatUsers, secret.interval);
var liveChatId;

async function getChatUsers() {
    try {
        var res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${liveChatId}&part=authorDetails&maxResults=200&key=${secret.apiKey}`
        );

        var data = await res.json();

        console.clear();

        console.log(` ----- Start List ----- `);

        if (!data.error) {
            if (!data.items.length == 0) {
                for (var i = 0; i < data.items.length; i++) {
                    //console.log(data.items[i].authorDetails.displayName);
                    if (
                        !names.includes(data.items[i].authorDetails.displayName)
                    ) {
                        names.push(data.items[i].authorDetails.displayName);
                    }
                }
                for (let i = 0; i < names.length; i++) {
                    console.log(names[i]);
                }
            } else {
                error = 'No messages.';
                throw error;
            }
        } else {
            error = data.error.code + ': ' + data.error.errors[0].reason;
            throw error;
        }

        console.log(` ----- End List ----- `);
    } catch (error) {
        console.log('Oops! ' + error);
    }
}

async function getChatID() {
    try {
        var res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${secret.liveStreamId}&key=${secret.apiKey}`
        );

        var data = await res.json();

        if (!data.error) {
            liveChatId = data.items[0].liveStreamingDetails.activeLiveChatId;
        } else {
            error = data.error.code + ': ' + data.error.errors[0].reason;
            throw error;
        }
    } catch (error) {
        console.log('Oops! ' + error);
    }
}
