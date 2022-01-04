# Holden-bot (made for discord)

>This bot is made for quizin'
>And that's just what he'll do
>One of these days this bot is gonna quiz all over you


#### Code Dependencies:

(*make sure your nodejs is v16.6.0 or higher*)
- discord.js
- dotenv
- eslint



#### config.json:
To prevent errors while testing the bot, its best to add this file to your system
and copy the bots token in your self.

`{
	"token": "your-token-goes-here"
}`



#### The current rule set in linter aims to cover the following to try and maintain consitent code:
- Allowing you to debug with console.log();
- Prefer using const over let or var, as well as disallow var;
- Disapproving of variables with the same name in callbacks;
- Requiring single quotes over double quotes;
- Requiring semicolons. While not required in JavaScript, it's considered one of the most common best practices to follow;
- Requiring accessing properties to be on the same line;
- Requiring indenting to be done with tabs;
- Limiting nested callbacks to 4. If you hit this error, it is a good idea to consider refactoring your code.
