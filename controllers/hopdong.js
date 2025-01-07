const HopDong = require('../models/hopdong');
const NhaCungCap = require('../models/nhacungcap');
class hopdong {
    index  = async (req, res) => {
        try {
            const hopdongData = await HopDong.find().lean();
            console.log(hopdongData);
            res.render('hopdong', { title: 'Hợp Đồng', data: hopdongData });
        } catch (err) {
            console.log(err);
            res.status(500).send('Lỗi khi lấy dữ liệu hợp đồng');
        }
    }

    // Hiển thị form thêm hợp đồng
    addhopdong = async (req, res) => {
        try {
            // Lấy danh sách nhà cung cấp từ cơ sở dữ liệu
            const nhaCungCapData = await NhaCungCap.find().lean();

            // Truyền dữ liệu này vào view
            res.render('add-hopdong', { title: 'Thêm Hợp Đồng', data :  nhaCungCapData });
        } catch (err) {
            console.log(err);
            res.status(500).send('Lỗi khi lấy dữ liệu nhà cung cấp');
        }
    }


    // Tạo hợp đồng mới
    createhopdong = async (req, res) => {
        const { MaHD, NgayLap, MaNCC, TongGiaTri, TrangThai } = req.body;
        
        // Tạo đối tượng hợp đồng mới
        const newHopDong = new HopDong({
            MaHD,
            NgayLap,
            MaNCC,
            TongGiaTri,
            TrangThai,
        });
    
        try {
            // Lưu hợp đồng vào cơ sở dữ liệu
            await newHopDong.save();
            // Sau khi lưu thành công, chuyển hướng về danh sách hợp đồng
            res.redirect('/hopdong');
        } catch (err) {
            console.log(err);
            // Trường hợp có lỗi khi lưu hợp đồng, trả về lỗi
            res.status(500).send('Lỗi khi tạo hợp đồng');
        }
    };

    // Hiển thị form chỉnh sửa hợp đồng
    edithopdong = async (req, res) => {
        const hopdongData = await HopDong.findById(req.params.id).lean();
        const nhaCungCapData = await NhaCungCap.find().lean();
        console.log(nhaCungCapData);
        res.render('edit-hopdong', { title: 'Chỉnh Sửa Hợp Đồng', data: hopdongData, ncc : nhaCungCapData });
    }

    // Cập nhật hợp đồng
    updatehopdong = (req, res) => {
        const { id } = req.params;
        const { MaHD, NgayLap, MaNCC, TongGiaTri, TrangThai } = req.body;

        HopDong.findByIdAndUpdate(id, {
            MaHD,
            NgayLap,
            MaNCC,
            TongGiaTri,
            TrangThai
        })
            .then(() => {
                res.redirect('/hopdong'); // Chuyển hướng về trang danh sách hợp đồng
            })
            .catch(err => {
                res.status(500).send('Lỗi khi cập nhật hợp đồng');
            });
    }

    // Xóa hợp đồng
    deletehopdong = (req, res) => {
        const { id } = req.params;

        HopDong.findByIdAndDelete(id)
            .then(() => {
                res.redirect('/hopdong'); // Chuyển hướng về trang danh sách hợp đồng
            })
            .catch(err => {
                res.status(500).send('Lỗi khi xóa hợp đồng');
            });
    }
}
module.exports = new hopdong();