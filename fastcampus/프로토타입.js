var a = [1, 2, 3, 4, 10];
Array.prototype.print = function() {
    for(var i=0; i<this.length; i++){
        console.log(a[i]);
    }
}

a.print()