exports.getHome = (req, res, next) => {
    res.render('pages/home', {
        pageTitle: 'Canady Mfg Home',
        showHomeLink: false
    });
};

exports.getCapabilities = (req, res, next) => {
    res.render('pages/capabilities', {
        pageTitle: 'Our Capabilities',
        showHomeLink: true
    });
};

exports.getQuality = (req, res, next) => {
    res.render('pages/quality', {
        pageTitle: 'Quality',
        showHomeLink: true
    });
};

exports.getQualityPolicy = (req, res, next) => {
    res.render('pages/quality-policy', {
        pageTitle: 'Quality Policy',
        showHomeLink: true
    });
};

exports.getCodeofEthics = (req, res, next) => {
    res.render('pages/code-of-ethics', {
        pageTitle: 'Code of Ethics',
        showHomeLink: true
    });
};

exports.getTermsConditions = (req, res, next) => {
    res.render('pages/terms', {
        pageTitle: 'Terms & Conditions',
        showHomeLink: true
    });
};

exports.getCertifications = (req, res, next) => {
    res.render('pages/certifications', {
        pageTitle: 'Certifications',
        showHomeLink: true
    });
};