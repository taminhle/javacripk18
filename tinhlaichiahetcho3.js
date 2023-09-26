function chialaydu(n, m){
    var ret = 0;
    for(var j = 0; j < n; j = j + m){
        ret = n - j;
    }
    return ret;
}

for (var i = 1; i <= 100; i++) {
    var chiahetcho3 = false;
    var found = false;
    
    for (var j = 1; j <= i; j++) {
        if (i - j * 3 === 0) {
            chiahetcho3 = true;
            found = true;
        }
    }
    
    if (chiahetcho3) {
        console.log(i);
    }
}
