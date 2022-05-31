/**
 * Assignment 0
 *
 * This assignment is a giveaway assignment.
 * By completing this assignment, you will familiarize yourself with this
 *  course's submission mechanics.
 */

/**
 * Item 1.
 * Three Number Average. 3 points.
 *
 * Returns the average of three numbers.
 *
 * @param {number} x - the first number
 * @param {number} y - the second number
 * @param {number} z - the third number
 * @returns {number} - the average of x, y, and z.
 */
function threeNumberAverage(x, y, z) {
    // Write your code below this line
    var  a = 0;
    a = x + y + z;
    a /= 3;
    return a;
}

console.log (threeNumberAverage(8,9,10))
