  // Khởi tạo mảng các số nguyên
  var array = [-3, -5, 1, 3, 2, 4, 9, 16, 25, 27, 36, 39, 49, 58, 64, 74, 81, 95, 100, 121, 123];

  // Tìm số nguyên lớn nhất trong mảng
  var soMax = Math.max(...array);

  // Kiểm tra xem một số có phải là số chính phương hay không
  function isPerfectSquare(num) {
      return Math.sqrt(num) % 1 === 0;
  }

  // Tìm các số chính phương trong mảng
  var soChinhPhuong = array.filter(num => isPerfectSquare(num));

  // Tính trung bình cộng của mảng các số không âm
  var soKhongAm = array.filter(num => num >= 0);
  var sum = soKhongAm.reduce((acc, curr) => acc + curr, 0);
  var average = sum / soKhongAm.length;

  // Tìm các số lớn hơn trung bình cộng của mảng
  var soLonHonTrungBinh = array.filter(num => num > average);

  //In ra mảng
  document.write("<p>Mảng các số nguyên: " + array + "</p>")
  // In ra kết quả
  document.write("<p>Số nguyên lớn nhất trong mảng: " + soMax + "</p>");
  document.write("<p>Các số chính phương trong mảng: " + soChinhPhuong + "</p>");
  document.write("<p>Trung bình cộng của các số không âm trong mảng: " + average + "</p>");
  document.write("<p>Các số lớn hơn trung bình cộng của mảng: " + soLonHonTrungBinh + "</p>");