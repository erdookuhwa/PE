/*
Multiples of 3 and 5
Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. 
*/

function sumOfMultiples() {

    // 1. Find all multiples of number (x or y) below number
    function findMultiples(x, y, number) {
        // check input -> x, y, and number cannot be < 0
        if (x < 0 || y < 0 || number < 0) {
            return 'Enter valid natural numbers'
        }
        // if x, y, or number = 0, all multiples of 0 = 0
        if (x === 0 || y === 0 || number === 0) {
            return 0
        }

        // make array to hold multiples
        let multiples = [];

        let i = x;
        
        while (i < number) { // as long as i < number, let's get the multiples
            if (i % x === 0 || i % y === 0) {
                multiples.push(i);
            } 
            i++;
        }
        return multiples
    }

    // 2. Find sum of multiples
    function findSum() {
        let m = findMultiples(1, -1, 3);

        if (undefined) {
            const sum = m.reduce((acc, curr) => {
                return acc + curr;
            }, 0);
            return sum;
        } else {
            console.log('error')
        }
    }
    return findSum()
}

console.log( sumOfMultiples() )
// Answer = 233168
