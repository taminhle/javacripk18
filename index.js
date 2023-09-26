function add(x,y){
    //Tìm số lớn giữa x và y
}

function max(x,y) {
    // Nếu x lớn hơn y thì return x;
    // Nếu x nhỏ hơn y thì return y;
    // Nếu x bằng y thì return x; hoặc return y;
    if(x>y){
        return x;
    } else {
        return y;
        }
}
c = max(90, 80)
console.log(c);


function min(x,y){
    //Nhap x va y
    if(x<y){
        return x; //true
    } else {
        return y; //false
    }
}  
d = min(100, 80)
console.log(d)

function min3so(x,y,z){
    //NHap x,y,z
    if(x<y){
        //true
        if(x<z){
            return x;
            //true
        } else {
            //false
            return z;
        }
    } else {
        //false
        if(y<z){
            //true
            return y;
        } else {
            //false
            return z;
        }
    }
}
e = min3so(100,81,90)
console.log(e)
function max3so(x,y,z){
//Nhap 3 so
if(x>y){
    //true
    if(x>z){
    //true
        return x;
}   else {
    //false
    return z;
}
} else {
    //false
    if(y>z){
        //true
        return y;
    } else {
        //false
        return z;
    }
}
f = max3so(200,90,80)
console.log(f)
}


//Bai tap 1
function solon100(x){
//Nhap x
if(x>100){
    //true
    console.log("X lớn hơn 100");
} else {
    //false
    console.log("X nhỏ hơn 100");
}
}
solon100(50);

//BT 2
function avg2so(x,y){
    //Nhap x va y
return ((x+y)/2);
}
s = avg2so(80,100)
console.log(s)



//BT3
function avg3so(x,y,z){
    //Nhap x va y va z
return ((x+y+z)/3);
}
h = avg3so(100,80,90)
console.log(h)


//BT4


console.log("Hello world");

(function Xeploai(x,y,z){
    console.log("Toan: "+ x);
    console.log("Van: "+ y);
    console.log("Anh: "+ z);
var TB = Xeploai(x,y,z);

if(avg3so>9.0) {
    //true
    return "Xep loai A";
} else {
    //false
    if(avg3so>=7){
        //true
        return "Xep loai B";
    } else {
        //false
        if(avg3so>=5){
            //true
            return "Xep loai C";
        } else {
            //false
            return "Xep loai F";
        }
    }
}
}
TB = Xeploai(7,8,9);
console.log(TB)






