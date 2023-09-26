function kiemTraSoNguyenTo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    for (var i = 5; i * i <= n; i += 6) {
        if (chialaydu(n, i) === 0 || chialaydu(n, i + 2) === 0) return false;
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

var soCanKiemTra = 1; // Thay đổi số này bằng số bạn muốn kiểm tra
console.log(kiemTraSoNguyenTo(soCanKiemTra) ? soCanKiemTra + " là số nguyên tố." : soCanKiemTra + " không là số nguyên tố.");
