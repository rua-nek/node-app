const duan1 = require('../models/duan'); // Đảm bảo bạn đã import đúng model

class Duan {
    // Hiển thị danh sách các dự án
    index = async (req, res) => {
        const data = await duan1.find().lean();
        console.log(data);
        res.render('duan', {
            title: 'Du An',
            data: data
        });
    }
    addduan = (req, res) => {
        res.render('add-duan', { title: 'Add Duan' });
    }
    createduan = async (req, res) => {
        const {
            MaDA,
            TenDA,
            DiaDiem,
            ThoiGianBatDau,
            ThoiGianKetThuc
        } = req.body;
        const newduan = new duan1({
            MaDA,
            TenDA,
            DiaDiem,
            ThoiGianBatDau,
            ThoiGianKetThuc
        });
        await newduan.save();
        res.redirect('/duan');
    }

    // Tạo mới dự án
    createduan = async (req, res) => {
        const { MaDA, TenDA, DiaDiem, ThoiGianBatDau, ThoiGianKetThuc } = req.body;

        try {
            const newDuan = new duan1({
                MaDA,
                TenDA,
                DiaDiem,
                ThoiGianBatDau,
                ThoiGianKetThuc
            });
            await newDuan.save();
            res.redirect('/duan');
        } catch (err) {
            console.error(err);
            res.status(500).send('Lỗi khi tạo dự án');
        }
    }

    // Hiển thị form chỉnh sửa dự án
    editduan = async (req, res) => {
        const { id } = req.params;
        const data = await duan1.findById(id).lean();
        console.log(data);
        res.render('edit-duan', {
            title: 'Edit Duan',
            data: data
        });
    }

    // Cập nhật thông tin dự án
    updateduan = async (req, res) => {
        const { id } = req.params;
        const { MaDA, TenDA, DiaDiem, ThoiGianBatDau, ThoiGianKetThuc } = req.body;

        try {
            await duan1.findByIdAndUpdate(id, {
                MaDA,
                TenDA,
                DiaDiem,
                ThoiGianBatDau,
                ThoiGianKetThuc
            });
            res.redirect('/duan');
        } catch (err) {
            console.error(err);
            res.status(500).send('Lỗi khi cập nhật dữ liệu dự án');
        }
    }

    // Xóa dự án
    deleteduan = async (req, res) => {
        const { id } = req.params;

        try {
            await duan1.findByIdAndDelete(id);
            res.redirect('/duan');
        } catch (err) {
            console.error(err);
            res.status(500).send('Lỗi khi xóa dự án');
        }
    }
}

module.exports = new Duan();
