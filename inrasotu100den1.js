var output = "";

for (var i = 100; i >= 1; i--) {
    output += i + " ";
    if (i % 10 === 1) {
        console.log(output);
        output = ""; // Đặt lại chuỗi đầu ra để bắt đầu hàng mới
    }
}

// Đảm bảo in số cuối cùng nếu nó không nằm ở cuối hàng
if (output.trim() !== "") {
    console.log(output);
}
