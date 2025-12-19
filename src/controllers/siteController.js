exports.getHome = (req, res, next) => {
    res.render('pages/home', {
        pageTitle: 'Canady Mfg Home',
        showHomeLink: false
    })
}

exports.getCapabilities = (req, res, next) => {
    res.render('pages/capabilities', {
        pageTitle: 'Our Capabilities',
        showHomeLink: true
    })
}

