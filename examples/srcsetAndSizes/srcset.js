var suites = [
  {
    name: "srcset",
    code: "setupyoursources",
    tests: [
      {
        func: "testDOMelemAttrContent",
        params: [
          {
            selector: "img.srcset",
            attr: "srcset",
            values: [
              "images/Den_Haag_2x.jpg 2x, images/Den_Haag_1x.jpg 1x",
              "images/Den_Haag_1x.jpg 1x, images/Den_Haag_2x.jpg 2x",
            ]
          }
        ],
        desc: "&lt;img&gt;s are using correct srcset"
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}