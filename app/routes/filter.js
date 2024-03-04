const express = require('express');
const filterService = require('../services/filter');
const router = express.Router();

router.get('/:formId/filteredResponses', async (req, res) => {
    const { formId } = req.params;
    res.send(await filterService.getByFormId(formId));
});

module.exports = router;