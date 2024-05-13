$(document).ready(function(){
    $("#addBtn").click(function(){
      var newItem = $("#inputItem").val(); // Lấy giá trị từ ô input
      if(newItem !== '') { // Kiểm tra ô input có rỗng không
        $("#itemList").append("<li>" + newItem + "</li>"); // Thêm mục mới vào danh sách
        $("#inputItem").val(''); // Xoá trắng ô input
      }
    });
  });