const mongoose = require('mongoose');
const ChiTietDuAnSchema = new mongoose.Schema({
    MaDA: { type: String, required: true, ref: 'DuAn' }, // Tham chiếu đến `DuAn`
    MaVL: { type: String, required: true, ref: 'VatLieu' }, // Tham chiếu đến `VatLieu`
    SoLuongSuDung: { type: Number, required: true },
    NgaySuDung: { type: Date, required: true },
});

module.exports = mongoose.model('ChiTietDuAn', ChiTietDuAnSchema);
