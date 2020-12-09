#YouTube-LiveChatUsers

Get's a list of livechat users sorted by first message. Users are only added since the script started running
so leave start the script at the beginning of a livestream. Use `secret.json` to set your API Key, the liveStreamID and the time interval for refreshing the list.

#secret.json

This is where some configuration lives.

API calls to the YouTube API need a Google API Key. A (limited) free Google API key can be obtained from https://console.cloud.google.com, creating a Project, adding an API to that Project and then creating an API key for that Project. In this app you need to add your API key to sercet.json under "apiKey:".

You will also need the provide the liveStreamID. The liveStreamID can be found in the video URL. It is the part after `watch?v=`. Enter this ID under "liveStreamId:". 

The interval is the time in ms after which the list is updated. Be aware that YouTube limits the number of calls to their API, so you might want to exit the app when you are one using it.

#NodeJS, npm and node-fetch

This app uses NodeJS and node-fetch

Node.js is an open-source cross-platform JavaScript run-time environment. To install NodeJS:

`sudo apt install nodejs` -or- download from https://nodejs.org/en/

npm is a package manager used to add modules to NodeJS. To install npm:

`sudo apt install npm`

In the directory the livechatusers.js lives:

`npm install node-fetch`



