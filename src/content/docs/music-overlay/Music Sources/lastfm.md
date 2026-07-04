---
title: Using Last.fm
description: Use Last.fm as a music source, including scrobbling Spotify.
sidebar:
  label: Last.fm 
  order: 2
---
Last.fm is a website to track your listening history and compare your listening habits with other users.
It tracks what you play from any source you submit to it (a 'scrobble')

It also supports connecting your spotify account, which is effectively a bypass for Spotify's premium requirement. 

Last.fm does not provide playback progress, so it will not show on the widget.
 
### Create a Last.fm API account

Go to [last.fm/api/account/create](https://www.last.fm/api/account/create) and fill in the form to create an API app.

Copy your **API key**! you can find it again later at [last.fm/api/accounts](https://www.last.fm/api/accounts).

### Enter your credentials

On the [widget setup page](https://music.nyako.cat/setup), select **Last.fm** and enter your API key and Last.fm username.

:::note
Last.fm scrobbling has some limitations compared to a direct source connection: album art may be missing or different for certain tracks, no song progress is given by lastfm, and song updates may be slightly delayed.
:::

### Using Spotify with Last.fm (free Spotify workaround)

If you don't have Spotify Premium but still want to use Spotify as your source, you can scrobble it through Last.fm:

Go to [Last.fm Settings → Applications](https://www.last.fm/settings/applications) and click **Connect** next to **Spotify Scrobbling**, then follow the Last.fm steps above.


Once you've gotten it, you can go on to customizing the widget to your liking!
<LinkCard title="Customize your widget" href="/music-overlay/04-widget-appearance" />
