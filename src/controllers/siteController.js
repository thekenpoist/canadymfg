exports.getHome = (req, res, next) => {
    res.render('home', {
        pageTitle: 'Canady Mfg Home',
        showHomeLink: false
    })
}