var output = "";

for (var i = 99; i >= 1; i--) {
    if (i % 7 === 0) {
        output += i + " ";
        if (i % 35 === 0) { // 7 * 5 = 35, xuống dòng sau mỗi hàng có 5 số
            console.log(output);
            output = ""; // Đặt lại chuỗi đầu ra để bắt đầu hàng mới
        }
    }
}

// Đảm bảo in số cuối cùng nếu nó không nằm ở cuối hàng
if (output.trim() !== "") {
    console.log(output);
}
