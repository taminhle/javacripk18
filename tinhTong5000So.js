function tinhTong5000So() {
    var tong = 0;
    for (var i = 1; i <= 5000; i++) {
        tong += i;
    }
    return tong;
}

var ketQua = tinhTong5000So();
console.log("Tổng của 5000 số từ 1 đến 5000 là: " + ketQua);
