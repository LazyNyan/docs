---
title: Using SoundCloud
description: Use SoundCloud as a music source
sidebar:
  label: SoundCloud
  order: 3
---

To display your songs from SoundCloud, we use of the undocumented "internal" API used by their website.
This requires us to use the same credentials the official website uses, so this page will walk you through how to obtain your own account's OAuth token.

:::danger[Don't be an idiot!]
In case it wasn't already obvious, this token gives access to your *entire* account. As such you should not paste it anywhere you don't trust (how ironic for me to be saying this...)

Widget operations and token exchanges are kept inside your browser locally (exceptions being stinky sites that don't allow CORS, -ahem- Spotify)

With that being said: **by continuing, you accept these risks.**
:::

Step by step how to get your soundcloud token:
- Make sure you are signed in to your SoundCloud account on soundcloud.com
- Open the Developer Tools in your browser:
  - This can be accessed by Right Click -> Inspect (or inspect element)
  - Or by going to your browser's options menu and finding something along the lines of "developer tools"
  - Or by using the keys `CTRL + SHIFT + I` (`CMD + OPTION + I` on MacOs) or `F12` depending on your browser/operating system
  - If you use Firefox or another browser, its pretty similar you can figure it out
- Access your `oauth_token` cookie, whichever way is easier for you:
  - Find the `Application` tab along the top (may need to click `...`) -> Cookies -> soundcloud.com -> search for oauth_token
  - OR take it from the `Network` tab inside any request to `soundcloud.com`, omitting "OAuth" (we add this prefix ourselves)
- Copy the value on the right

Now go to the [widget setup page](https://music.nyako.cat/setup), click SoundCloud & paste that token you just got a few steps ago. If you don’t know what I’m talking about, please see a psychiatrist as you may have ADHD.

Then you can click Request Authorization.

Once you've gotten it, you can go on to customizing the widget to your liking!
<LinkCard title="Customize your widget" href="/music-overlay/04-widget-appearance" />
