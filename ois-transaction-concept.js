var oisTransactionConcept = {

    // REQUIRED: Metadata about this transaction request file.
    metadata: {
        // REQUIRED: Unique identifier for this transaction request.
        // Must be UUID format for tracking and referencing.
        transactionRequestId: "<insert transaction request UUID here>",

        // REQUIRED: The OIS version this transaction concept is compatible with.
        oisVersion: "1.0",

        // REQUIRED: Timestamps for transaction lifecycle tracking.
        // Example date format: "2026-01-31T12:00:00Z"
        createdAt: "<insert creation date here>",
        updatedAt: "<insert update date here>",

        // REQUIRED: Current state of the transaction request.
        // Allowed values: "draft", "submitted", "acknowledged", "quoted", "accepted", "rejected", "completed", "cancelled"
        transactionState: "<insert transaction state here>",

        // OPTIONAL: The platform or agent that generated this transaction request.
        // Must be UUID if provided, useful for tracking automated agent activity.
        generatedBy: "<insert generator ID here>"
    },

    // REQUIRED: Reference to the target business OIS file.
    targetService: {
        // REQUIRED: The full URL to the business's ois.json file.
        // Example: "https://example.com/ois.json"
        oisURL: "<insert target OIS URL here>",

        // REQUIRED: Business name from the target OIS for human reference.
        orgName: "<insert business name here>",

        // OPTIONAL: Hash of the target OIS file for version verification.
        // Ensures the client is requesting against a specific version.
        oisFileHash: "<insert SHA-256 hash here>"
    },

    // REQUIRED: Information about the client making the request.
    clientInfo: {
        // REQUIRED: Client name or organization name.
        clientName: "<insert client name here>",

        // REQUIRED: Contact information for transaction communication.
        clientContact: {
            // REQUIRED: Email address for transaction updates.
            email: "<insert client email here>",
            // OPTIONAL: Phone number for urgent communication.
            phone: "<insert client phone here>",
            // OPTIONAL: Physical address if needed for delivery or legal purposes.
            address: "<insert client address here>"
        },

        // OPTIONAL: Client's OIS URL if they have one.
        // Useful for B2B transactions and establishing graph relationships.
        clientOISURL: "<insert client OIS URL here>",

        // OPTIONAL: Client organization registration details for verification.
        clientRegistrationID: "<insert client registration ID here>",
        clientCountryOfRegistration: "<insert country code here>", // ISO 3166-1 alpha-2

        // OPTIONAL: Additional context about the client for relationship building.
        clientDescription: {
            plainText: "<insert plain text description here>",
            keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
        }
    },

    // REQUIRED: List of requested items from the target business.
    requestedItems: [
        {
            // REQUIRED: Unique identifier for this line item in the request.
            // Must be UUID format, useful for tracking individual items in multi-item requests.
            lineItemId: "<insert line item UUID here>",

            // REQUIRED: The SKU ID from the target business's ois.json.
            skuID: "<insert SKU ID here>",

            // REQUIRED: The action unique ID from the SKU's actions array.
            // Must match an actionUniqueId defined in the target OIS file.
            actionUniqueId: "<insert action unique ID here>",

            // REQUIRED: The quantity being requested.
            quantity: 10, // Example number, can be integer or float.

            // REQUIRED: The unit name for the quantity.
            // Should match either skuAtomicUnitName or one of skuOtherUnits from the target SKU.
            unitName: "<insert unit name here>",

            // OPTIONAL: Requested delivery or fulfillment timeline.
            requestedTimeline: {
                // OPTIONAL: Earliest acceptable fulfillment date.
                earliestDate: "<insert earliest date here>", // Example: "2026-02-01T00:00:00Z"
                // OPTIONAL: Latest acceptable fulfillment date.
                latestDate: "<insert latest date here>" // Example: "2026-02-15T23:59:59Z"
            },

            // OPTIONAL: Budget or pricing expectations.
            budgetExpectation: {
                // OPTIONAL: Maximum price per unit the client is willing to pay.
                maxPricePerUnit: 100.00, // Example number, can be integer or float.
                // OPTIONAL: Currency code (ISO 4217).
                currency: "USD", // Example: "USD", "EUR", "THB", etc.
                // OPTIONAL: Total budget for this line item.
                totalBudget: 1000.00
            },

            // OPTIONAL: Special requirements or customization requests.
            specialRequirements: [
                {
                    plainText: "<insert plain text description here>",
                    keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                }
            ],

            // OPTIONAL: Delivery or service location details.
            deliveryLocation: {
                // OPTIONAL: Delivery address if different from client address.
                address: "<insert delivery address here>",
                // OPTIONAL: Country code for delivery location.
                countryCode: "<insert country code here>", // ISO 3166-1 alpha-2
                // OPTIONAL: City name for delivery location.
                cityName: "<insert city name here>",
                // OPTIONAL: Special delivery instructions.
                deliveryInstructions: "<insert delivery instructions here>"
            },

            // OPTIONAL: Priority level for this line item.
            priority: {
                plainText: "<insert priority level here>", // Example: "urgent", "normal", "low"
                keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
            }
        }
    ],

    // OPTIONAL: Overall transaction notes and context.
    transactionNotes: {
        // OPTIONAL: General notes about the entire transaction.
        generalNotes: "<insert general notes here>",

        // OPTIONAL: Business justification for the request.
        businessJustification: {
            plainText: "<insert plain text justification here>",
            keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
        },

        // OPTIONAL: Approval or authorization information.
        approvalInfo: {
            // OPTIONAL: Name of the person who approved this request.
            approvedBy: "<insert approver name here>",
            // OPTIONAL: Approval date.
            approvedAt: "<insert approval date here>", // Example: "2026-01-08T10:30:00Z"
            // OPTIONAL: Purchase order number or reference.
            purchaseOrderNumber: "<insert PO number here>"
        }
    },

    // OPTIONAL: Response from the business (populated by the service provider).
    businessResponse: {
        // OPTIONAL: Response timestamp.
        respondedAt: "<insert response date here>", // Example: "2026-01-09T14:00:00Z"

        // OPTIONAL: Response status.
        responseStatus: "<insert response status here>", // Example: "acknowledged", "quoted", "accepted", "rejected"

        // OPTIONAL: Quote or pricing information provided by the business.
        quote: {
            // OPTIONAL: Total quoted price.
            totalPrice: 950.00, // Example number
            // OPTIONAL: Currency code.
            currency: "USD",
            // OPTIONAL: Quote validity period.
            validUntil: "<insert quote expiry date here>", // Example: "2026-01-20T23:59:59Z"
            // OPTIONAL: Breakdown by line item.
            lineItemQuotes: [
                {
                    lineItemId: "<insert line item UUID here>",
                    pricePerUnit: 95.00,
                    totalPrice: 950.00,
                    notes: "<insert quote notes here>"
                }
            ]
        },

        // OPTIONAL: Estimated lead time from the business.
        estimatedLeadTime: {
            minLeadTimeInHours: 48,
            maxLeadTimeInHours: 96
        },

        // OPTIONAL: Business response notes.
        responseNotes: "<insert business response notes here>",

        // OPTIONAL: Alternative suggestions if original request cannot be fulfilled.
        alternativeSuggestions: [
            {
                skuID: "<insert alternative SKU ID here>",
                reason: {
                    plainText: "<insert reason for alternative here>",
                    keywords: ["<insert keyword 1 here>", "<insert keyword 2 here>"]
                }
            }
        ]
    },

    // OPTIONAL: Transaction history and audit trail.
    transactionHistory: [
        {
            // REQUIRED: Timestamp of the event.
            timestamp: "<insert timestamp here>", // Example: "2026-01-08T03:23:00Z"
            
            // REQUIRED: Event type.
            eventType: "<insert event type here>", // Example: "created", "submitted", "quoted", "accepted", "completed"
            
            // OPTIONAL: Actor who performed the action.
            actor: "<insert actor name or system here>",
            
            // OPTIONAL: Event notes or description.
            notes: "<insert event notes here>"
        }
    ],

    // OPTIONAL: Attachments or supporting documents.
    attachments: [
        {
            // REQUIRED: Attachment filename.
            filename: "<insert filename here>",
            // REQUIRED: Attachment URL.
            url: "<insert attachment URL here>",
            // OPTIONAL: File type or MIME type.
            fileType: "<insert file type here>", // Example: "application/pdf", "image/png"
            // OPTIONAL: Description of the attachment.
            description: "<insert attachment description here>"
        }
    ]
};
