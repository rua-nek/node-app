const  mongoose = require('mongoose');
const NhanVienSchema = new mongoose.Schema({
    MaNV: { type: String, required: true, unique: true },
    TenNV: { type: String, required: true },
    GioiTinh: { type: String, required: true },
    NgaySinh: { type: Date, required: true },
    DiaChi: { type: String, required: true },
    SoDienThoai: { type: String, required: true },
    Email: { type: String, required: true }
});

module.exports = mongoose.model('NhanVien', NhanVienSchema);