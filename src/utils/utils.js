const utils = {
  msConverter: 
  
  function millisecondsToMinutes(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  },
  charConverter:

  function asciiConvert(playlist, str) {
    const regexExtractComma = /&#x2F;/gi
    playlist.description = str.replaceAll(regexExtractComma, ',')
    return playlist
  },
  truncate:

  function truncateText(str) {
    return str.length > 30 ? str.substring(0, 35) + "..." : str;
  },
  multiObjectNameString:

  function parseObjectNames(objects) {
    return objects.map((object) => object.name).join(', ')
  }
}

export default utils