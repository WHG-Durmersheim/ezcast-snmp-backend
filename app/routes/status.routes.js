// Routes of the User REST endpoint

module.exports = (app) => {
    //Retrieve availability
    app.get('/api/v1/status', (req, res) => {
        res.status(200).send({
            success: true,
            version: '0.0.1'
        })
    })
}
