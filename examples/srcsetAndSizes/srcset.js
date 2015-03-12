var suites = [
  {
    name: "Project Part 1",
    code: "",
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
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}