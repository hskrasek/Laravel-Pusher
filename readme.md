## Laravel - Pusher

One night I decided to play around with [Pusher.JS](http://pusher.com/), and decided to use Laravel as the backend server. This particular setup makes use of my [Laravel-Gulp](https://github.com/hskrasek/Laravel-Gulp) repository, making it easier to manage all the front-end assets.

You can view a demo of this [here](http://pusher.hunterskrasek.com), but be warned, this demo is using my free API keys, so if someone decides to spam the demo alot, my monthly usage will be maxed out. This is a quick and dirty implementation, so if that happens and things error out, who knows what will happen.

### Want to expand off this?

Would make me happy if I found out people actually found this useful and decided to clone it and work off of my setup. To get everything going though, you'll need to run the following:

```
composer install && npm install && gulp dev
```

Any changes to JavaScript, CSS, or Images should be made within the `app/assets` directory. You can change this, but you'll need to update the Gulpfile accordingly. 

Going to use this in production? Hope you did a lot of cleanup and testing, but make sure you run `gulp` without anything extra for minified versions of CSS and JS.
