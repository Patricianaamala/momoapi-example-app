export function displayDateTime(ticks) {
  const seconds = Math.floor((Date.now() - ticks) / 1000);

  let interval = Math.floor(seconds / 3600);

  if (interval > 24) {
    return this.displayTime(ticks);
  }

  if (interval > 1) {
    return interval + " hours ago";
  }

  if (interval === 1) {
    return interval + " hour ago";
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 2) {
    return interval + " minutes ago";
  }

  if (interval >= 1) {
    return "1 minute ago";
  }

  return "just now";
}

export function getTimestamp() {
  return Date.now();
}

export function toTitleCase(str) {
  function doTitleCase(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }
  return str.replace(/\w\S*/g, doTitleCase);
}

export function getWindowLocationOrigin() {
  let windowLocationOrigin = window.location.origin;
  if (!windowLocationOrigin) {
    windowLocationOrigin =
      window.location.protocol + "//" + window.location.hostname;
    if (window.location.port) {
      windowLocationOrigin += ":" + window.location.port;
    }
  }
  return windowLocationOrigin;
}
