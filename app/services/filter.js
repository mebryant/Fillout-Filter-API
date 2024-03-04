const axios = require('axios').default;

const axiosConfig = {
    headers: { Authorization: `Bearer ${process.env.API_KEY}`}
}

async function getByFormId(formId) {
    const result = await axios.get(`${process.env.FILLOUT_BASE_URL}/v1/api/forms/${formId}`, axiosConfig).then((data) => data.data)
    return result;
}

module.exports = {
    getByFormId
}
