// Keep bookmarks to sections moved out of calibration.html working.
(() => {
  const sections = {
    "grades": "calibration-grading.html",
    "choices": "calibration-grading.html",
    "stray-light": "calibration-grading.html",
    "health": "calibration-grading.html",
    "light-panel": "calibration-grading.html",
    "coverage": "calibration-grading.html",
    "uncalibrated": "calibration-grading.html",
    "dust": "calibration-flats.html",
    "flat-groups": "calibration-flats.html",
    "measuring": "calibration-flats.html",
    "families": "calibration-flats.html",
    "changes": "calibration-flats.html",
    "light-flats": "calibration-flats.html",
    "groups-view": "calibration-flats.html",
    "by-hand": "calibration-flats.html",
    "flat-settings": "calibration-flats.html",
    "matching": "calibration-masters.html",
    "boundaries": "calibration-masters.html",
    "darks": "calibration-masters.html",
    "external": "calibration-masters.html",
    "stacking": "calibration-masters.html",
    "flats": "calibration-masters.html",
    "masters": "calibration-masters.html",
    "export": "calibration-masters.html",
    "settings": "calibration-masters.html",
    "rig-settings": "calibration-masters.html"
};
  const followSection = () => {
    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }
    if (Object.hasOwn(sections, id)) {
      window.location.replace(sections[id] + window.location.search + "#" + encodeURIComponent(id));
    }
  };
  followSection();
  window.addEventListener("hashchange", followSection);
})();
