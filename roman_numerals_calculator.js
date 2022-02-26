function convertToRoman(num) {
  let number = num.toString();
  let arr = number.split("");

  let roman = "";
  let thousands = "";
  let hundreds = "";
  let tens = "";
  let ones = "";
  if (arr.length === 4) {
    switch (arr[0]) {
      case "1":
        thousands = "M";
        break;
      case "2":
        thousands = "MM";
        break;
      case "3":
        thousands = "MMM";
        break;
      case "4":
        thousands = "MMMM";
        break;
      case "5":
        thousands = "V";
    }
    switch (arr[1]) {
      case "0":
        hundreds = "";
        break;
      case "1":
        hundreds = "C";
        break;
      case "2":
        hundreds = "CC";
        break;
      case "3":
        hundreds = "CCC";
        break;
      case "4":
        hundreds = "CD";
        break;
      case "5":
        hundreds = "D";
        break;
      case "6":
        hundreds = "DC";
        break;
      case "7":
        hundreds = "DCC";
        break;
      case "8":
        hundreds = "DCCC";
        break;
      case "9":
        hundreds = "CM";
    }
    switch (arr[2]) {
      case "0":
        tens = "";
        break;
      case "1":
        tens = "X";
        break;
      case "2":
        tens = "XX";
        break;
      case "3":
        tens = "XXX";
        break;
      case "4":
        tens = "XL";
        break;
      case "5":
        tens = "L";
        break;
      case "6":
        tens = "LX";
        break;
      case "7":
        tens = "LXX";
        break;
      case "8":
        tens = "LXXX";
        break;
      case "9":
        tens = "XC";
    }
    switch (arr[3]) {
      case "0":
        ones = "";
        break;
      case "1":
        ones = "I";
        break;
      case "2":
        ones = "II";
        break;
      case "3":
        ones = "III";
        break;
      case "4":
        ones = "IV";
        break;
      case "5":
        ones = "V";
        break;
      case "6":
        ones = "VI";
        break;
      case "7":
        ones = "VII";
        break;
      case "8":
        ones = "VIII";
        break;
      case "9":
        ones = "IX";
    }
    roman = thousands + hundreds + tens + ones;
  } else if (arr.length === 3) {
    switch (arr[0]) {
      case "1":
        hundreds = "C";
        break;
      case "2":
        hundreds = "CC";
        break;
      case "3":
        hundreds = "CCC";
        break;
      case "4":
        hundreds = "CD";
        break;
      case "5":
        hundreds = "D";
        break;
      case "6":
        hundreds = "DC";
        break;
      case "7":
        hundreds = "DCC";
        break;
      case "8":
        hundreds = "DCCC";
        break;
      case "9":
        hundreds = "MX";
    }
    switch (arr[1]) {
      case "0":
        tens = "";
        break;
      case "1":
        tens = "X";
        break;
      case "2":
        tens = "XX";
        break;
      case "3":
        tens = "XXX";
        break;
      case "4":
        tens = "XL";
        break;
      case "5":
        tens = "L";
        break;
      case "6":
        tens = "LX";
        break;
      case "7":
        tens = "LXX";
        break;
      case "8":
        tens = "LXXX";
        break;
      case "9":
        tens = "XC";
    }
    switch (arr[2]) {
      case "0":
        ones = "";
        break;
      case "1":
        ones = "I";
        break;
      case "2":
        ones = "II";
        break;
      case "3":
        ones = "III";
        break;
      case "4":
        ones = "IV";
        break;
      case "5":
        ones = "V";
        break;
      case "6":
        ones = "VI";
        break;
      case "7":
        ones = "VII";
        break;
      case "8":
        ones = "VIII";
        break;
      case "9":
        ones = "IX";
    }
    roman = hundreds + tens + ones;
  } else if (arr.length === 2) {
    switch (arr[0]) {
      case "1":
        tens = "X";
        break;
      case "2":
        tens = "XX";
        break;
      case "3":
        tens = "XXX";
        break;
      case "4":
        tens = "XL";
        break;
      case "5":
        tens = "L";
        break;
      case "6":
        tens = "LX";
        break;
      case "7":
        tens = "LXX";
        break;
      case "8":
        tens = "LXXX";
        break;
      case "9":
        tens = "XC";
    }
    switch (arr[1]) {
      case "0":
        ones = "";
        break;
      case "1":
        ones = "I";
        break;
      case "2":
        ones = "II";
        break;
      case "3":
        ones = "III";
        break;
      case "4":
        ones = "IV";
        break;
      case "5":
        ones = "V";
        break;
      case "6":
        ones = "VI";
        break;
      case "7":
        ones = "VII";
        break;
      case "8":
        ones = "VIII";
        break;
      case "9":
        ones = "IX";
    }
    roman = tens + ones;
  } else if (arr.length === 1) {
    switch (arr[0]) {
      case "1":
        ones = "I";
        break;
      case "2":
        ones = "II";
        break;
      case "3":
        ones = "III";
        break;
      case "4":
        ones = "IV";
        break;
      case "5":
        ones = "V";
        break;
      case "6":
        ones = "VI";
        break;
      case "7":
        ones = "VII";
        break;
      case "8":
        ones = "VIII";
        break;
      case "9":
        ones = "IX";
        break;
    }
    roman = ones;
  }
  //   console.log(arr);
  //   console.log(arr.length);
  // console.log(arr[0]);
  console.log(roman);
}

convertToRoman(5000);
