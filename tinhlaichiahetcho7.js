function chialaydu(i) {
    var ret = 0;
    for (var j = 0; j < i; j = j + 7) {
        ret = i - j;
    }
    return ret;
}

// Kiểm tra các số từ 99 đến 1 chia hết cho 7
console.log("Các số từ 99 đến 1 chia hết cho 7:");
for (var i = 99; i >= 1; i--) {
    var chiahetcho7 = false;

    for (var j = i; j >= 7; j = j - 7) {
        if (j == 7) {
            chiahetcho7 = true;
        }
    }

    if (chiahetcho7 || (i == 7 && i !== 0)) {
        console.log(i);
    }
}
