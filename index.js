const rwClient = require('./twitterClient.js');
const CronJob = require("cron").CronJob;


//Function to call the profile picture update API endpoint
const ppUpdate = async () => {
    try {
        //Select a random image index
        const imagesLength = 9;
        const randomIndex = Math.floor(Math.random() * imagesLength);

        await rwClient.v1.updateAccountProfileImage('./images/' + randomIndex + '.png')
    } catch (e) {
        console.error(e)
    }
}


//Set the cron interval to run ppUpdate
const job = new CronJob("0 * * * *", () => {
    ppUpdate()
})

job.start();