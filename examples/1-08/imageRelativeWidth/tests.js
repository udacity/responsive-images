(function(window) {
  var tests = [];

  var test1 = function() {
    var _isCorrect = false;

    var elem1 = document.querySelector('#img1');
    var rect = elem1.getBoundingClientRect();
    var e1RightSide = rect.right;

    var elem2 = document.querySelector('#img2');
    var rect = elem2.getBoundingClientRect();
    var e2LeftSide = rect.left;

    if (e2LeftSide - e1RightSide === 10) {
      _isCorrect = true;
      window.dispatchEvent(new CustomEvent('ud-btwn-1-2', {'detail': 'passed'}));
    }

    return _isCorrect;
  };

  var test2 = function() {
    var _isCorrect = false;

    var elem2 = document.querySelector('#img2');
    var rect = elem2.getBoundingClientRect();
    var e2RightSide = rect.right;

    var elem3 = document.querySelector('#img3');
    var rect = elem3.getBoundingClientRect();
    var e3LeftSide = rect.left;

    if (e3LeftSide - e2RightSide === 10) {
      _isCorrect = true;
      window.dispatchEvent(new CustomEvent('ud-btwn-2-3', {'detail': 'passed'}));
    }

    return _isCorrect;
  };

  tests.push(test1);
  tests.push(test2);

  var isCorrect = false;

  function executeTests() {
    var isCorrect = false;

    tests.forEach(function(test, index) {
      var testCorrect = test();
      if (index === 0) {
        isCorrect = testCorrect;
      } else {
        isCorrect = isCorrect && testCorrect;
      }
      if (testCorrect) {
        // to prevent unnecessary event firings
        test = function() {};
      }
    });

    return isCorrect;
  }

  isCorrect = executeTests();

  var interval = window.setInterval(function() {
    if (!isCorrect) {
      isCorrect = executeTests();
    } else {
      window.clearInterval(interval);
    }
  }, 1000);
})(window);
