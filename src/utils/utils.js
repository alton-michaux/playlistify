const utils = {
  msConverter:
    // convert ms to minutes and seconds
    function millisecondsToMinutes(millis) {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    },
  charConverter:
    // convert ASCII encoded characters in text
    function asciiConvert(playlist, str) {
      const regexExtractComma = /&#x2F;/gi
      playlist.description = str.replaceAll(regexExtractComma, ',')
      return playlist
    },
  truncate:
    // truncate longer text
    function truncateText(str) {
      return str.length > 30 ? str.substring(0, 35) + "..." : str;
    },
  multiObjectNameString:
    // join array strings into a single comma seperated string
    function parseObjectNames(objects) {
      return objects.map((object) => object.name).join(', ')
    },
  locateID:
    // locate playlist id in html
    function findID(index, ref) {
      const regexExtract = new RegExp('value=(.*)');
      const target = ref.current.element.children[1].children[index].innerHTML
      return target.match(regexExtract)[1].substr(1, 22)
    }
}

export default utils
