---
title: Using Spotify
description: Use Spotify as a music source (requires Spotify Premium)
sidebar:
  label: Spotify (Premium required)
  order: 2
---

This page will cover how to create a Spotify API app to fetch your now playing music. This now requires an active Spotify Premium subscription so I dont recommend it unless you're already paying for spotify lol

### Create a Spotify Developer App

Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and sign in.

Click **"Create App"** and fill in:

- **App name:** Nyan Music Overlay
- **App description:** Anything you want
- **Redirect URI:** `https://music.nyako.cat/setup`
- **Which API/SDKs are you planning to use?** Select "Web API"

Click **"Save"**.

On your app's settings page, copy the **Client ID** and **Client Secret** (click "View client secret" to reveal it).

### Enter credentials & authorize

On the widget setup page, select **Spotify** and paste your Client ID and Client Secret.

Click **"Authorize with Spotify"** and authorize your account with your app

You'll be redirected back and you should be connected now!

Once you've gotten it, you can go on to customizing the widget to your liking!
<LinkCard title="Customize your widget" href="/music-overlay/04-widget-appearance" />
