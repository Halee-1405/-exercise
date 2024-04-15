// Tạo mảng số nguyên ngẫu nhiên
var array = [];
var size = 25;
var minVal = -10;
var maxVal = 20;

for (var i = 0; i < size; i++) {
  array.push(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
}

// Sắp xếp mảng theo thứ tự tăng dần
var sxArray = array.slice().sort((a, b) => a - b);

// Loại bỏ các phần tử trùng nhau
var removeArray = array.filter((value, index, self) => self.indexOf(value) === index);

// In ra kết quả
document.write("<p>Mảng số nguyên ngẫu nhiên: " + array + "</p>");
document.write("<p>Mảng sau khi sắp xếp: " + sxArray + "</p>");
document.write("<p>Mảng sau khi loại bỏ các phần tử trùng nhau: " + removeArray + "</p>");