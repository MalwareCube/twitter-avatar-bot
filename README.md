# twitter-avatar-bot 🐦
A simple node.js script to automatically change your Twitter profile picture on a configurable schedule by pulling images from an "images" directory.

![TwitterBot Example](https://i.imgur.com/HdCbeiZ.png)

This tool uses the [twitter-api-v2](https://www.npmjs.com/package/twitter-api-v2) npm package for API requests. API keys and secrets are pulled from a `.env` file (reference `.env_sample` for the required variables). Visit the [Twitter Developer Platform](https://developer.twitter.com) to generate the required API keys.

This repo is very easy to configure for your own use, with quick options to alter the frequency of avatar updates via cron, as well as an easy way to pull images to cycle through.

Once configured to your liking, it's a light-weight script that can be hosted as a worker on the cloud platform of your choice ([Heroku](https://heroku.com), [Netlify](https://netlify.com), etc.).

## Change the frequency of profile picture updates
The [cron](https://www.npmjs.com/package/cron) module is used to schedule the API POST requests, which can easily be modified to your liking. By default, the tool runs once an hour, on the hour, by the following syntax:
`new CronJob("0 * * * *"`

### Other cron examples

To have the tool run once a minute, you can just change the cron syntax:
`new CronJob("* * * * *"`

Once a day at 8am:
`new CronJob("0 8 * * *"`

## Managing images
The tool cycles through random profile pictures in the `/images` directory using a `Math.random()` function. This tool was purpose-built to cycle images at random, but if you'd like your images to be cycled sequentially by filename, that would require some changes to the `index.js` logic. The tool does not use any directory browsing modules to read filenames. Rather, filenames should be sequentially numbered. For example: `1.png`, `2.png`, `3.png` ... etc. 

Additionally, the `imagesLength` variable in `index.js` must be updated to match the number of images in the `/images` directory. Again, this was purpose-built and avoids using node to read files and directories.

If the file type needs to be changed (for example, using `.jpg` instead of `.png` files, simply change that hardcoded value in `index.js`).


