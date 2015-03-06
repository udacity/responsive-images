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
      },
      {
        func: "testPageSize",
        params: [
          {
            maxSize: 1500000 // in bytes
          }
        ],
        desc: "Page bytes are under 1.5MB"
      }
    ]
  },
  {
    name: "Lesson 3",
    code: "myrelativesareskinny",
    tests: [
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "img",
            count: 9
          }
        ],
        desc: "There are three images 3"
      }
    ]
  },
  {
    name: "Lesson 4",
    code: "myrelativesareaverage",
    tests: [
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "img",
            count: 10
          }
        ],
        desc: "There are three images 3"
      },
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "img",
            count: 10
          }
        ],
        desc: "There are three images 3"
      },
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "img",
            count: 10
          }
        ],
        desc: "There are three images 3"
      },
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "img",
            count: 9
          }
        ],
        desc: "There are three images 3"
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}