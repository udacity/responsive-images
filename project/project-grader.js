var suites = [
  {
    name: "Lesson 2",
    tests: [
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "img",
            count: 3
          }
        ],
        desc: "There are three images 1"
      },
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "img",
            count: 3
          }
        ],
        desc: "There are three images 2"
      }
    ]
  },
  {
    name: "Lesson 3",
    tests: [
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "img",
            count: 3
          }
        ],
        desc: "There are three images 3"
      }
    ]
  }
]

var graderProperties = {
  suites: suites,
  code: "myrelativesarewide"
}