# Apricot Stone City Storyteller

This is an example from Dylan and Sophia's TUMO workshop on designing an interactive storytelling chatbot. All the code here was written during and for this course.

I recommend checking out the example I have in the `modules` folder to get a sense for how to create an interactive story.

## Installation

To set up this repo, open a terminal and navigate to the directory where you would like to clone *Storyteller*, then run the following commands (you should be able to just copy and paste these):

```
git clone https://github.com/empower-lab-dartmouth/apricot-stone-city.git
cd storyteller
npm install
cp .env.example .env
```

Now, open the *Storyteller* project in vscode and open the `.env` file, you should update the API key here to be your Telegram API key. You can set that up by following the [instructions here](https://www.siteguarding.com/en/how-to-get-telegram-bot-api-token). 

## Testing locally

Once that's ready, everything should be set up to run the example. To continuously rebuild and relaunch the application, you can run the following command: 

```
npm run start:dev
```

Now you should be able to chat with your bot :) try sending it a message...


## Debugging

Since things always break :) here's some additional notes that might be useful:

If there are any errors, they should show up in the heroku logs. You might run into an issue with heroku timing out on the free plan, there are some [hacky ways around this without paying](https://medium.com/better-programming/keeping-my-heroku-app-alive-b19f3a8c3a82) but I haven't dug too much into it yet. Also of note is [heroku's restart policy if a crash is encountered](https://stackoverflow.com/questions/19265728/does-heroku-restart-nodejs-server-if-application-crashes#:~:text=Heroku's%20dyno%20restart%20policy%20is,cool%2Doff%20of%20ten%20minutes.)
