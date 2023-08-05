// Create UDF to find Prime no between 100 to 200 in javascript.


const lowerNumber = 100;
const higherNumber = 200;

for (let i = lowerNumber; i <= higherNumber; i++) {
    let f = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            f = 1;
            break;
        }
    }

    if (i > 1 && f == 0) {
        console.log(i);
    }
}
