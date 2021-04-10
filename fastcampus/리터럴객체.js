var a = {
    'a' : 110,
    'b' : 'hello',
    'c' : function(){
        this.a++
    }
}

Object.prototype.sum = function() {
    console.log(this.a + 20);
}

a.c()
a.c()
console.log(a.a)