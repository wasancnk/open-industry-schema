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

    // OPTIONAL: List of additional OIS URLs related to this business.
    // Useful for modular changes or multiple branches of the same business.
    additionalOISURLs: [
        {
            // REQUIRED: The additional OIS URL. 
            // For example: "https://example.com/branch1/ois.json"
            url: "<insert additional OIS URL here>",
            description: {
                // Both plain text and Schema.org description are supported.
                // Example plainText: "This branch specializes in mobile app development.",
                // Example keywords: "mobileApps, appDevelopment, iOS, Android",
                plainText: "<insert plain text description here>",
                keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
            }
        }
    ],

    // OPTIONAL: Put anything about Schema.org context here. It can be 
    // anything from an empty object to a full JSON-LD context.
    schemaOrgContext: {},

    // REQUIRED: The main ois.json structure explaining about the business.
    // RULE: All `keywords` fields must be an array of strings, and allowed 
    // up to 5 keywords only.
    oisContext : {
        orgMetadata: {
            // REQUIRED: The name of the business.
            orgName: "<insert business name here>",
            
            // REQUIRED: Industry type of the business.
            orgIndustry: {
                // Both plain text and Schema.org keywords are supported.
                // Example plainText: "Software Development",
                // Example keywords: "softwareDevelopment, ITServices, technologySolutions",
                plainText: "<insert plain text description here>",
                keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
            },
            
            // REQUIRED: A short description of the business.
            orgDescription: {
                // Both plain text and Schema.org description are supported.
                // Example plainText: "We are a leading software development company specializing in web and mobile applications.",
                // Example keywords: "softwareDevelopment, webDevelopment, mobileApps, ITServices, technologySolutions",
                plainText: "<insert plain text description here>",
                keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
            },

            orgContact: {
                // REQUIRED: The email address of the business contact.
                email: "<insert business contact email here>",
                // OPTIONAL: The phone number of the business contact.
                phone: "<insert business contact phone number here>",
                // OPTIONAL: The physical address of the business contact.
                address: "<insert business contact address here>"
            },
            
            // REQUIRED: List of service areas the business operates in.
            // See region options at https://en.wikipedia.org/wiki/United_Nations_geoscheme
            // Format: "<Region>, <Country>, <City>"
            // Example: "South-eastern Asia, Singapore, Singapore"
            orgServiceAreas: [
                "<insert service area 1 here>",
                "<insert service area 2 here>"
            ],
            
            // OPTIONAL: The logo of the business.
            orgLogo: "<insert business logo URL here>"
        },

        // REQUIRED: List of SKUs (products or services) offered by the business.
        skus: [
            {
                // REQUIRED: The unique identifier for the SKU inside the business.
                skuID: "<insert SKU ID here>",
                
                // REQUIRED: The name of the SKU.
                skuName: "<insert SKU name here>",
                
                // REQUIRED: A description of the SKU.
                skuDescription: {
                    // Both plain text and Schema.org description are supported.
                    // Example plainText: "Our premium web development service offers custom solutions tailored to your business needs.",
                    // Example keywords: "webDevelopment, customSolutions, premiumService",
                    plainText: "<insert plain text description here>",
                    keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                },

                // REQUIRED: The unit name of the SKU.
                skuUnit: "<insert SKU unit name here>",

                // OPTIONAL: The price of the SKU.
                skuPrice: {
                    // The amount in the smallest currency unit (e.g., cents).
                    amount: "<insert amount here>",
                    // The currency code in ISO 4217 format (e.g., USD, EUR).
                    currency: "<insert currency code here>"
                },
            },
        ]
    }
};