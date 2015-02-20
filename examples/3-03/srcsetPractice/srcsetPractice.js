var tests = [
  {
    test: "testDOMelemAttrExists",
    params: [
      {
        selector: ".photo",
        attr: "srcset"
      }
    ],
    desc: ".photo is using srcset"
  },
  {
    test: "testDOMelemAttrContent",
    params: [
      {
        selector: ".photo",
        attr: "srcset",
        value: "images/silicon_valley_1x.jpg 1x, images/silicon_valley_2x.jpg 2x"
      }
    ],
    desc: ".photo is using srcset"
  }
]

var grader = new UdaciTests("Relative Width Quiz", tests, "setasourceinthiscourse", 1000);

window.onload = function() {
  grader.runGradeLoop();
}