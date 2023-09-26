var output = "";

for (var i = 1; i <= 100; i++) {
    output += i + " ";
    if (i % 10 === 0) {
        console.log(output);
        output = ""; // Đặt lại chuỗi đầu ra để bắt đầu hàng mới
    }
}

// Đảm bảo in số cuối cùng nếu nó không nằm ở cuối hàng
if (output.trim() !== "") {
    console.log(output);
}
