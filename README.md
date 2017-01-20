# skimmer.js
A quick weaponization of "Your Social Media Fingerprint' by RobinLinus, adapted for reconnaissance.

After doing some research for a presentation on modern Phishing tactics, I came across Social Media Leak by Robin Linus (https://robinlinus.github.io/socialmedia-leak/) and decided to use some of his example code to produce a simple NodeJS / JS payload for recon work.

This work is adapted from his, with some small additions in the form of XMLHTTPrequests being used to forward the client-side data to a backend NodeJS server for logging / monitoring.

This payload should never be used without permission, and only be used for testing security controls on your OWN systems.

## Using Skimmer.js

Install NodeJS & npm:

```
$ sudo apt-get install npm
$ sudo apt-get install nodejs
```


Clone the repo:

`git clone https://github.com/JakeKing/skimmer.js.git && cd skimmer.js`

Install the required node packages:

```
$npm install express
$npm install body-parser
```

Start the app

`nodejs app.js`

```{r, engine='bash', count_lines}
ubuntu@ubuntu:~/skimmer.js$ nodejs app.js
Skimmer is running on 7002
Waiting on a visitor...
192.168.0.109 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36 {"network":"Github"}
```
