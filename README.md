# skimmer.js
A quick weaponization of "Your Social Media Fingerprint' by RobinLinus, adapted for reconnaissance.

After doing some research for a presentation on modern Phishing tactics, I came across Social Media Leak by Robin Linus (https://robinlinus.github.io/socialmedia-leak/) and decided to use some of his example code to produce a simple NodeJS / JS payload for recon work.

I highly reccomend you review and understand the vulnerabilities presented in his proof of concept. It provides a much deeper dive into the usage of abusing login redirections and CORS policy standards.

The code in the skimmer.js payload is almost entirely Robins, with some additions in the form of XMLHTTPrequests being used to forward the client-side data to a backend NodeJS server for logging / monitoring.

Really, this tool is designed to better determine suitable payloads for internal pentest and phishing programs to better understand how to effectively scope targets with well-designed Spear Phishing payloads using SET & other great tools.


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

Start the nodejs server

`nodejs app.js`

The server when running performs two simple tasks. It hosts the index.html page (that should be adapted if required) as well as serving as a POST endpoint for the XMLHTTP requests being sent from the client-side javascript.

The engine running:

```{r, engine='bash', count_lines}
ubuntu@ubuntu:~/skimmer.js$ nodejs app.js
Skimmer is running on 7002
Waiting on a visitor...
```

To test the payload, you can navigate to http://localhost:7002 and check the nodejs app log. You will see strings in the following format:

IP Address | UserAgent | {"Network":"Network Name"}

```
192.168.0.109 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36 {"network":"Github"}
```

### This payload should never be used without permission, and only be used for testing security controls on your OWN systems. Use at your own risk.
