const mongoose = require('mongoose');
const ChiTietHopDongSchema = new mongoose.Schema({
    MaHD: { type: String, required: true, ref: 'HopDong' }, // Tham chiếu đến `HopDong`
    MaVL: { type: String, required: true, ref: 'VatLieu' }, // Tham chiếu đến `VatLieu`
    SoLuong: { type: Number, required: true },
    DonGia: { type: Number, required: true },
});

module.exports = mongoose.model('ChiTietHopDong', ChiTietHopDongSchema);
