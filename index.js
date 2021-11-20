const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs   = require('fs');

// Get document, or throw exception on error
try {
    const swaggerDocument = yaml.load(fs.readFileSync('swagger.yaml', 'utf8'));
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (e) {
    console.log(e.message);
}

// Listen for connections
app.listen(8000, () => {
    console.log(`App listening at http://localhost:8000`)
})

