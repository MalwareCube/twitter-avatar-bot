//Require environment variables from .env file
require('dotenv').config();

const { TwitterApi } = require('twitter-api-v2');

const twitterClient = new TwitterApi({
    appKey: process.env.APPKEY,
    appSecret: process.env.APPSECRET,
    accessToken: process.env.ACCESSTOKEN,
    accessSecret: process.env.ACCESSSECRET
});

const rwClient = twitterClient.readWrite;

module.exports = rwClient