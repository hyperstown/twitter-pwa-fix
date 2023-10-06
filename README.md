# Twitter PWA fix for Firefox.

### Android Status Bar Color Fix for Twitter's PWA


<br />

<p align="center">
  <img 
    src="https://github.com/hyperstown/twitter-pwa-fix/assets/64496017/b7298a83-013f-4f9c-b231-8d6aa7baff2c" 
    alt="pwa-logo" 
    width=400px
  />
</p>

Twitter PWA on Firefox for Android has an issue where system status bar (that bar where your battery, 
clock and notifications are shown) has white background. Not only it looks awful when dark mode is enabled
but also font color is white. So it makes it impractical.
This script fixes that by removing unnecessary `theme_color` parameters from site's `manifest.json`.

## Installation

Download from Firefox Addons. (Coming Soon)


## Compatibility

Tested on Fennec 118 on Android 13. But it should work on any version.


## Disclaimer

This extension is provided as-is and is not officially affiliated with the supported website or any browser. While the script aims to enhance the PWA experience, it may not work perfectly under all circumstances. Use at your own discretion.

## Note

Previously this extension was provides as UserScript. And it worked by replacing original `manifest.json` with custom one for github. While it was extremely hacky it worked for quite some time. But now Firefox just won't accept manifest from any other site. You can't create a fake file on the server, redirect request or anything like that so there is no other option other than intercept manifest request and modify it's data. And you can't do that with user scripts as far as I know.

## Contributions

Contributions to the extension are welcome. If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

---

Enjoy a consistent PWA experience with a matching status bar color on your Android device!
