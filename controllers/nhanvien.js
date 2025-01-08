const nhanvien = require('../models/nhanvien');

class NhanVienController {
    // Hiển thị danh sách nhân viên
    async index(req, res) {
        try {
            const nhanviens = await nhanvien.find().lean();
            res.render('nhanvien', {
                title: 'Danh sách nhân viên',
                data : nhanviens,
            });
        } catch (error) {
            console.error('Lỗi khi lấy danh sách nhân viên:', error);
            res.status(500).send('Lỗi khi lấy danh sách nhân viên');
        }
    }

    // Hiển thị form thêm nhân viên
    addnhanvien(req, res) {
        res.render('add-nhanvien', {
            title: 'Thêm nhân viên',
        });
    }

    // Tạo nhân viên mới
    async createnhanvien(req, res) {
        try {
            const {
                TenNV,
                GioiTinh,
                NgaySinh,
                DiaChi,
                SoDienThoai,
                Email,
            } = req.body;
            
            let MaNV;
            let existingMaNV;
            
            // Vòng lặp while để tạo MaNV mới
            while (true) {
                MaNV = `NV${Math.floor(Math.random() * 100 + 1)}`;
                existingMaNV = await nhanvien.findOne({ MaNV });
                if (!existingMaNV) {
                    break;
                }
            }
            
            const newnhanvien = new nhanvien({
                MaNV,
                TenNV,
                GioiTinh,
                NgaySinh,
                DiaChi,
                SoDienThoai,
                Email,
            });
            await newnhanvien.save();
            res.redirect('/nhanvien');
        } catch (err) {
            console.log(err);
            res.status(500).send('Lỗi khi tạo nhân viên!');
        }
    }

    // Xóa nhân viên
    deletenhanvien = async (req, res) => {
        try {
            const nhanvienId = req.params.id;
            await nhanvien.findByIdAndDelete(nhanvienId);
            res.redirect('/nhanvien');
        } catch (err) {
            console.log(err);
            res.status(500).send('Lỗi khi xóa nhân viên!');
        }
    }

    // Hiển thị form chỉnh sửa nhân viên
    editnhanvien = async (req, res) => {
        const data = await nhanvien.findOne({ _id: req.params.id }).lean();
        res.render('edit-nhanvien', {
            title: 'Chỉnh sửa nhân viên',
            data : data,
        });
    };

    // Cập nhật thông tin nhân viên
    updatenhanvien = async (req, res) => {
        try {
            const { TenNV, NgaySinh, DiaChi, SoDienThoai, Email } = req.body;
            await nhanvien.updateOne({ _id: req.params.id }, {
                 TenNV, NgaySinh, DiaChi, SoDienThoai, Email
            });
            res.redirect('/nhanvien');
        } catch (err) {
            console.log(err);
            res.status(500).send('Lỗi khi cập nhật thông tin nhân viên!');
        }
    }
}

module.exports = new NhanVienController();
