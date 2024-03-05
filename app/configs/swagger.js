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
                              type: "string",
                              example: "cLZojxk94ous"
                          }
                      },
                      {
                        name: "limit",
                        in: "query",
                        description: "Limit. Number between 1 and 150. Default is 150.",
                        required: false,
                        schema: {
                            type: "integer"
                        }
                      },
                      {
                        name: "afterDate",
                        in: "query",
                        description: "Date string to filter responses submitted after this date. Fmt: YYYY-MM-DDTHH:mm:ss.sssZ",
                        required: false,
                        schema: {
                            type: "date"
                        }
                      },
                      {
                        name: "beforeDate",
                        in: "query",
                        description: "Date string to filter responses submitted before this date. Fmt: YYYY-MM-DDTHH:mm:ss.sssZ",
                        required: false,
                        schema: {
                            type: "date"
                        }
                      },
                      {
                        name: "offset",
                        in: "query",
                        description: "Starting position from which to fetch the responses. Default is 0.",
                        required: false,
                        schema: {
                            type: "integer"
                        }
                      },
                      {
                        name: "status",
                        in: "query",
                        description: "Pass in_progress to get a list of in-progress (unfinished) submissions. By default, only finished submissions are returned.",
                        required: false,
                        schema: {
                            type: "string",
                            enum: ["in_progress"]
                        }
                      },
                      {
                        name: "includeEditLink",
                        in: "query",
                        description: "Pass true to include a link to edit the submission as editLink",
                        required: false,
                        schema: {
                            type: "string"
                        }
                      },
                      {
                        name: "sort",
                        in: "query",
                        description: "Can be asc or desc, defaults to asc.",
                        required: false,
                        schema: {
                            type: "string",
                            enum: ["asc", "desc"]
                        }
                      },
                      {
                        name: "filters",
                        in: "query",
                        description: "Each of these filters should be applied like an AND in a 'where' clause",
                        required: false,
                        schema: {
                            type: "array",
                            items: {
                              type: "object",
                              properties: {
                                id: {
                                  type: "string",
                                  example: "bE2Bo4cGUv49cjnqZ4UnkW"
                                },
                                condition: {
                                  type: "string",
                                  enum: ["equals", "does_not_equal", "greater_than", "less_than"]
                                },
                                value: {
                                  type: "string",
                                  example: "Johnny"
                                }
                              }
                            }
                        }
                      } 
                    ],
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
                        },
                        '400' : {
                          description: "Bad Request",
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