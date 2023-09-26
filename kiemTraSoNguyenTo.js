function kiemTraSoNguyenTo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (var i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

var soCanKiemTra = 1; // Thay đổi số này bằng số bạn muốn kiểm tra
console.log(kiemTraSoNguyenTo(soCanKiemTra) ? soCanKiemTra + " là số nguyên tố." : soCanKiemTra + " không là số nguyên tố.");
//sử dụng toán tử ba ngôi