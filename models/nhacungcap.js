const mongoose = require('mongoose');
const NhaCungCapSchema = new mongoose.Schema({
    MaNCC: { type: String, required: true, unique: true },
    TenNCC: { type: String, required: true },
    DiaChi: { type: String, required: true },
    SoDienThoai: { type: String, required: true },
    Email: { type: String, required: true },
});

module.exports = mongoose.model('NhaCungCap', NhaCungCapSchema);
