function tinhTong5000SoTu5001Den10000() {
    var tong = 0;
    for (var i = 5001; i <= 10000; i++) {
        tong += i;
    }
    return tong;
}

var ketQua = tinhTong5000SoTu5001Den10000();
console.log("Tổng của 5000 số từ 5001 đến 10000 là: " + ketQua);
