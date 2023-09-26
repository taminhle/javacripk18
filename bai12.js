function kiemTraSoNguyenTo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    for (var i = 5; i * i <= n; i += 6) {
        if ((chialaydu(n, i) == 0 | chialaydu(n, i + 2) == 0) == false) return false;
    }

    return true;
}

function chialaydu(n, m) {
    var ret = 0;
    for (var j = 0; j <= n; j = j + m) {
        ret = n - j;
    }
    return ret;
}

// In ra các số nguyên tố từ 1 đến 2000
for (var i = 1; i <= 2000; i++) {
    if (kiemTraSoNguyenTo(i) == true) {
        console.log(i + " là số nguyên tố.");
    }
}
