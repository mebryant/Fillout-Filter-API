const axios = require('axios').default;

const axiosConfig = {
    headers: { Authorization: `Bearer ${process.env.FILLOUT_API_KEY}`}
}

async function getByFormId(req, res) {
    const { formId } = req.params;

    await axios.get(`${process.env.FILLOUT_BASE_URL}/v1/api/forms/${formId}`, axiosConfig)
        .then((data) => {
            res.send(data.data);
        })
        .catch((e) => {
            res.status(400).send(e.message);
        })
}

module.exports = {
    getByFormId
}
