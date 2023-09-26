var n = 10; // Số hàng của tam giác (có thể thay đổi)

for (var i = 1; i <= n; i++) {
    // Tạo khoảng trắng phía trước sao
    for (var j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    // In ra sao
    for (var k = 1; k <= i; k++) {
        process.stdout.write("*");
    }

    // Xuống dòng
    console.log();
}
