// const monthFilter = document.getElementById('month-filter');

// monthFilter.addEventListener('change', function() {
//   const selectedValue = this.value;
//   console.log("Đã chọn:", selectedValue);
//   // Xử lý logic lọc dữ liệu ở đây
// });

document.getElementById('search-button').addEventListener('click', function() {
  // Xử lý logic tìm kiếm ở đây
  const search = document.getElementById('search').value;
  const orderType = document.getElementById('order-type').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;

  console.log("Tìm kiếm:", search);
  console.log("Loại đơn:", orderType);
  console.log("Ngày bắt đầu:", startDate);
  console.log("Ngày kết thúc:", endDate);
  // Gọi hàm lọc dữ liệu (nếu có)
});

document.getElementById('reset-button').addEventListener('click', function() {
  document.getElementById('search').value = "";
  document.getElementById('order-type').selectedIndex = 0; // Đặt select về option đầu tiên
  document.getElementById('start-date').value = "";
  document.getElementById('end-date').value = "";
  // Gọi hàm reset bộ lọc (nếu có)
  console.log("Đã làm mới bộ lọc");
});

document.getElementById('create-order-button').addEventListener('click', function() {
  // Cách 1: Chuyển sang trang khác trong cùng tab/cửa sổ
  window.location.href = "create_order.html"; // Thay "create_order.html" bằng đường dẫn đến trang tạo đơn hàng của bạn

  // Cách 2: Mở trang mới trong tab/cửa sổ mới
  // window.open("create_order.html", "_blank"); // "_blank" để mở tab mới

  // Cách 3: Chuyển trang bằng cách thay đổi hash (cho SPA - Single Page Application)
  // window.location.hash = "#create-order";
});