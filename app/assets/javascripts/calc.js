// SUPER IMPORTANT
$(document).ready(function() {
  var leftHand, op, rightHand;
  var result = 0;
  var resultString = '';

  var $numButtons = $('.num-btn');
  var $opButtons = $('.op-btn');
  var $eqButton = $('#eq-btn');
  var $calcScreen = $('#screen');
  var $clear = $('#clr-btn')

  function setScreen(result) {
    if (result === undefined) {
      $calcScreen.text(leftHand + ' ' + op + ' ' + rightHand);
    } else {
      $calcScreen.text(result);
    }
  }

  $opButtons.click(function () {
    $opButtons.removeClass('red-border');

    if(!leftHand) {
      alert('Choose a number first!');
      $numButtons.addClass('red-border');
    } else {
      op = $(this).text();
    }

    setScreen();
  });

  $numButtons.click(function() {
    $numButtons.removeClass('red-border');

    var buttonText = $(this).text();

    if(!leftHand) {
      if(buttonText === '.') {
        leftHand = '0.';
      } else {
        leftHand = buttonText;
      }
    } else if (leftHand && !op) {
      leftHand += buttonText;
    } else if (leftHand && op && !rightHand) {
      if(op === '/' && buttonText === '0') {
        alert("You can't divide by zero!")
      } else {
        if(buttonText === '.') {
          rightHand = '0.';
        } else {
          rightHand = buttonText;
        }
      }
    } else if (leftHand && op && rightHand) {
      rightHand += buttonText;
    }

    setScreen();
  });


  $eqButton.click(function () {
    if(leftHand && op && rightHand){

      leftHand = parseFloat(leftHand.trim());
      rightHand = parseFloat(rightHand.trim());

      switch(op.trim()) {
        case '+':
          result = leftHand + rightHand;
          break;
        case '-':
          result = leftHand - rightHand;
          break;
        case '*':
          result = leftHand * rightHand;
          break;
        case '/':
          result = leftHand / rightHand;
          break;
      }
      setScreen(result);
    } else {
      alert('Equation not complete!');
      if(!leftHand) {
        $numButtons.addClass('red-border');
      } else if(leftHand && !op) {
        $opButtons.addClass('red-border');
      } else if(leftHand && op && !rightHand) {
        $numButtons.addClass('red-border');
      }
    }
  });

  $clear.click(function() {
    leftHand = undefined;
    op = undefined;
    rightHand = undefined;
    result = 0;
    resultString = '';
    setScreen(result);
  });

});
