function veTamGiac(type, line) {
    if (type === "low") {
        for (var i = 1; i <= line; i++) {
            console.log("*".repeat(i));
        }
    } else if (type === "high") {
        for (var i = 1; i <= line; i++) {
            console.log(" ".repeat(line - i) + "*".repeat(i));
        }
    } else {
        console.log("Loại tam giác không hợp lệ.");
    }
}

// Sử dụng hàm để vẽ tam giác
veTamGiac("high", 10); // Loại high với 10 dòng
