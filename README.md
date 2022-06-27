# Apricot Stone City Storyteller

This is an example from Dylan and Sophia's TUMO workshop on designing an interactive storytelling chatbot. All the code here was written during and for this course.

I recommend checking out the example I have in the `modules` folder to get a sense for how to create an interactive story.

## Installation

To set up this repo, open a terminal and navigate to the directory where you would like to clone *Storyteller*, then run the following commands (you should be able to just copy and paste these):

```
git clone https://github.com/empower-lab-dartmouth/apricot-stone-city.git
```
Now, enter your username. DON'T enter your password, if you do you will see an error like this:

```
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
fatal: Authentication failed for 'https://github.com/empower-lab-dartmouth/apricot-stone-city.git/'
```

Instead of entering your password, create an access token by following the instructions here: 
https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

You can give this access token all the permissions available. Now, tell github who you are by running (but with your own name and email)

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

Now, do the following:
```
cd apricot-stone-city
npm install
cp .env.example .env
```

Now, open the *Storyteller* project in vscode and open the `.env` file, you should update the API key here to be your Telegram API key. You can set that up by following the [instructions here](https://www.siteguarding.com/en/how-to-get-telegram-bot-api-token). 


## How to push your local changes
After verifying that your changes are working and that the local chatbot server is not crashing (very important :) your friends will thank you for not breaking production), you can push your changes to remote by doing the following:

```
git status
```
this will show you a list of the files that were changed. Please do this to verify that no unexpected files show up as being changed.

```
git pull
```
This will pull changes from remote. You should ALWAYS pull changes before pushing. The idea here is that while you were working other people may have pushed changes that—when mixed with your code changes—could break things. If you don't pull first, you could be creating errors. So, use this command. This may result in a merge conflict, don't worry, that just means that your changes conflict with other changes that were made while you were working. To fix that, just go through and resolve the merge conflict line by line yourself and verify—by running locally— that everything looks good to go. Then, once you're confident. Run:

```
git add .
```

this adds all the files you've changed to the list of changes to be committed. Then do the following (with your own commit message):

```
git commit -m "Your commit message here"
git push
```
That should do the tick. You can check https://github.com/empower-lab-dartmouth/apricot-stone-city to verify that your changes were committed.

## Testing locally

Once that's ready, everything should be set up to run the example. To continuously rebuild and relaunch the application, you can run the following command: 

```
npm run start:dev
```

Now you should be able to chat with your bot :) try sending it a message...


## Debugging

Since things always break :) here's some additional notes that might be useful:

If there are any errors, they should show up in the heroku logs. You might run into an issue with heroku timing out on the free plan, there are some [hacky ways around this without paying](https://medium.com/better-programming/keeping-my-heroku-app-alive-b19f3a8c3a82) but I haven't dug too much into it yet. Also of note is [heroku's restart policy if a crash is encountered](https://stackoverflow.com/questions/19265728/does-heroku-restart-nodejs-server-if-application-crashes#:~:text=Heroku's%20dyno%20restart%20policy%20is,cool%2Doff%20of%20ten%20minutes.)
