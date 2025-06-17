function kthGrammar(n: number, k: number): number {
    const table = ['0', '01', '0110', '01101001', '0110100110010110', '01101001100101101001011001101001']
    
    if (k < 33) return parseInt(table[5][k-1]);

    let positive = true;
    while(n >= 7 && k >= 33) {
        n--;
        if (k > (2 ** (n-1))) {
            k = k - (2 ** (n-1));
            positive = !positive;
        }
    }
    
    const result = parseInt(table[5][k-1])

    return positive ? result : result ^ 1
};
