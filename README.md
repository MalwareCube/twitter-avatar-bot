# twitter-avatar-bot 🐦
A simple node.js script to automatically change your Twitter profile picture on a configurable schedule by pulling images from an "images" directory.

![TwitterBot Example](https://i.imgur.com/HdCbeiZ.png)

This tool uses the [twitter-api-v2](https://www.npmjs.com/package/twitter-api-v2) npm package for API requests. API keys and secrets are pulled from a `.env` file (reference `.env_sample` for the required variables). Visit the [Twitter Developer Platform](https://developer.twitter.com) to generate the required API keys.

This repo is very easy to configure for your own use, with easy options to alter the frequency of running via cron, as well as an easy way to load images to cycle through.

Once configured to your liking, it's an extremely lightweight script that can be hosted as a worker on the cloud platform of your choice ([Heroku](https://heroku.com), [Netlify](https://netlify.com), etc.).

## Change the frequency of profile picture updates
The [cron](https://www.npmjs.com/package/cron) module is used to schedule the API POST requests, which can easily be modified to your liking. By default, the tool runs once an hour, on the hour, by the following syntax:
`new CronJob("0 * * * *"`

### Other examples

To have the tool run once a minute, you can just change the cron syntax:
`new CronJob("* * * * *"`

Once a day at 8am:
`new CronJob("0 8 * * *"`