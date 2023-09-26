function xepLoaiHocSinh(toan, van, anh) {
    var diemTrungBinh = (toan + van + anh) / 3;

    if (diemTrungBinh >= 9.0) {
        return "Loại A";
    } else if (diemTrungBinh >= 7.0) {
        return "Loại B";
    } else if (diemTrungBinh >= 5.0) {
        return "Loại C";
    } else {
        return "Loại F";
    }
}

// Gọi hàm và truyền vào điểm số ba môn học
var diemToan = 8.5;
var diemVan = 7.2;
var diemAnh = 9.8;

var ketQuaXepLoai = xepLoaiHocSinh(diemToan, diemVan, diemAnh);
console.log("Xếp loại học sinh: " + ketQuaXepLoai);
