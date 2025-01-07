const NhaCungCap = require('../models/nhacungcap');
class Ncc {
    index = async (req, res) => {
        const data = await NhaCungCap.find().lean();
        console.log(data);
        res.render('ncc', {
            title: 'Vat Lieu',
            data: data
        });
    }
    addncc(req, res) {
        res.render('add-ncc', {
            title: 'Add Vat Lieu'
        });
    }
    createncc = async (req, res) => {
        const newncc = new NhaCungCap(req.body);
        await newncc.save();
        res.redirect('/ncc');
    }
    deletencc = async (req, res) => {
        await NhaCungCap.deleteOne({ _id: req.params.id });
        res.redirect('/ncc');
    }
    editncc = async (req, res) => {
        const data = await NhaCungCap.findOne({ _id: req.params.id }).lean();
        res.render('edit-ncc', {
            title: 'Edit Vat Lieu',
            data: data
        });
    }
    updatencc = async (req, res) => {
        const {MaNCC, TenNCC, DiaChi, SoDienThoai, Email} = req.body;
        await NhaCungCap.updateOne({ _id: req.params.id }, {
            MaNCC, TenNCC, DiaChi, SoDienThoai, Email
        });
        res.redirect('/ncc');
    }
}
module.exports = new Ncc();