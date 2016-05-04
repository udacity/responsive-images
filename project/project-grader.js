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
      ':not(picture) > [src]:not(script)',
      '[href]:not(a):not(link)'
    ];

    imgSelectors.forEach(function(img) {
      var elems = getNodes(img);
      elemsWithBytes = elemsWithBytes.concat(elems);
    })
    
    // get picture elems current srcs too
    var pictures = getNodes('picture > img');
    pictures.forEach(function(picture) {
      elemsWithBytes = elemsWithBytes.concat(picture);
    })

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
        req.send();
      } catch (e) {
        console.log(e);
        throw new Error("If you're seeing this error, you might need to serve the site through localhost.")
      }
    }

    elemsWithBytes.forEach(function(elem) {
      try {
        var url = elem.currentSrc || elem.src || elem.href;
        // TODO: smarter way of handling CORS
        // this just checks the host
        if (url.search(location.host) > -1) { sendreq(url); }
      } catch (e) {
        throw new Error("Download failed: " + url);
      }
    });
  }

  collectPageSize();
})();