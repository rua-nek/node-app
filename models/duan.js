const mongoose = require('mongoose');
const DuAnSchema = new mongoose.Schema({
    MaDA: { type: String, required: true, unique: true },
    TenDA: { type: String, required: true },
    DiaDiem: { type: String, required: true },
    ThoiGianBatDau: { type: Date, required: true },
    ThoiGianKetThuc: { type: Date, required: true },
});

module.exports = mongoose.model('DuAn', DuAnSchema);
