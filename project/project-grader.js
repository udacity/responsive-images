var suites = [
  {
    name: "Project Part 1",
    code: "ready!set!responsiveimages!",
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
      },
      {
        func: "testDOMelemCSS",
        repeat: true,
        params: [
          {
            selector: "article",
            property: "width",
            value: "600-1200px"
          }
        ],
        desc: "&lt;article&gt;s are reasonably wide (600-1200px)" // descriptions must be unique
      },
      {
        func: "testPageSizeMinimumLocal",
        async: true,
        noRepeat: true, // not necessary. leaving this here to show that it's possible. all async tests are automatically noRepeat
        showCurrent: true, // currently only works with async tests
        params: [
          {
            maxSize: 1500000 // in bytes
          }
        ],
        desc: "Page bytes are under 1.5MB (refresh to update)"
      }
    ]
  },
  {
    name: "Project Part 2",
    code: "markupisprettyawesome",
    tests: [
      {
        func: "testDOMelemDoesntExist",
        params: [
          {
            selector: "img[src='images/smiley_face.png']"
          }
        ],
        desc: "smiley_face.png is gone"
      },
      {
        func: "testFindStringInDocument",
        params: [
          {
            stringOpts: [ "☺", "&#9786;",
                          "☹", "&#2639;",
                          "☻", "&#9787;",
                          "😀", "&#128512;",
                          "😁", "&#128513;",
                          "😂", "&#128514;",
                          "😃", "&#128515;",
                          "😄", "&#128516;",
                          "😅", "&#128517;",
                          "😆", "&#128518;",
                          "😇", "&#128519;",
                          "😈", "&#128520;",
                          "😉", "&#128521;",
                          "😊", "&#128522;",
                          "😋", "&#128523;",
                          "😌", "&#128524;",
                          "😍", "&#128525;",
                          "😎", "&#128526;",
                          "😏", "&#128527;",
                          "😐", "&#128528;",
                          "😑", "&#128529;",
                          "😒", "&#128530;",
                          "😓", "&#128531;",
                          "😔", "&#128532;",
                          "😕", "&#128533;",
                          "😖", "&#128534;",
                          "😗", "&#128535;",
                          "😘", "&#128536;",
                          "😙", "&#128537;",
                          "😚", "&#128538;",
                          "😛", "&#128539;",
                          "😜", "&#128540;",
                          "😝", "&#128541;",
                          "😞", "&#128542;",
                          "😟", "&#128543;",
                          "😠", "&#128544;",
                          "😡", "&#128545;",
                          "😢", "&#128546;",
                          "😣", "&#128547;",
                          "😤", "&#128548;",
                          "😥", "&#128549;",
                          "😦", "&#128550;",
                          "😧", "&#128551;",
                          "😨", "&#128552;",
                          "😩", "&#128553;",
                          "😪", "&#128554;",
                          "😫", "&#128555;",
                          "😬", "&#128556;",
                          "😭", "&#128557;",
                          "😮", "&#128558;",
                          "😯", "&#128559;",
                          "😰", "&#128560;",
                          "😱", "&#128561;",
                          "😲", "&#128562;",
                          "😳", "&#128563;",
                          "😴", "&#128564;",
                          "😵", "&#128565;",
                          "😶", "&#128566;",
                          "😷", "&#128567;",
                          "😸", "&#128568;",
                          "😹", "&#128569;",
                          "😺", "&#128570;",
                          "😻", "&#128571;",
                          "😼", "&#128572;",
                          "😽", "&#128573;",
                          "😾", "&#128574;",
                          "😿", "&#128575;",
                          "🙀", "&#128576;"
                        ]
          }
        ],
        desc: "Smiley face is unicode"
      },
      {
        func: "testMetaTagContent",
        params: [
          {
            attr: "charset",
            value: "utf-8"
          }
        ],
        desc: "&lt;meta&gt; has charset set to utf-8"
      },
      {
        func: "testDOMelemDoesntExist",
        params: [
          {
            selector: "img[src='images/flourish.png']" // looking for one of these
          }
        ],
        desc: "Flourish is gone"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["twitter"]
          }
        ],
        desc: "A Twitter font icon is on the page"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["digg"]
          }
        ],
        desc: "A Digg font icon is on the page"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["facebook"]
          }
        ],
        desc: "A Facebook font icon is on the page"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["google"]
          }
        ],
        desc: "A Google+ font icon is on the page"
      }
    ]
  },
  {
    name: "Project Part 3",
    code: "allthepictures,allthetime",
    tests: [
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "picture",
            count: 8
          }
        ],
        desc: "There are 8 &lt;picture&gt;s on the page"
      },
      {
        func: "testDOMelemsCounts",
        params: [
          {
            parentSelector: "picture",
            childSelector: "source",
            count: 2
          }
        ],
        desc: "There are 2 &lt;sources&gt;s per &lt;picture&gt;"
      },
      {
        func: "testDOMelemsCounts",
        params: [
          {
            parentSelector: "picture",
            childSelector: "img",
            count: 1
          }
        ],
        desc: "There is 1 &lt;img&gt; per &lt;picture&gt;"
      },
      {
        func: "testDOMelemsChildPosition",
        params: [
          {
            parentSelector: "picture",
            childSelector: "img",
            position: -1
          }
        ],
        desc: "&lt;img&gt; is last child of all &lt;picture&gt;s"
      },
      {
        func: "testDOMelemsAttrContent",
        params: [
          {
            selector: "img",
            attr: "alt"
          }
        ],
        desc: "Every &lt;img&gt; has an alt attribute"
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}