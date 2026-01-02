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
        orgMetadataMain: {
            // REQUIRED: The name of the business.
            orgName: "<insert business name here>",

            // REQUIRED: The official registration ID of the business.
            orgRegistrationID: "<insert business registration ID here>",

            // REQUIRED: The country of registration of the business.
            // Use ISO 3166-1 alpha-2 country codes. For example: "US" for United States, "SG" for Singapore.
            orgCountryOfRegistration: "<insert country code here>",
            
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
            // For region names, see options at https://en.wikipedia.org/wiki/United_Nations_geoscheme
            // For country codes, use ISO 3166-1 alpha-2 country codes.
            orgServiceAreas: [
                {
                    regionName: "<insert region name here>",
                    countryName: "<insert country name here>",
                    cityName: "<insert city name here>"        
                }
            ],

            // OPTIONAL: The vision statement of the business.
            orgVisionStatement: {
                // Both plain text and Schema.org description are supported.
                // Example plainText: "To be the global leader in innovative software solutions.",
                // Example keywords: "innovation, globalLeader, softwareSolutions",
                plainText: "<insert plain text description here>",
                keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
            },

            // OPTIONAL: The mission statement of the business.
            orgMissionStatement: {
                // Both plain text and Schema.org description are supported.
                // Example plainText: "To deliver high-quality software that empowers businesses to succeed in the digital age.",
                // Example keywords: "highQuality, empowerBusinesses, digitalSuccess",
                plainText: "<insert plain text description here>",
                keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
            },
            
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

                // REQUIRED: Atomic unit name of the SKU, must be name of smallest unit.
                // For example: "hour", "item", "session", "piece", "gram", milliliter", etc.
                skuAtomicUnitName: "<insert atomic unit name here>",

                // REQUIRED: Atomic unit type of the SKU, must be type of smallest unit.
                skuAtomicUnitTypeConcept: {
                    // Both plain text and Schema.org keywords are supported.
                    // Example plainText: "hourlyRate",
                    // Example keywords: "hourlyRate, timeBased, serviceUnit",
                    plainText: "<insert plain text description here>",
                    keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                },

                // OPTIONAL: List of alternative units for the SKU.
                skuOtherUnits: [
                    {
                        // REQUIRED: The name of the alternative unit.
                        // `amountPerAtomicUnit` must be defined if this is defined.
                        unitName: "<insert alternative unit name here>",
                        amountPerAtomicUnit: 100, // Example number, can be integer or float.
                        
                        // OPTIONAL: The amount range per atomic unit for this alternative unit.
                        // Useful for non-linear conversion rates. For e.g., consulting project.
                        amountRangePerAtomicUnit: {
                            // OPTIONAL: The minimum amount per atomic unit for this alternative unit.
                            minAmount: 70,
                            // OPTIONAL: The maximum amount per atomic unit for this alternative unit.
                            maxAmount: 100
                        },

                        // OPTIONAL: Description of the alternative unit.
                        unitDescription: {
                            // Both plain text and Schema.org description are supported.
                            // Example plainText: "Bulk package for small businesses.",
                            // Example keywords: "bulkPackage, smallBusinesses, discountedRate",
                            plainText: "<insert plain text description here>",
                            keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                        },

                        // OPTIONAL: Suitable scenario for the alternative unit.
                        // Both plain text and Schema.org keywords are supported.
                        // Example plainText: "suitable for small businesses",
                        suitableForScenario: {
                            plainText: "<insert plain text description here>",
                            keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                        }
                    }
                ],

                // OPTIONAL: Define a dedicated organization managing this SKU.
                // Useful for white-label, reseller, multi-brand, OEM, partnership, franchise, and branch-specific.
                // Follow the same structure as `orgMetadataMain`.
                orgMetadataDedicated: {},
                
                // OPTIONAL: The URL to the dedicated org metadata ois.json file.
                orgMetadataDedicatedURL: "<insert dedicated org metadata URL here>",

            },
        ]
    }
};