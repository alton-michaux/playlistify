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
  }
}

export default utils