var suites = [
  {
    name: "Lesson 2",
    code: "ready!set!blog!",
    tests: [
      {
        func: "testDOMelemCSS",
        params: [
          {
            selector: "img",
            property: "max-width",
            value: "100%"
          }
        ],
        desc: "&lt;img&gt;s have max-width of 100%"
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
        desc: "&lt;articles&gt; are reasonably wide (600-1200px)" // descriptions must be unique
      }
      // {
      //   func: "testPageSizeLocal",
      //   params: [
      //     {
      //       maxSize: 1500000 // in bytes
      //     }
      //   ],
      //   desc: "Page bytes are under 1.5MB"
      // }
    ]
  },
  {
    name: "Lesson 3",
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
        func: "testFindStringInHTML",
        params: [
          {
            stringOpts: ["☺", "&#9786;"] // looking for one of these
          }
        ],
        desc: "Smiley face is unicode (you may need to reload the page)"
      },
      {
        func: "testDOMelemDoesntExist",
        params: [
          {
            selector: "img[src='images/flourish.png']" // looking for one of these
          }
        ],
        desc: "Flourish is gone"
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}