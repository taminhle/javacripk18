function solonnhat(arr){
    if (arr.length==0) {
        return undefined;
    }
    var solonnhat= arr[0];
    
    for(var i=0; i < arr.length; i++) {
        if(arr[i]>solonnhat) {
            solonnhat=arr[i]
        } 
    }
    return solonnhat;
}

var arr=[5,7,4,6,9,12];
console.log (solonnhat(arr));
