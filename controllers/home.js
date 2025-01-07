class HomeController {
    index(req, res) {
        res.render('home', { title: 'Express' });
    }
}
module.exports = new HomeController();