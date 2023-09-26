var output = "";

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        output += i + " ";
        if (i % 5 === 0) {
            console.log(output);
            output = ""; // Đặt lại chuỗi đầu ra để bắt đầu hàng mới
        }
    }
}

// Đảm bảo in số cuối cùng nếu nó không nằm ở cuối hàng
if (output.trim() !== "") {
    console.log(output);
}
