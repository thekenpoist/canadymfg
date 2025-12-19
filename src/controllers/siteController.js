exports.getHome = (req, res, next) => {
    res.render('pages/home', {
        pageTitle: 'Canady Mfg Home',
        showHomeLink: false
    })
}