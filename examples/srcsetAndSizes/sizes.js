var suites = [
  {
    name: "srcset and sizes",
    code: "sizedupthecompetition",
    tests: [
      {
        func: "testDOMelemCount",
        repeat: true,
        params: [
          {
            selector: "img.w",
            count: 1
          }
        ],
        desc: "Coffee image (with class 'w') is on the page."
      },
      {
        func: "testDOMelemAttrContent",
        params: [
          {
            selector: "img.w",
            attr: "srcset",
            values: [
              "images/Coffee_1280w.jpg 1280w, images/Coffee_640w.jpg 640w",
              "images/Coffee_640w.jpg 640w, images/Coffee_1280w.jpg 1280w"
            ]
          }
        ],
        desc: "Both coffee image files are identified with srcset."
      },
      {
        func: "testDOMelemAttrContent",
        params: [
          {
            selector: "img.w",
            attr: "sizes",
            values: [
              "(max-width: 960px) 50vw, 100vw",
              "(max-width: 960px) 50vw",
              "(max-width: 960px) 50vw, (min-width: 961px) 100vw",
              "(min-width: 961px) 100vw, (max-width: 960px) 50vw"
            ]
          }
        ],
        desc: "The browser knows the image's media queries using sizes."
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}