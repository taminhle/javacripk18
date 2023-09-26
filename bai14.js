function timBoi(n) {
    for (var boiThu = 1, boi = n; boi <= 1300; boiThu++, boi += n) {
        if (boi >= 1000) {
            console.log("Bội thứ " + boiThu + ": " + boi);
        }
    }
}

var n = parseInt(prompt("Nhập số n (n < 20):"));

if (n >= 20) {
    console.log("Số n phải nhỏ hơn 20.");
} else {
    console.log("Các bội của " + n + " trong phạm vi từ 1000 đến 1300:");
    timBoi(n);
}
