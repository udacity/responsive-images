var suites = [
  {
    name: "Project Part 1",
    code: "ready!set!responsiveimages!",
    tests: [
      {
        func: "testDOMelemCSS",
        params: [
          {
            selector: "article img",
            property: "max-width",
            value: "100%"
          }
        ],
        desc: "&lt;img&gt;s have max-widths of 100%"
      },
      {
        func: "testDOMelemCSS",
        params: [
          {
            selector: "article",
            property: "width",
            value: "600-1200px"
          }
        ],
        desc: "&lt;article&gt;s are reasonably wide (600-1200px)" // descriptions must be unique
      },
      {
        func: "testPageSizeMinimumLocal",
        async: true,
        noRepeat: true, // not necessary. leaving this here to show that it's possible. all async tests are automatically noRepeat
        showCurrent: true, // currently only works with async tests
        params: [
          {
            maxSize: 1500000 // in bytes
          }
        ],
        desc: "Page bytes are under 1.5MB (refresh to update)"
      }
    ]
  },
  {
    name: "Project Part 2",
    code: "markupisprettyawesome",
    tests: [
      {
        func: "testDOMelemDoesntExist",
        params: [
          {
            selector: "img[src='images/smiley_face.png']"
          }
        ],
        desc: "smiley_face.png is gone"
      },
      {
        func: "testFindStringInDocument",
        params: [
          {
            stringOpts: ["☺", "&#9786;"] // looking for one of these
          }
        ],
        desc: "Smiley face is unicode"
      },
      {
        func: "testMetaTagContent",
        params: [
          {
            attr: "charset",
            value: "utf-8"
          }
        ],
        desc: "&lt;meta&gt; has charset set to utf-8"
      },
      {
        func: "testDOMelemDoesntExist",
        params: [
          {
            selector: "img[src='images/flourish.png']" // looking for one of these
          }
        ],
        desc: "Flourish is gone"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["twitter"]
          }
        ],
        desc: "A Twitter font icon is on the page"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["digg"]
          }
        ],
        desc: "A Digg font icon is on the page"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["facebook"]
          }
        ],
        desc: "A Facebook font icon is on the page"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["google"]
          }
        ],
        desc: "A Google+ font icon is on the page"
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}