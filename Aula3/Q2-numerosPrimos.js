function ehPrimo(n) {
    if (typeof n !== "number" || n < 2 || !Number.isInteger(n)) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

console.log(ehPrimo(7));
console.log(ehPrimo(10));
console.log(ehPrimo(1));