const vatlieu = require('../models/vatlieu');
class vatlieuController {
    index = async (req, res) => {
        const vatlieus = await vatlieu.find().lean();
        res.render('anhducstore', {
            title: 'Vat Lieu',
            data: vatlieus
        });
    }
    addvatlieu(req, res) {
        res.render('add-vatlieu', {
            title: 'Add Vat Lieu'
        });
    }
    createvatlieu = async (req, res) => {
        const newvatlieu = new vatlieu(req.body);
        await newvatlieu.save();
        res.redirect('/vatlieu');
    }
    deletevatlieu = async (req, res) => {
        await vatlieu.deleteOne({ _id: req.params.id });
        res.redirect('/vatlieu');
    }
    editvatlieu = async (req, res) => {
        const data = await vatlieu.findOne({ _id: req.params.id }).lean(); 
        res.render('edit-vatlieu', {
            title: 'Edit Vat Lieu',
            data: data
        });
       }
    updatevatlieu = async (req, res) => {
        const {MaVL, TenVL, Maloai, DonViTinh, GiaVL} = req.body;
        await vatlieu.updateOne({ _id: req.params.id }, {
            MaVL, TenVL, Maloai, DonViTinh, GiaVL
        });
        res.redirect('/vatlieu');;
    }
}

module.exports = new vatlieuController();