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
        oisVersion: "1.0",

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
                    regionName: "<insert region name here>", // For example: "Southeastern Asia"
                    countryCode: "<insert country code here>", // ISO 3166-1 alpha-2. For example: "TH" for Thailand
                    countryName: "<insert country name here>", // For example: "Singapore"
                    cityName: "<insert city name here>" // For example: "Singapore"
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

            // OPTIONAL: The establishment story of the business. Used for branding and marketing.
            orgEstablishmentStory: {
                // Both plain text and Schema.org description are supported.
                // Example plainText: "Founded in 2010, our company has grown from a small startup to a leading software development firm.",
                // Example keywords: "founded2010, growthStory, softwareDevelopment",
                plainText: "<insert plain text description here>",
                keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
            },

            // OPTIONAL: The establishment year of the business.
            orgEstablishmentYear: 2010, // Example year, must be a number.

            // OPTIONAL: List of success stories related to the business.
            orgSuccessStories: [
                {
                    // REQUIRED: Title of the success story.
                    title: "<insert success story title here>",

                    // OPTIONAL: Image URL representing the success story.
                    imageURL: "<insert success story image URL here>",

                    // REQUIRED: The date when the success story was achieved.
                    achievedAt: "<insert achievement date here>", // Example date format: "2023-05-15T00:00:00Z"

                    // REQUIRED: The organization involved in the success story.
                    orgInvolvedName: "<insert involved organization name here>",
                    orgInvolvedURL: "<insert involved organization URL here>",
                    orgInvolvedCountryCode: "<insert involved organization country code here>",

                    // REQUIRED: Description of the success story.
                    description: {
                        // Both plain text and Schema.org description are supported.
                        // Example plainText: "Successfully delivered a complex e-commerce platform for a major retailer.",
                        // Example keywords: "ecommercePlatform, majorRetailer, successfulDelivery",
                        plainText: "<insert plain text description here>",
                        keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                    }
                }
            ],

            // OPTIONAL: List of awards and recognitions received by the business.
            orgAwardsAndRecognitions: [
                {
                    // REQUIRED: Title of the award or recognition.
                    title: "<insert award title here>",
                    
                    // REQUIRED: The date when the award or recognition was received.
                    receivedAt: "<insert received date here>", // Example date format: "2022-11-20T00:00:00Z"
                    
                    // REQUIRED: The organization that issued the award or recognition.
                    issuedBy: "<insert issuing organization name here>",
                    issuedByURL: "<insert issuing organization URL here>",
                    issuedByCountryCode: "<insert issuing organization country code here>",
                    
                    // REQUIRED: Description of the award or recognition.
                    description: {
                        // Both plain text and Schema.org description are supported.
                        // Example plainText: "Awarded 'Best Software Development Company' by Tech Magazine.",
                        // Example keywords: "bestSoftwareCompany, techMagazine, industryRecognition",
                        plainText: "<insert plain text description here>",
                        keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                    }
                }
            ],
            // OPTIONAL: The logo of the business.
            orgLogo: "<insert business logo URL here>",

            // OPTIONAL: The motto of the business website.
            orgWebsiteMotto: "<insert business website motto here>",
            
            // OPTIONAL: The full background image URL for the first page of the business website.
            orgFirstPageFullBackgroundImageURL: "<insert first page background image URL here>"
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

                // OPTIONAL: The readiness level of the SKU for commercial use.
                // Useful for researchers, inventors, and R&D teams to showcase early-stage solutions.
                skuReadinessLevel: {
                    // Both plain text and Schema.org keywords are supported.
                    // Example plainText: "concept" - Early research/prototype stage, not yet validated
                    // Example plainText: "viable" - Proven feasibility but not production-ready
                    // Example plainText: "production" - Fully ready for commercial deployment
                    // Example plainText: "deprecated" - End-of-life or being phased out
                    // Example keywords for concept: "concept, prototype, experimental, research"
                    // Example keywords for viable: "viable, preProduction, beta, pilotTesting"
                    // Example keywords for production: "production, commercial, generallyAvailable, stable"
                    // Example keywords for deprecated: "deprecated, endOfLife, legacy, phaseOut"
                    plainText: "<insert readiness level here>",
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

                // REQUIRED: List of attributes defining the SKU.
                skuAttributes: [
                    {
                        // REQUIRED: The name of the attribute.
                        attributeName: "<insert attribute name here>",

                        // REQUIRED: The value of the attribute.
                        attributeValue: "<insert attribute value here>",

                        // OPTIONAL: The value range of the attribute.
                        attributeValueRange: {
                            // OPTIONAL: The minimum value of the attribute.
                            minValue: 10, // Example number, can be integer or float.
                            // OPTIONAL: The maximum value of the attribute.
                            maxValue: 100 // Example number, can be integer or float.
                        },
                        
                        // REQUIRED: The unit of the attribute. Prefer standard or scientific units.
                        // For e.g., "USD", "hours", "pieces", "grams", "liters", etc.
                        attributeUnit: "<insert attribute unit here>",
                        
                        // OPTIONAL: The measurement goal concept of the attribute.
                        attributeMeasurementGoal: {
                            // Both plain text and Schema.org keywords are supported.
                            // Example plainText: "accuracy",
                            // Example keywords: "accuracy, precision, reliability",
                            plainText: "<insert plain text description here>",
                            keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                        }
                    }
                ],

                // REQUIRED: List of actions related to the SKU.
                // There can be multiple actions per SKU. 
                // For e.g., "purchase", "subscribe", "rent", "trial", etc.
                skuActions: [
                    {
                        // OPTIONAL: The unique identifier for the action inside the SKU.
                        // This will help to uniquely identify the action if there are multiple actions.
                        // Very useful for future automation and referencing.
                        // If specified, must be UUID format and unique across all SKUs in the business.
                        actionUniqueId: "<insert action unique ID here>",

                        // REQUIRED: The action type concept.
                        // Both plain text and Schema.org keywords are supported.
                        // Example plainText: "purchase",
                        // Example keywords: "purchase, buy, order",
                        actionTypeConcept: {
                            plainText: "<insert plain text description here>",
                            keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                        },

                        // OPTIONAL: Description of the action prerequisites.
                        actionPrerequisites: [
                            {
                                // Both plain text and Schema.org description are supported.
                                // Example plainText: "Customer must create an account before purchasing.",
                                // Example keywords: "accountCreation, customerRegistration",
                                plainText: "<insert plain text description here>",
                                keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                            }
                        ],

                        // OPTIONAL: Description of the action conditions.
                        actionConditionTerms: [
                            {
                                // Both plain text and Schema.org description are supported.
                                // Example plainText: "All sales are final and non-refundable.",
                                // Example keywords: "finalSale, nonRefundable",
                                plainText: "<insert plain text description here>",
                                keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                            }
                        ],

                        // OPTIONAL: Lead time details for the action.
                        actionLeadTime: {
                            // OPTIONAL: The minimum lead time required to perform the action.
                            minLeadTimeInHours: 24, // Example number, must be an integer.
                            // OPTIONAL: The maximum lead time required to perform the action.
                            maxLeadTimeInHours: 72 // Example number, must be an integer.
                        },

                        // OPTIONAL: The URL to perform the action.
                        // For example: "https://example.com/purchase/sku123"
                        actionURL: "<insert action URL here>",

                        // OPTIONAL: The HTTP method to perform the action.
                        // Useful for API-based actions.
                        actionMethod: "<insert action method here>", // For example: "POST", "GET", "PUT", etc.

                        // OPTIONAL: The payload details for the action.
                        actionPayload: {
                            // OPTIONAL: The payload format for the action.
                            // For example: "application/json", "application/xml", etc.
                            payloadFormat: "<insert payload format here>",
                            
                            // OPTIONAL: The payload schema for the action.
                            // For example: JSON Schema, XML Schema, etc.
                            payloadSchema: "<insert payload schema here>"
                        }
                    }
                ],

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
                
                // OPTIONAL: Problems that the SKU solves. Useful for marketing and sales.
                skuSolvesProblems: [
                    {
                        // Both plain text and Schema.org description are supported.
                        // Example plainText: "Helps businesses establish a strong online presence.",
                        // Example keywords: "onlinePresence, digitalMarketing, webDevelopment",
                        plainText: "<insert plain text description here>",
                        keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                    }
                ],

                // OPTIONAL: Possible applications of the SKU. Useful for marketing and sales.
                skuPossibleApplications: [
                    {
                        // Both plain text and Schema.org description are supported.
                        // Example plainText: "Ideal for startups looking to launch their first mobile app.",
                        // Example keywords: "startups, mobileAppLaunch, appDevelopment",
                        plainText: "<insert plain text description here>",
                        keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                    }
                ],

                // OPTIONAL: Possible challenges when using the SKU. Useful for marketing and sales.
                skuPossibleChallenges: [
                    {
                        // Both plain text and Schema.org description are supported.
                        // Example plainText: "May require additional training for staff to utilize effectively.",
                        // Example keywords: "staffTraining, effectiveUtilization",
                        plainText: "<insert plain text description here>",
                        keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
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