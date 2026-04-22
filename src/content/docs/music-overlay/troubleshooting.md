---
title: Troubleshooting
description: Fixes for common issues with the music overlay widget
---

## The widget is blank / nothing shows up

Make sure you selected the right source, that you allowed apps on device in your browser, and your source credentials are correct.

- **Spotify:** Make sure the setup shows a green checkmark next to it, that you have Premium, and that you entered the correct credentials.
- **YouTube Music:** Make sure Pear Desktop is open and the HTTP API plugin is enabled.
- Try right-clicking the browser source in OBS and selecting **"Refresh"**

## Spotify says "token expired" or stops working

Tokens *should* auto-refresh, but if it stops working you can try this:

1. Click the red warning icon at the bottom of the sidebar, press the **"Reset authorization"** button, then re-authorize.
2. Copy the new widget URL and update your OBS browser source.

## YouTube Music / Pear Desktop won't connect

- Make sure Pear Desktop is running and the HTTP API plugin is enabled.
- Double-check the host and port match what Pear Desktop shows.
- If you run OBS and Pear Desktop on different machines, use the LAN IP for the machine running pear (not 127.0.0.1) and make sure the port isn't behind a firewall.
- When you click **"Request Authorization"**, switch to Pear Desktop and click **"Allow"** if you're prompted to
- Keep the app open when you're using it 

## The widget looks wrong / wrong size in OBS

Right-click the source -> **Properties** -> and adjust the width/height:

| Style | Width | Height |
| --- | --- | --- |
| Slim | 400 | 100 |
| Inverse slim | 550 | 100 |
| Full | 400 | 150 |
| Classic | 200 | 200 |

if these sizes dont work for you then play with it until it does!

## I changed settings but the widget didn't update

Settings are included with the URL. If you change any options you should copy the new widget URL and update it in your browser source properties.

## Can't create a Spotify Developer App

Spotify requires you, the app owner, to have Premium and limits you to 1 dev app. You can share one app with multiple things (this, songify, amuse, etc.) but you might encounter rate limits.

If this affects you too much consider migrating your library elsewhere like YouTube Music.

## The authorization prompt in Pear Desktop doesn't appear

If authorization is disabled in the API server plugin, you won't get a prompt for it.

If not, make sure:

- you clicked **"Request Authorization"** on the setup page first
- the prompt isn't hidden behind other windows you have open 
- you try restarting Pear Desktop
