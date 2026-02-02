
let loginAttempts = 0;
let isAuthenticated = false;
let remaint = 0;
let choose;
while (loginAttempts < 3) {
    let account = prompt("Mời bạn nhập tài khoản:");
    let pass = prompt("Mời bạn nhập mật khẩu");

    if (account === "admin" && pass === "12345") {
        alert("Đăng nhập thành công!");
        isAuthenticated = true;
        break;
    } else {
            loginAttempts++;
            remaint = 3 - loginAttempts;
        if (account !== "admin" && pass !== "12345") {
            alert(`Nhập sai tài khoản và mật khẩu. Còn lại ${remaint} nhập `);
        } else if (account !== "admin" && pass === "12345") {
            alert(`Nhập sai tài khoản. Còn lại ${remaint} nhập`);
        } else if (account === "admin" && pass !== "12345") {
            alert(`Nhập sai mật khẩu. Còn lại ${remaint} nhập`);
        }

    }
}
if (!isAuthenticated) {
    alert("Tài khoản đã bị khóa!");
} else {
    do {
        choose = +prompt(`
            --- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---
            1. Phân loại mã số sách
            2. Thiết kế sơ đồ kho sách
            3. Dự toán phí bảo trì sách
            4. Tìm mã số sách may mắn
            5.Thoát
            Vui lòng nhập lựa chọn của bạn (1-5):
            `)

        switch (choose) {
            case 1: {
                //biến case 1
                let bookTotal = 0;
                let scienceBook = 0; // sách khoa học
                let bookId;
                let artBook =0; // sách nghệ thuật



                alert("Nhập các mã số sách (Nhập 0 để dừng lại):");
                while (true) {
                    bookId = +prompt("Nhập mã số sách:");
                    if (isNaN(bookId)) {
                        alert("Vui lòng nhập số nguyên hợp lệ!");
                        continue;
                    }
                    if (bookId === 0) {
                        break;
                    }
                    bookTotal++;
                    if (bookId % 2 === 0) {
                        scienceBook++;
                    } else {
                        artBook++;
                    }
                }
                console.log("--- Kết quả phân loại mã sách ---");
                console.log(`- Tổng số lượng mã sách đã nhập: ${bookTotal}`);
                console.log(`- Số mã chẵn (Sách khoa học): ${scienceBook}`);
                console.log(`- Số mã lẻ (Sách nghệ thuật): ${artBook}`);
                alert("Đã phân loại xong! Xem kết quả tại Console (F12).");
                break;
            }
            case 2: {
                let row = +prompt("Nhập số hàng của kho:");
                let col = +prompt("Nhập số cột của kho:");
                if (isNaN(row) || isNaN(col) || row <= 0 || col <= 0) {
                    alert("Số hàng và cột phải là số dương!");
                    break;
                }
                console.log(`--- Bản đồ kho sách (${row}x${col}) ---`);
                for (let i = 1; i <= row; i++) {
                    let layout = "";
                    for (let j = 1; j <= col ; j++) {
                        let bookCase = `[${i}-${j}]`;
                        if (i === j) {
                            bookCase += "(Kệ ưu tiên)";
                        }
                        layout += bookCase + "  ";
                    }
                    console.log(layout);
                }
                alert("Đã in bản đồ kho ra Console (F12).");
                break;
            }

            case 3: {
                let bookNumber = +prompt("Nhập số lượng sách hiện có:");
                let money = +prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):");
                let year = Number(prompt("Nhập số năm dự toán:"));
                if (isNaN(bookNumber) || isNaN(money) || isNaN(year)) {
                    alert("Dữ liệu nhập vào phải là số!");
                    break;
                }
                console.log("--- Dự toán phí bảo trì sách theo năm ---");
                let moneyTotal;
                for (let i = 1; i <= year; i++) {
                    moneyTotal = bookNumber * money;
                    console.log(`Năm ${i}: ${moneyTotal.toLocaleString()} VNĐ (Đơn giá: ${money.toFixed(0)}/cuốn)  `);
                    money = money * 1.1;
                }
                alert("Đã hoàn thành bảng dự toán tại Console.");
                break;
            }
            case 4: {
                let countLucky = 0;
                let listLucky ="";
                let n = +prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):");
                if (isNaN(n) || n <= 0) {
                    alert("Vui lòng nhập số nguyên dương! ");
                    break;
                }
                for (let i = 1; i <= n; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                         listLucky += i + " ";
                         countLucky++;
                    }
                }
                console.log(listLucky || "Không có mã nào thỏa mãn.");
                console.log(`=> Tổng cộng có ${countLucky} mã may mắn.`);
                alert(`Tìm thấy ${countLucky} mã may mắn. Xem chi tiết tại Console.`);
                break;
            }
            case 5: {
                alert("Hệ thống đang đăng xuất... Hẹn gặp lại!")
                break;
            }
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại!")
                break;
        }
    } while (choose !== 5);
}