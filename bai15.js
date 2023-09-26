var n = 7; // Số hàng của tam giác (có thể thay đổi)

for (var i = 1; i <= n; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
