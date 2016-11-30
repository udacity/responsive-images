(function() {
  function getNodes(selector) {
    return Array.prototype.slice.apply(document.querySelectorAll(selector))
  }

  var collectPageSize = function() {
    // Only summing up images!
    var inSizeRange = false;
    var max = 1500000;
    var min = 0;
    var totalBytes = 0;
    var elemsWithBytes = [];  
    var imgSelectors = [
      'img:not([src="images_src/fixed/smiley_face.png"])'
    ];

    imgSelectors.forEach(function(img) {
      var elems = getNodes(img);
      elemsWithBytes = elemsWithBytes.concat(elems);
    });
    
    // get picture elems current srcs too
    var pictures = getNodes('picture > img');
    elemsWithBytes = elemsWithBytes.concat(pictures);

    var requests = 0;

    function fireLoadEvent(evt) {
      if (evt.lengthComputable) {
        // evt.total the total bytes seted by the header
        totalBytes = totalBytes + evt.total;
        requests = requests + 1;

        if (requests === elemsWithBytes.length) {
          if (max > -1 && max > totalBytes && min < totalBytes) {
            inSizeRange = true;
          } else if (max === -1 && min < totalBytes) {
            inSizeRange = true;
          }
          console.log('%c Total images size: ' + (totalBytes/1000000).toFixed(2) + 'MB', 'font-weight: bold');
          if (inSizeRange) {
            window.dispatchEvent(new CustomEvent('ud-bytes-in-range', {'detail': 'passed'}));
          }
        }
      }
    }

    function sendreq(url, evt) {  
      // TODO: better error handling
      try {
        var req = new XMLHttpRequest();     
        req.open('GET', url, true);
        req.onloadend = fireLoadEvent;
        req.onerror = function() {
          console.log('something?');
        }
        req.send();
      } catch (e) {
        console.log(e);
        throw new Error("If you're seeing this error, you might need to serve the site through localhost.")
      }
    }

    elemsWithBytes.forEach(function(elem) {
      try {
        var url = elem.currentSrc || elem.src || elem.href;
        if (url.search(location.host) > -1) { sendreq(url); }
      } catch (e) {
        throw new Error("Download failed: " + url);
      }
    });
  }

  collectPageSize();
})();