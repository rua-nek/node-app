const mongoose = require('mongoose');
const VatLieuSchema = new mongoose.Schema({
    MaVL: { type: String, required: true, unique: true },
    TenVL: { type: String, required: true },
    Maloai: { type: String, required: true, ref: 'LoaiVatLieu' }, // Tham chiếu đến `LoaiVatLieu`
    DonViTinh: { type: String, required: true },
    GiaVL: { type: Number, required: true },
});

module.exports = mongoose.model('VatLieu', VatLieuSchema);
