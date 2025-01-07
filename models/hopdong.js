const mongoose = require('mongoose');

const HopDongSchema = new mongoose.Schema({
    MaHD: { type: String, required: true, unique: true }, // Mã hợp đồng
    NgayLap: { type: Date, required: true },  // Ngày lập hợp đồng
    MaNCC: { type: String, required: true },  // Mã nhà cung cấp (sẽ được liên kết với bảng nhà cung cấp)
    TongGiaTri: { type: Number, required: true },  // Tổng giá trị hợp đồng
    TrangThai: { type: String, required: true },  // Trạng thái hợp đồng
});

module.exports = mongoose.model('HopDong', HopDongSchema);
