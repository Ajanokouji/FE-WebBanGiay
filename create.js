const paymentButtons = document.querySelectorAll('.payment-button');

paymentButtons.forEach(button => {
    button.addEventListener('click', () => {
        paymentButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        console.log("Phương thức thanh toán:", button.dataset.method);
    });
});
// xử lý sự kiện tạo hóa đơn
document.getElementById('create-invoice').addEventListener('click', function() {
    // Xử lý logic tạo hóa đơn ở đây
    console.log("Đã tạo hóa đơn");
    window.location.href = "index.html";
    
});