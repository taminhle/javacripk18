function in10SoFibonacci() {
    var a = 0, b = 1;
    var soLuongSauMoiHang = 5; // Số lượng số sau mỗi hàng

    var output = ""; // Chuỗi để lưu trữ kết quả in ra

    for (var i = 0; i < 10; i++) {
        if (i <= 1) {
            output += i + " ";
        } else {
            var temp = a + b;
            a = b;
            b = temp;
            output += a + " ";
        }

        if ((i + 1) % soLuongSauMoiHang === 0) {
            console.log(output);
            output = ""; // Đặt lại chuỗi đầu ra để bắt đầu hàng mới
        }
    }
}

in10SoFibonacci();

