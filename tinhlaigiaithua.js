function tinhGiaiThua(n) {
    if (n == 0) {
        return 1; // Giai thừa của 0 là 1
    }
    if (n == 1) {
        return 1; // Giai thừa của 1 là 1
    } else {
        var giaiThua = 1;
        for (var i = 2; i <= n; i++) {
            giaiThua *= i;
        }
        return giaiThua;
    }
}

var soCanTinhGiaiThua = 5;  // Thay đổi số này bằng số bạn muốn tính giai thừa
var ketQua = tinhGiaiThua(soCanTinhGiaiThua);
console.log(soCanTinhGiaiThua + "! = " + ketQua);
