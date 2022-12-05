
//Create a program to print all prime palindromes under 50.

function oneDigit(num) {

    return (num >= 0 && num < 10);
}


function isPalUtil(num, dupNum) {

    if (oneDigit(num))
        return (num == (dupNum) % 10);


    if (!isPalUtil(parseInt(num / 10), dupNum))
        return false;

    dupNum = parseInt(dupNum / 10);


    return (num % 10 == (dupNum) % 10);
}


function isPal(num) {

    if (num < 0)
        num = -num;


    var dupNum = num; // dupNum = num

    return isPalUtil(num, dupNum);
}


function printPalPrimesLessThanN(n) {

    var prime = Array.from({ length: n + 1 }, (_, i) => true);

    for (p = 2; p * p <= n; p++) {

        if (prime[p]) {

            for (i = p * 2; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    // Print all palindromic prime numbers
    for (p = 2; p <= n; p++) {

        // checking whether the given number is
        // prime palindromic or not
        if (prime[p] && isPal(p)) {
            console.log(p + " ");
        }
    }
}


var n = 50;
console.log('Palindromic primes smaller than or equal to ' + n + ' are :<br>');
printPalPrimesLessThanN(n);



