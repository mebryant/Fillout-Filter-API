const axios = require('axios').default;

async function getByFormId(req, res) {
    const { formId } = req.params;

    await axios.get(`${process.env.FILLOUT_BASE_URL}/v1/api/forms/${formId}`, {
        headers: { Authorization: `Bearer ${process.env.FILLOUT_API_KEY}`}
    })
        .then((data) => {
            res.send(data.data);
        })
        .catch((e) => {
            console.log(e.response.data);
            res.status(e.response.data.statusCode).send(e.response.data.message);
        })
}

module.exports = {
    getByFormId
}
