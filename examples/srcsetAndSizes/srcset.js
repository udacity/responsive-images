var suites = [
  {
    name: "srcset",
    code: "setupyoursources",
    tests: [
      {
        func: "testDOMelemCount",
        repeat: true,
        params: [
          {
            selector: "img.dpi",
            count: 1
          }
        ],
        desc: "Den Haag skyline image (with class 'dpi') is on the page."
      },
      {
        func: "testDOMelemAttrContent",
        params: [
          {
            selector: "img.dpi",
            attr: "srcset",
            values: [
              "images/Den_Haag_2x.jpg 2x, images/Den_Haag_1x.jpg 1x",
              "images/Den_Haag_1x.jpg 1x, images/Den_Haag_2x.jpg 2x",
              "images/Den_Haag_2x.jpg 2x, images/Den_Haag_1x.jpg",
              "images/Den_Haag_1x.jpg, images/Den_Haag_2x.jpg 2x"
            ]
          }
        ],
        desc: "Den Haag skyline reacts to device pixel ratio."
      },
      {
        func: "testDOMelemCount",
        repeat: true,
        params: [
          {
            selector: "img.w",
            count: 1
          }
        ],
        desc: "The Australia image (with class 'w') is on the page."
      },
      {
        func: "testDOMelemAttrContent",
        params: [
          {
            selector: "img.w",
            attr: "srcset",
            values: [
              "images/Australia_1280w.jpg 1280w, images/Australia_640w.jpg 640w",
              "images/Australia_640w.jpg 640w, images/Australia_1280w.jpg 1280w",
            ]
          }
        ],
        desc: "Australia reacts to screen width."
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}