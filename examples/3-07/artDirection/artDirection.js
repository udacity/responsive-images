var tests = [
  {
    test: "testDOMelemCount",
    params: [
      {
        selector: "picture",
        count: 3
      }
    ],
    desc: "There are 3 picture elements"
  },
  {
    test: "testDOMelemAttrApproxContent",
    params: [
      {
        selector: "source",
        attrs: ["srcset"],
        values: [
          "nashville"
        ]
      }
    ],
    desc: "There's a Nashville picture element set with srcset"
  },
  {
    test: "testDOMelemAttrApproxContent",
    params: [
      {
        selector: "source",
        attrs: ["srcset"],
        values: [
          "wrigley_field"
        ]
      }
    ],
    desc: "There's a Wrigley Field picture element set with srcset"
  },
  {
    test: "testDOMelemAttrApproxContent",
    params: [
      {
        selector: "source",
        attrs: ["srcset"],
        values: [
          "astronaut"
        ]
      }
    ],
    desc: "There's an astronaut picture element set with srcset"
  },
  {
    test: "testDOMelemsCounts",
    params: [
      {
        parentSelector: "picture",
        childSelector: "source",
        count: 2
      }
    ],
    desc: "There are 2 source elements for each picture element"
  },
  {
    test: "testPictureMediaQueries",
    params: [
      {
        fileStart: "nashville",
        queries: [
          "width: 499px",
          "width: 600px",
          "width: 751px"
        ]
      }
    ],
    desc: "Nashville is responsive"
  }
]

var grader = new UdaciTests("Art Direction Practice", tests, "idirectart", 1000);

window.onload = function() {
  grader.runGradeLoop();
}