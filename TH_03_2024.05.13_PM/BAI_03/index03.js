$(document).ready(function(){
  var currentIndex = 0;
  var slideCount = $(".slide").length;

  function showSlide(index) {
    $(".slide").hide();
    $(".slide").eq(index).show();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    showSlide(currentIndex);
  }

  var intervalId = setInterval(nextSlide, 5000); // Tự động trượt ảnh sau mỗi 5 giây

  $("#nextButton").click(function() {
    clearInterval(intervalId); // Dừng tự động trượt khi nhấp vào nút Next
    nextSlide();
    intervalId = setInterval(nextSlide, 5000); // Bắt đầu lại tự động trượt
  });

  $("#backButton").click(function() {
    clearInterval(intervalId); // Dừng tự động trượt khi nhấp vào nút Back
    prevSlide();
    intervalId = setInterval(nextSlide, 5000); // Bắt đầu lại tự động trượt
  });
});