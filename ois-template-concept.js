var oisTemplateConcept = {

    // REQUIRED: Used for checking for compatibility with OIS repository.
    metadata: {
        // OPTIONAL: Must be UUID, this will be used to check against OIS 
        // repository, determining that it is registered generator or not.
        generatedBy: "<insert generator ID here>", 

        // REQUIRED: The website where the ois.json is hosted. 
        // For example: "https://example.com"
        websiteURL: "<insert website here>",
        
        // REQUIRED: OIS version this template concept is compatible with.
        oisVersion: "<insert OIS version here>",

        // REQUIRED: Specifies when the ois.json was created and updated.
        // Example date format: "2026-01-31T12:00:00Z"
        createdAt: "<insert creation date here>",
        updatedAt: "<insert update date here>",
    },

    // OPTIONAL: Put anything about Schema.org context here. It can be 
    // anything from an empty object to a full JSON-LD context.
    schemaOrgContext: {},

    // REQUIRED: The main ois.json structure explaining about the business.
    oisContext : {

    }
};