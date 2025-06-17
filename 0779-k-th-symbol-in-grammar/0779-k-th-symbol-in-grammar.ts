
/// 0으로 시작해서, 모든 0은 01로, 모든 1은 10으로 변경
/// 계속 후속이 따라오도록 함

// 만약 n이 3이고 k가 5 (1,2,3,4,5,6,7,8)
// 그러면 n은 2이고 k가 4의 반대를 적으면 됨.
// 0 - 1
// 01 - 2
// 0110 - 3
// 01101001 - 4
// 0110100110010110 - 5
// 01101001100101101001011001101001 - 6

function kthGrammar(n: number, k: number): number {
    const table = ['0', '01', '0110', '01101001', '0110100110010110', '01101001100101101001011001101001']
    
    if (n < 7 || k < 33) return parseInt(table[5][k-1]);

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
