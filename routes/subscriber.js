

function substituteReferenceData(req, res) {
    const {referenceData} = req.body;
    delete req.body.referenceData;
    const response = interpolate(JSON.stringify(req.body.payload), referenceData); // To substitute ref data into payload
    res.status(200).json(JSON.parse(response));
}

function interpolate(template, params) {
    for (let key in params) {
        template = template.replace(new RegExp('\\{' + key + '\\}', 'g'), params[key])
    }
    return template;
}

module.exports = {substituteReferenceData};