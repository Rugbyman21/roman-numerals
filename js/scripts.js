var romanNumerals = function(number) {
  var symbols = {1: "I",
                 5: "V",
                 10: "X",
                 50: "L",
                 100: "C",
                 500: "D",
                 1000: "M"
                };

  var result = [];
  var total = 0;
  var keyValue;
  var remainder = 0;

  var counter;

  // var value1 = Math.floor(number/50);
  // if ( value != 0) {
  //   while (total < (value * 50)) {
  //     if((value * 50) == 90) {
  //       total = total + 90;
  //       result.push('X','C');
  //     }
  //     else if((value * 50) == 50) {
  //       total = total + 90;
  //       result.push('L');
  //     }
  //     else if((value * 10) == 90) {
  //       total = total + 90;
  //       result.push('X','C');
  //     }
  //     else {
  //       total = total + 10;
  //       result.push('X');
  //     }
  //   }
  //   remainder = number - total;
  // }
  // else {
  //   remainder = number;
  // }

  var value = Math.floor(number/10);
  if ( value != 0) {
    var tensValue = value * 10;
    remainder = tensValue;

    while (total < tensValue) {
      if (value == 4) {
        total = 40;
        result.push('X','L');
        remainder = tensValue - total;
      }

      if (value == 9) {
        total = 90;
        result.push('X','C');
        remainder = tensValue - total;
      }

      for(counter = 6; counter >= 0; counter--) {
        keyValue = Object.keys(symbols)[counter];
        if( keyValue <= remainder) {
          total = total + parseInt(keyValue);

          result.push(symbols[keyValue]);
          remainder = tensValue - total;
          break;
        }
      }
    }
    remainder = number - total;
  }
  else {
    remainder = number;
  }

  // if (remainder != 4 && remainder != 9) {
  //   for(counter = 6; counter >= 0; counter--) {
  //     keyValue = Object.keys(symbols)[counter];
  //
  //     if( keyValue < remainder ) {
  //       total = total + parseInt(keyValue);
  //       result.push(symbols[keyValue]);
  //       break;
  //     }
  //   }
  // }
//in a varible = add the original number(ex. 4) + 1 push a keyvalue of that new number (ex 5 "V").
//then in a new varible = minus the new number to the original number push the keyvalue (ex. 1 "I") .

  total = 0;
  while (total < remainder) {
    if (remainder === 4) {
      result.push('I');
      total = (remainder + 1);
      result.push('V');
    }
    else if (remainder === 5) {
      total = remainder + 5;
      result.push('V');
    }
    else if (remainder === 9) {
      result.push('I');
      total = (remainder + 1);
      result.push('X');
    }
    else {
      total = total + (1);
      result.push(symbols[1]);
    }
  };

  return result.join('');

};
