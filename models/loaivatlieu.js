const mongoose = require('mongoose');
const LoaiVatLieuSchema = new mongoose.Schema({
    MaLoai: { type: String, required: true, unique: true },
    TenLoai: { type: String, required: true },
});

module.exports = mongoose.model('LoaiVatLieu', LoaiVatLieuSchema);
