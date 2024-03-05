const axios = require('axios').default;

async function getByFormId(req, res) {
    const { formId } = req.params;
    const queryParams = req.query;
    const filters = filtersToObject(queryParams.filters)

    if(!formId) {
        res.status(400).send('"formId" is required!')
    }

    console.log(`GET :: ${process.env.FILLOUT_BASE_URL}/v1/api/forms/${formId}/submissions?${formatQueryParams(queryParams)}`)

    await axios.get(`${process.env.FILLOUT_BASE_URL}/v1/api/forms/${formId}/submissions?${formatQueryParams(queryParams)}`, {
        headers: { Authorization: `Bearer ${process.env.FILLOUT_API_KEY}`}
    })
        .then((data) => {
            const originalSize = data.data.totalResponses;
            const limit = queryParams.limit ? queryParams.limit : 150;
            const responses = data.data.responses.filter((response) => filterResponseByQuestions(response.questions, filters));

            res.send({
                responses,
                totalResponses: responses.length,
                pageCount: Math.ceil(originalSize/limit)
            });
        })
        .catch((e) => {
            if(e.response.data){
                res.status(e.response.data.statusCode).send(e.response.data.message);
            } else {
                res.status(400).send(e);
            }
        })
}

function formatQueryParams(params){
    let queryString = "";

    Object.keys(params).forEach((key) => {
        if(params[key] && key != 'filters') {
            queryString += `${key}=${params[key]}`
        }
    })

    return queryString
}

function parseCondition(condition, ob1, ob2) {
    switch(condition) {
        case "equals": 
            return ob1 == ob2;
        case "does_not_equal":
            return ob1 != ob2;
        case "greater_than":
            return ob1 > ob2;
        case "less_than":
            return ob1 < ob2;
        default:
            throw new Error("Condition invalid!")

    }
}

function filterResponseByQuestions(questions, filters){
    const results = filters.map( filter => {
        const question = questions.find( question => question.id == filter.id);
        return parseCondition(filter.condition, question.value, filter.value)
    })

    return !results.includes(false)
}

function filtersToObject(filter){
    if(Array.isArray(filter)){
        return filter.map(f => JSON.parse(f))
    } else {
        return [JSON.parse(filter)]
    }
}

module.exports = {
    getByFormId
}
