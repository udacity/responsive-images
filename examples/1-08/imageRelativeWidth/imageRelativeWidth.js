var tests = [
  {
    test: "testDOMelemCount",
    params: [
      {
        selector: "img",
        count: 3
      }
    ],
    desc: "There are three images"
  },
  {
    test: "testDOMelemsHorizontalSeparation",
    params: [
      {
        leftElemSelector: "#img1",
        rightElemSelector: "#img2",
        width: 10 // must be px for now
      }
    ],
    desc: "There are 10px between #img1 and #img2"
  },
  {
    test: "testDOMelemsHorizontalSeparation",
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
    test: "testDOMelemAbsolutePosition",
    params: [
      {
        selector: "#img1",
        left: 0 // must be px for now
      }
    ],
    desc: "Left image is flush against viewport"
  },
  {
    test: "testDOMelemAbsolutePosition",
    params: [
      {
        selector: "#img3",
        right: "max" // "max" is useful for right and bottom
      }
    ],
    desc: "Right image is flush against viewport"
  }
]

var grader = new UdaciTests("Relative Width Quiz", tests, "myrelativesarewide", 1000);

window.onload = function() {
  grader.runGradeLoop();
}