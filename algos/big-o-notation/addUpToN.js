// goal - add from 0 up to and including n together and display output

// First example of it.
/*
function addUpTo(n){
    let total = 0;

    for(let i = 1; i <= n; i++){
        total += i;
    }

    return total;
}
console.log(addUpTo(6));
*/
// Issue - it would decrease in performance linearly



function addUpTo(n) {
    return n * ( n + 1 ) / 2;
}
console.log(addUpTo(6));
