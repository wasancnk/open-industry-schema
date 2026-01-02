# Open Industry Schema (OIS) v1.0

**Open Industry Schema (OIS)** is an open, public data schema that allows businesses to express their identity, offerings, capabilities, and interactions in a **machine-readable, AI-native format**.

OIS is designed to make businesses instantly understandable by:
- AI agents
- search engines
- marketplaces
- procurement systems
- automation platforms

The goal is simple: **reduce discovery, integration, and coordination friction across the global economy**.

---

## Why OIS Exists

Today, business information is scattered across:
- websites optimized for humans
- PDFs and catalogs
- proprietary marketplaces
- inconsistent schemas

AI systems must *guess* what a business offers.

OIS removes guessing.

With a single `ois.json` file, a business can explicitly declare:
- what it offers
- what problems it solves
- where and how it operates
- how it should be discovered and matched

---

## Core Principles

- **Open & Public**  
  OIS is free to use, free to publish, and open to all businesses.

- **Voluntary Adoption**  
  No mandates. No enforcement. Early adopters gain early leverage.

- **Deterministic Structure**  
  Clear nouns (things) and verbs (intent) enable reliable matching and automation.

- **Headless by Default**  
  OIS works without websites, sitemaps, or platform lock-in.

- **Upstream Compatibility**  
  Designed to be consumed by search engines, marketplaces, agents, and supply systems.

---

## What Is `ois.json`

`ois.json` is a machine-readable declaration of a business.

### Core Structure

An OIS file contains:

**Metadata**
- Generator information
- Version tracking
- Timestamps (created/updated)
- Website URL

**Organization Identity**
- Business name and registration details
- Industry classification
- Description and branding
- Contact information
- Service areas
- Vision and mission statements
- Establishment story and year
- Success stories and case studies
- Awards and recognitions

**SKUs (Products & Services)**
- Unique identifiers
- Descriptions with semantic keywords
- Unit definitions (atomic and alternative units)
- Attributes (technical specifications, measurements)
- Actions (purchase, quote, trial, subscribe, etc.)
- Action prerequisites and conditions

**Graph Connections**
- Links to related OIS files
- Dedicated organization references
- Supply chain relationships

**Schema.org Compatibility**
- Optional JSON-LD context for web integration

### File Location

This file can live:
- at a business root URL (`/ois.json`)
- in a public repository
- in a shared OIS registry

---

## Key Schema Features

### Dual-Mode Semantics

OIS uses a consistent `plainText` + `keywords` pattern throughout the schema:

```json
{
  "plainText": "Human-readable description for context and semantic search",
  "keywords": ["tag1", "tag2", "tag3"]
}
```

This enables:
- **Deterministic matching** via exact keyword matching
- **Semantic search** via plainText embeddings
- **Flexible taxonomy** that evolves with usage

### Atomic Unit System

SKUs define a base atomic unit and alternative units with precise conversion rates:

```json
{
  "skuAtomicUnitName": "piece",
  "skuOtherUnits": [
    {
      "unitName": "box",
      "amountPerAtomicUnit": 100
    }
  ]
}
```

This enables quantity normalization and cross-supplier comparison.

### Attributes System

Technical specifications and properties with measurement goals:

```json
{
  "attributeName": "voltage",
  "attributeValue": "220",
  "attributeUnit": "V",
  "attributeMeasurementGoal": {
    "plainText": "accuracy",
    "keywords": ["accuracy", "precision"]
  }
}
```

Flexible enough for any attribute type: physical, technical, performance, or compliance.

### Actions System

Multiple interaction types per SKU with prerequisites and conditions:

```json
{
  "actionTypeConcept": {
    "plainText": "purchase",
    "keywords": ["purchase", "buy", "order"]
  },
  "actionPrerequisites": [...],
  "actionConditionTerms": [...],
  "actionURL": "https://example.com/purchase"
}
```

Supports purchase, quote requests, trials, subscriptions, and custom workflows.

### Graph Structure

Businesses can reference other OIS files for supply chain relationships, partnerships, and multi-brand structures:

```json
{
  "additionalOISURLs": [
    {
      "url": "https://partner.com/ois.json",
      "description": {...}
    }
  ]
}
```

