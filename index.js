// let num = +prompt("Nhap vao 1 so bat ki");
// let total = 0;
//
// while (num != -1) {
//     total +=num;
//     num = prompt("Nhap vao 1 so bat ki");
//     alert(num);
// }
//

// BT2
// Viết chương hình hiển thị thẻ <hr> theo độ rộng từ 1 đến 100. Kết quả sẽ được hiển thị như hình
let i = 1;

while (i < 100) {
    document.write("<hr width = " + i + "%>");
    i++;
}