var n = 6; // Số hàng của tam giác (có thể thay đổi)

for (var i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
