# Twitter PWA fix for Firefox.

### Android Status Bar Color Fix Userscript for Twitter's PWA


<br />

<p align="center">
  <img 
    src="https://github.com/hyperstown/twitter-pwa-fix/assets/64496017/b7298a83-013f-4f9c-b231-8d6aa7baff2c" 
    alt="pwa-logo" 
    width=400px
  />
</p>

Twitter PWA on mobile Firefox has an issue where system status bar (that bar where your battery, 
clock and notifications are shown) has white background. Not only it looks awful when dark mode is enabled
but also font color is white. So it makes it impractical.
This script fixes that by removing unnecessary `theme_color` parameters from sites `manifest.json`.
Currently it basically overwrites old manifest.json url with with a new one.
It's kinda a hack but it works.

## Installation

1. **Install a Userscript Manager:** \
Before you can use this userscript, make sure you have a userscript manager extension installed in your browser. 
I recommend using [Tampermonkey](https://www.tampermonkey.net/).
Note that standard mobile Firefox does't have Tempermonkey in addons so you will have to download either [Fennec](https://f-droid.org/packages/org.mozilla.fennec_fdroid/) of Firefox Nightly

3. **Install the Userscript:** \
Click [here](https://github.com/hyperstown/twitter-pwa-fix/raw/main/src/darkPWA.user.js) to install script.

4. **"Install" PWA:**
   - Open or refresh website.
   - Install PWA.
   - Done
   - (If status bar is still white you might want to restart browser and refresh page few times then install PWA again.


## Compatibility

Tested on Fennec 116 on Andrid 13. It may not work as expected on other platforms but it probably will.


## Disclaimer

This userscript is provided as-is and is not officially affiliated with the supported website or any browser. While the script aims to enhance the PWA experience, it may not work perfectly under all circumstances. Use at your own discretion.

## Contributions

Contributions to the userscript are welcome. If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

---

Enjoy a consistent PWA experience with a matching status bar color on your Android device!
