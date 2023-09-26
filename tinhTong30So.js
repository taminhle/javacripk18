function tinhTong30So() {
    var tong = 0;
    var soDauTien = 5;
    var buocNhay = 5;

    for (var i = 1; i <= 30; i++) {
        tong += soDauTien;
        soDauTien += buocNhay;
    }

    return tong;
}

var ketQua = tinhTong30So();
console.log("Tổng của 30 số là: " + ketQua);
