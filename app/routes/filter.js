const express = require('express');
const filterService = require('../services/filter');
const router = express.Router();

router.get('/:formId/filteredResponses', async (req, res) => {
    return await filterService.getByFormId(req, res);
});

module.exports = router;