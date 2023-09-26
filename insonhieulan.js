function inSoNhieuLan(so, lan) {
    var ketQua = '';
    for (var i = 0; i < lan; i++) {
        ketQua += so;
    }
    console.log(ketQua);
}

var soCanIn = "a";  // Thay đổi giá trị này bằng số hoặc chuỗi bạn muốn in
var lanIn = 10;
inSoNhieuLan(soCanIn, lanIn);