---

## Files

**`ois-template-concept.js`**  
Defines the complete OIS schema structure v1.0, including all fields, data types, validation rules, and field descriptions. This is the single source of truth for what an `ois.json` file contains. The template uses a consistent plainText + keywords pattern for semantic flexibility

## Repository Structure

```
open-industry-schema/
  ├── src/
  │   ├── index.html          # Main web interface for the OIS generator
  │   ├── ois-app.js              # Application logic: form generation, validation, JSON compilation
  │   ├── ois-app.css             # Styling for the web interface
  │   └── ois-template-concept.js # Schema definition and field structure template (v1.0)
  │
  ├── compiled/
  │   └── <country_code>/     # e.g., th/ for Thailand, us/ for United States
  │       └── <business_id>/
  │           └── ois.json    # Generated OIS file for a specific business
  │
  └── README.md               # Project documentation
```

### File Descriptions

**`src/index.html`**  
The main web interface. Open this file in any browser to access the OIS generator form. No server or build process required.

**`src/ois-app.js`**  
Core application logic that dynamically generates the form from the template, handles user input validation, and compiles the final JSON output.

**`src/ois-app.css`**  
Styling for the web interface to ensure a clean, professional, and user-friendly experience.

**`src/ois-template-concept.js`**  
Defines the OIS schema structure v1.0, including all fields, data types, validation rules, and field descriptions. This is the single source of truth for what an `ois.json` file contains. Uses a consistent plainText + keywords pattern throughout for semantic flexibility.

**`compiled/<country_code>/<business_id>/ois.json`**  
Generated OIS files organized by country code and business identifier. Each `ois.json` file is independently usable and can be freely downloaded, cached, or indexed by any platform.

---

## How to Use OIS

### For Businesses: Publishing Your OIS File

**Step 1: Generate Your OIS File**
1. Clone this repository or download the source files
2. Open `src/index.html` in your web browser
3. Fill in your business information in the form
4. Click "Generate OIS File"
5. Copy the generated JSON text
6. Save it as `ois.json`

**Step 2: Publish Your OIS File**

Place your `ois.json` file at the root of your website, just like `sitemap.xml`:

```
https://yourwebsite.com/ois.json
```

**Examples:**
- `https://acme-manufacturing.com/ois.json`
- `https://mycompany.io/ois.json`
- `https://example-services.net/ois.json`

This makes your business instantly discoverable and machine-readable by:
- AI agents searching for capabilities
- Marketplaces indexing suppliers
- Search engines understanding your offerings
- Procurement systems finding matches

**Step 3: Keep It Updated**

Update your `ois.json` whenever your offerings, capabilities, or business information changes.

### For Platforms: Consuming OIS Files

To discover and consume OIS data:

1. **Direct Access**: Fetch `ois.json` from known business URLs
2. **This Repository**: Browse the `compiled/` directory for submitted OIS files
3. **Crawling**: Check for `/ois.json` during regular web crawling
4. **Submission**: Allow businesses to submit their OIS URLs to your platform

No authentication, no API keys, no rate limits. Just standard HTTP requests.

---

## Who Benefits

- **Businesses**  
  Become instantly discoverable and comparable by AI and platforms.

- **Search Engines & Marketplaces**  
  Receive clean, structured supply without scraping or guesswork.

- **AI Agents**  
  Reason about real offerings, not inferred text.

---

## Governance & Stewardship

OIS is an **open public project**.

To ensure coherence, versioning, and execution:
- the schema is currently **initiated and stewarded under RecapMap** (https://recapmap.com)
- stewardship does not imply ownership of business data
- all published `ois.json` files remain owned by their respective businesses

Governance may evolve as adoption grows.

---

## Status

- Schema: **early / evolving**
- Adoption: **open**
- Contributions: **welcome**
- Cost: **free**

---

## Get Involved

- Publish your own `ois.json`
- Help refine the schema
- Contribute validation tools or examples
- Use OIS in your platform, agent, or marketplace

No permission required.

---

## License

OIS schema specifications are intended to be open and permissive.
Specific licensing details will be finalized as the project matures.

