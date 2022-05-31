/**
 * Assignment 1
 *
 * This assignment covers your basic proficiency with Javascript.
 *  It engages your ability to transform data without affecting
 *  anything outside the program.
 *
 * This assignment places heavy emphasis on basic Javascript constructs.
 */


/**
 * Item 1.
 * Factorial. 1 point.
 *
 * Returns the factorial of an integer.
 * An integer's factorial is the product of the integer and all integers below it.
 *
 * @param {number} x - the integer whose factorial to return
 * @returns {number} - the factorial of x
 */

function factorial(x) {
// Write your code below this line
  var y = x
  while (x > 1) {
    x -= 1 ;
    y *= x;
  }
  return y;
}
  console.log (factorial(3))

  /**
   * Item 2.
   * Classify Grade. 2 points.
   *
   * Returns the letter grade equivalent of a number grade.
   * For this item, use these letter grade buckets:
   *  A: 92-100
   *  B+: 86-91.9
   *  B: 80-85.9
   *  C+: 74-79.9
   *  C: 67-73.9
   *  D: 60-66.9
   *  F: 0-59.9
   *
   * @param {number} numberGrade - the number grade to convert into a letter grade
   * @returns {string} - the letter grade equivalent of the number grade
   */
  function classifyGrade(numberGrade) {
    var grade = "";
    switch (true) {
      case (numberGrade >= 92):
      grade = "A";
      break
      case (numberGrade >=86):
      grade = "B+";
      break
      case (numberGrade >= 80):
      grade = "B";
      break
      case (numberGrade >= 74):
      grade = "C+";
      break
      case (numberGrade >= 67):
      grade = "C";
      break
      case (numberGrade >= 60):
      grade = "D";
      break
      case (numberGrade >= 0):
      grade = "F";
      break

    }
    return grade
      // Write your code below this line
  }

  console.log (classifyGrade(59))

  /**
   * Item 3.
   * Average Weight. 3 points.
   *
   * You have purchased two bags of items.
   * The first bag contains one type of item, and the second bag contains another type.
   * Return the weighted average weight of the items.
   *
   * @param {number} itemQuantity1 - the quantity of items in the first bag
   * @param {number} itemWeight1 - the weight of the individual items in the first bag
   * @param {number} itemQuantity2 - the quantity of items in the second bag
   * @param {number} itemWeight2 - the weight of the individual items in the second bag
   * @returns {number} - the weighted average weight of one item
   */
  function averageWeight(itemQuantity1, itemWeight1, itemQuantity2, itemWeight2) {
      // Write your code below this line
      var sumOfQuant = itemQuantity1 + itemQuantity2;
      var item1 = itemQuantity1 * itemWeight1;
      var item2 = itemQuantity2 * itemWeight2;
      var totalWeight = item1 + item2;
      var weightedAverage =  totalWeight / sumOfQuant

      return weightedAverage
  }

  console.log (averageWeight(3,10,4,8))
  /**
   * Item 4.
   * String Sum. 3 points.
   *
   * Returns the sum of the digits provided in a string.
   * For this item:
   *  1. Sum the digits contained in the string.
   *  2. Ignore any non-digit characters contained in the string.
   *
   * @param {string} string - a string that can contain any character
   * @returns {number} - the sum of the digits contained in the string
   */

  function stringSum(string) {
    var myArray = string.split("");
    var a = string.length;
    a -= 1;
    var answer = 0;

    while (a >= 0) {
    var b = parseInt(myArray[a])
      if (isNaN(b)) {
        a -= 1;
      } else {
        answer += b;
        a -= 1;
    }
    }
    return "the answer is " + answer
  }
  console.log (stringSum("what is the sum of 2 and 5?"))


  /**
   * Item 5.
   * Distance. 3 points.
   *
   * Returns the distance between two points.
   * To get the distance between two points:
   *  1. Get the difference between the two x-coordinates
   *  2. Get the difference between the two y-coordinates
   *  3. Sum the previous two values
   *  4. Return the square root of the sum
   *
   * You may want to use the built-in Math.sqrt() function.
   *
   * @param {number} x1 - the first x-coordinate
   * @param {number} y1 - the first y-coordinate
   * @param {number} x2 - the second x-coordinate
   * @param {number} y2 - the second y-coordinate
   * @returns {number} - the distance between the two coordinates
   */
  function distance(x1, y1, x2, y2) {
      // Write your code below this line
      var distance = 0;
      var xDistance = 0;
      var yDistance = 0;
      xDistance = (x1-x2)**2;
      yDistance = (y1-y2)**2;
      distance = xDistance + yDistance;
      distance = Math.sqrt(distance);
      return distance;
  }

  console.log (distance(3,2,-3,2))


  /**
   * Item 6.
   * Make Change. 5 points.
   *
   * Return the combination of coins needed to make change for the given amount,
   *  which is given in centavos.
   * For this item:
   *  1. You can return 1 peso, 25 centavos, 10 centavos, 5 centavos, and 1 centavo coins.
   *  2. Use the minimum number of coins possible.
   *
   * @param {number} amount - the amount, in centavos, to make change for.
   * @returns {string} - the string representation of the change to be given.
   *  Format it like this: `1P:${amount}/25C:${amount}/10C:${amount}/5C:${amount}/1C:${amount}`
   */
   function makeChange(amount) {
     // Write your code below this line
     var change = "";
     var remain = 0;
     var amountOne = 0;
     var amountTwoFive = 0;
     var amountTenC = 0;
     var amountFiveC = 0;
     var amountOneC = 0;
     if (amount > 0) {
       amountOne = Math.floor(amount/1);
       amount = amount % 1;
       amountTwoFive = Math.floor(amount/0.25);
       amount = amount % 0.25;
       amountTenC = Math.floor(amount/0.10);
       amount = amount % 0.10;
       amountFiveC = Math.floor(amount/0.05);
       amount = amount % 0.05;
       amount = amount.toFixed(2);
       amountOneC = Math.floor(amount/0.01);
       amount = amount % 0.01;
     }
     change = `1P:${amountOne}/25C:${amountTwoFive}/10C:${amountTenC}/5C:${amountFiveC}/1C:${amountOneC}`
     return change
   }

   console.log (makeChange(10.41))
