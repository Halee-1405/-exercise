var x = 10;
function myFnc(){
  console.log(x); /* output: 10, x có ảnh hưởng tới Function */
}
console.log(x); /* output: 10, x có ảnh hưởng khắp nơi */
myFnc();

var x = 10;
function myFnc(){
  var y = x + 5 /* y được khai báo trong Function */
  console.log(y); /* output: 15, y chỉ có ảnh hưởng bên trong Function */
}
console.log(y); /* output: Error */
myFnc();