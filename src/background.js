function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = event => {
    let str = decoder.decode(event.data, { stream: true });
    str = str.replace(/theme_color/g, 'theme_color_old');
    filter.write(encoder.encode(str));
    filter.disconnect();
  }

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://twitter.com/manifest.json"], types: ["main_frame"] },
  ["blocking"]
);
