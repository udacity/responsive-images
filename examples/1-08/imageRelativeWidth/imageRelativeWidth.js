var suites = [
  {
    name: "calc() Quiz",
    code: "myrelativesarewide",
    tests: [
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "img",
            count: 3
          }
        ],
        desc: "There are three images"
      },
      {
        func: "testDOMelemsHorizontalSeparation",
        params: [
          {
            leftElemSelector: "#img1",
            rightElemSelector: "#img2",
            distance: 10 // must be px for now
          }
        ],
        desc: "There are 10px between #img1 and #img2"
      },
      {
        func: "testDOMelemsHorizontalSeparation",
        params: [
          {
            leftElemSelector: "#img2",
            rightElemSelector: "#img3",
            distance: 10 // must be px for now
          }
        ],
        desc: "There are 10px between #img2 and #img3"
      },
      {
        func: "testDOMelemAbsolutePosition",
        params: [
          {
            selector: "#img1",
            left: 0 // must be px for now
          }
        ],
        desc: "Left image is flush against viewport"
      },
      {
        func: "testDOMelemAbsolutePosition",
        params: [
          {
            selector: "#img3",
            right: "max" // "max" is useful for right and bottom
          }
        ],
        desc: "Right image is flush against viewport"
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}