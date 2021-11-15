$(function() {
  console.log('Hello Bootstrap5');
});


$(".hamBtn").on("click", () => {
  const src = $(".hamBtnImg").attr('src');
  const newSrc = (src == "assets/images/menu.svg") ? "assets/images/menu-open.svg" : "assets/images/menu.svg";
  $(".hamBtnImg").attr("src", newSrc);      //要更換的圖片位置
});