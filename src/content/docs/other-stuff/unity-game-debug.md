---
title: Debugging a Unity game's release build
description: Making a debug build of Unity Games (for BepInEx modding purposes)
sidebar:
  order: 0
---

Hi! this is a mirror of my [github gist](https://gist.github.com/nyakowint/1743cdc079a7779a783cc711fda0ac39) covering the same thing.

# Step-by-step guide turning a Unity game's Release build into a Debug build for modding

> [!NOTE]
> This guide was written regarding **Unity 2022.x**, but the process seems to be the same for 2017-2019 and newer versions including Unity 6 (as of July 2026). 

Sources are included at the footer of this doc in case I dont explain something well or at all.



## Section 1. Getting a debug build

I think BSMG has a clearer explanation (with pictures!) and you may wish to use their guide for this section, minus Beat Saber specific steps. https://bsmg.wiki/modding/pc/testing.html#using-a-debug-unity-build

This is basically the same process as what's on the dnSpy page, except minor clarifications.
1. Go to the [Unity Download Archive](https://unity.com/releases/editor/archive) and download the version of Unity your game uses.
2. If you have Unity Hub, go to `Installs > Settings Cog > Show in Explorer`, if not, navigate to where you installed the editor.
3. *Now* you'll find the windows players in `<install-dir>\Editor\Data\PlaybackEngines\windowsstandalonesupport\Variations`.
    - *Most* games are 64-bit now lol — `win64_player_development_mono` is the right folder *unless you know your game is 32bit*

Make a copy of your game's folder, we'll be working with it now. Copy `win64_player...`'s `Data` directory to `<game>_Data`, overwriting everything in it.

**Almost there... This depends on your game's Unity version-**
  
Newer Unity versions: Copy `WindowsPlayer.exe` & `UnityPlayer.dll` to the game folder, rename the original game to whatever, 
then rename `WindowsPlayer.exe` to `<game-name>.exe`. 

Older Unity versions: copy `player_win.exe` and rename it to `<game-name>.exe`. 

Some (weeeeird) Unity versions also require `WinPixEventRuntime.dll` to be copied such as 2018.4-mbe 

## Section 2. Enabling script debugging

To enable script (.NET) debugging, you have to create a file in the `<game-name>_Data` directory.

If it's `Unity 2017.2` or later

`<game-name>_Data\boot.config`

Example:
```
player-connection-mode=Listen
player-connection-guid=3060108046
player-connection-debug=1
player-connection-wait-timeout=-1
player-connection-ip=123.45.67.89
```

It seems like only `player-connection-debug=1` is needed, the other lines can be removed.

Or if it's `Unity 4.x - 5.x` or `Unity 2017.1`:

`<game-name>_Data\PlayerConnectionConfigFile`

Example:

```
listen 3060108046 1 1
```

## Section 3. Making your stacktraces (more) useful
If you suck at reading stacktraces like I do, you'll find this very helpful as it gives you Filepaths and line numbers for your plugins.

- Plugin builds produce a portable `.pdb` which is not usable in this form, so change your release configuration's Debug Type to full.
```xml
<DebugType>full</DebugType>
```
Next, you'll need [pdb2mdb](https://gist.github.com/jbevain/ba23149da8369e4a966f), this will convert our full `.pdb` into an mdb file that BepInEx can utilize. If the one in the gist doesn't work, try the one someone's provided in the comments.

- Build your plugin with the updated configuration. Make sure your `.dll` and `.pdb` are in the same folder then drag *just the dll* onto `pdb2mdb.exe` to convert it. 

You can now move your plugin as well as the new `mdb` file to your `BepInEx/plugins` folder. The pdb is not needed anymore.


**Congrats** you now have a "debug build" of your app/game!

You can follow the original guides to use a debugger or simply test your mod as usual and you should have a less headache-inducing stacktrace now.


### Sources

https://docs.bepinex.dev/articles/advanced/debug/plugins_dnSpy.html

https://docs.bepinex.dev/articles/advanced/debug/plugins_vs.html

https://github.com/dnSpy/dnSpy/wiki/Debugging-Unity-Games#turning-a-release-build-into-a-debug-build
