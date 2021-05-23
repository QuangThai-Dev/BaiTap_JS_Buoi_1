// Bài 1: Tính  tiền lương nhân viên
/**
 * b1: Input
 * - luongMotNgay, soNgayLam
 * 
 * b2: Handel
 * - Tạo biến luongMotNgay, soNgayLam, luongThucNhan
 * - Tính lương thực nhận: luongThucNhan = luongMotNgay * soNgayLam
 * b3: Output
 * - Xuất tiền luong thực hiện
 */

var soNgayLam = 23;
var luongMotNgay = 100000;
var luongThucNhan;


luongThucNhan = soNgayLam * luongMotNgay;


console.log('*_*_*_*_*_*_*_*_*BÀI1*_*_*_*_*_*_*_*_*');
console.log("Tiền lương nhân viên: ", luongThucNhan + 'VNĐ')
console.log('*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*');

// Bài 2: Tính giá trị trung bình
/**
 * b1: Input
 * - Giá trị 5 biến
 * 
 * b2: Handel
 * - Tạo biến a, b, c, d, e, giaTriTrungBinh
 * - Tính giá trị trung bình : giaTriTrungBinh = (a + b + c + d + e)/5
 * b3: Output
 * - Xuất giá trị trung bình
 */
var soThucThuNhat = 1;
var soThucThuHai = 2;
var soThucThuBa = 3;
var soThucThuTu = 4;
var soThucThuNam = 5;
var giaTriTrungBinh;


giaTriTrungBinh = (soThucThuNhat + soThucThuHai + soThucThuBa + soThucThuTu + soThucThuNam) / 5;


console.log('*_*_*_*_*_*_*_*_*BÀI2*_*_*_*_*_*_*_*_*');
console.log('Giá trị trung bình: ', giaTriTrungBinh);
console.log('*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*');

// Bài 3: Quy đổi tiền
/**
 * b1: Input
 * - giaTriUSD, soTienQuyDoi
 * 
 * b2: Handel
 * - Tạo biến tienUsd, soTienQuyDoi, sauQuyDoiVNd
 * - Tính giá trị sau quy đổi Vnd : sauQuyDoiVnd = giaTriUSD * soTienQuyDoi
 * b3: Output
 * - Xuất giá trị sau quy đổi
 */
var soTienQuyDoi = 20;
var giaTriUSD = 23500;
var sauQuyDoiVnd;


sauQuyDoiVnd = giaTriUSD * soTienQuyDoi;


console.log('*_*_*_*_*_*_*_*_*BÀI3*_*_*_*_*_*_*_*_*');
console.log('Tiền sau khi quy đổi VNĐ: ' + sauQuyDoiVnd + 'VNĐ');
console.log('*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*');

//Bài 4: Tính Chu vi Diện tích hình chữ nhật
/**
 * b1:Input
 * - Giá trị chiều dài chiều rộng hình chữ nhật
 * b2 : handle
 * - Tạo biến chieuDai, chieuRong, chuVi, dienTich
 * - Tính chu vi HCN: chuVi = (chieuDai + chieuRong) * 2;
 * - Tính diện tích HCN: dienTich = chieuDai * chieuRong;
 * b3: Output
 * - Xuất ra chu vi và diện tích HCN
 */

var chieuDai = 3;
var chieuRong = 4;
var chuVi;
var dienTich;

chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;


console.log('*_*_*_*_*_*_*_*_*BÀI4*_*_*_*_*_*_*_*_*');
console.log('Chu vi hình chữ nhật: ', chuVi);
console.log('Diện tích hình chữ nhật: ', dienTich);
console.log('*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*');

// Bai5: Tính tổng hai ký số
/**
 * b1: Input
 * - Nhập số có hai chữ số
 * b2: Handle
 * - Tạo biến soHaiChuSo, soHangChuc, soHangDonVi, tongKySo
 * - Lấy số hàng chục: soHangChuc = Math.floor(soHaiChuSo / 10)
 * - Lấy số hàng đơn vị: soHangDonVi = soHaiChuSo % 10
 * - Tính tổng hai ký số: tongKySo = soHangChuc + soHangDonVi
 * b3: Output
 * - Xuất tổng hai ký số vừa nhập
 */

var soHaiChuSo = 12;
var soHangChuc;
var soHangDonVi;
var tongKySo;


soHangChuc = Math.floor(soHaiChuSo / 10);
soHangDonVi = soHaiChuSo % 10;
tongKySo = soHangChuc + soHangDonVi;

console.log('*_*_*_*_*_*_*_*_*BÀI5*_*_*_*_*_*_*_*_*');
console.log('Tổng 2 ký số: ', tongKySo);
console.log('*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*');