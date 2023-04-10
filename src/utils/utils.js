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
    },
  changeImages:
    // change background image for playlist div depending on genre
    function handleBackgroundImg(genre) {
      switch (genre) {
        case "chill":
        case "study":
          return "https://wallpapercave.com/wp/wp10837598.png"
        case "hip-hop":
          return "https://wallpapers.com/images/hd/dark-city-digital-art-6vx1qudd00qlnz17.jpg"
        case "club":
        case "party":
          return "https://c1.wallpaperflare.com/preview/581/162/430/smoke-party-people-dark.jpg"
        case "pop":
          return "https://media.istockphoto.com/id/1199262104/vector/illuminated-stage-with-scenic-lights-and-smoke-blue-vector-spotlight-with-smoke-volume-light.jpg?s=612x612&w=0&k=20&c=sGterFSNO2hzFRt6NRg_VDLkvur2UIloA5v5pDGFtVg="
        case "r-n-b":
        case "soul":
        case "romance":
          return "https://wallpapers.com/images/hd/dark-heart-on-window-pane-a2fqmtwop8i9narh.jpg"
        case "sad":
        case "rainy-day":
          return "https://wallpaperaccess.com/full/777992.jpg"
        case "work-out":
          return "https://t3.ftcdn.net/jpg/01/19/59/74/360_F_119597487_SnvLBdheEGOxu05rMQ5tCzo250cRrTz9.jpg"
        default:
          return "https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ="
      }
    },
  URLToken:
    function getTokenFromURL() {
      return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
          let parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1])

          return initial
        }, []);
    },
  addScriptTag:
    function addScript() {
      const url = "https://sdk.scdn.co/spotify-player.js"

      const scripts = document.getElementsByTagName('script');
      for (let i = scripts.length; i--;) {
        if (scripts[i].src === url) {
          return
        } else {
          const script = document.createElement("script");
          script.src = url;
          script.async = true;

          document.body.appendChild(script);
        }
      }
    }
}

export default utils
