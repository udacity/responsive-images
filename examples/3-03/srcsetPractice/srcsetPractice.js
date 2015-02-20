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
        values: [ // can be any one of these
          "images/silicon_valley_1x.jpg 1x, images/silicon_valley_2x.jpg 2x",
          "images/silicon_valley_1x.jpg, images/silicon_valley_2x.jpg 2x"
        ]
      }
    ],
    desc: "srcset links to the correct files"
  }
]

var grader = new UdaciTests("srcset Practice", tests, "setasourceinthiscourse", 1000);

window.onload = function() {
  grader.runGradeLoop();
}