const options = {
    definition: {
        openapi: "3.1.0",
        info: {
          title: "Fillout Full-Stack Engineering Assignment",
          version: "1.0.0",
          description:
            "This is a simple CRUD API application made with Express and documented with Swagger",
          license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
          },
          contact: {
            name: "Mike Bryant",
            email: "mbryant36@gmail.com",
          },
        },
        servers: [
          {
            url: "http://localhost:3000",
            description: "Localhost"
          },
          {
            url: "https://fillout-filter-api-ejgt.onrender.com",
            description: "Cloud URL"
          }
        ],
        paths: {
            "/{formId}/filteredResponses":{
                get: {
                    tags: [
                        "Filter"
                    ],
                    summary: "Returns a filtered responses for given form ID",
                    description: "Returns default value for now",
                    parameters: [{
                        name: "formId",
                        in: "path",
                        description: "Form ID",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }],
                    responses: {
                        '200' : {
                            description: "Successful",
                            content: {
                               "application/json": {
                                    schema: {
                                        type: "string"
                                    }
                               }
                            }
                        }
                    }
                }
            }
        }
      },
      apis: ["./routes/*.js"],
}

const base_url = "/api-docs";

module.exports = {
    options,
    base_url
}