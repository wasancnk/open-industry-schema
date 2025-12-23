# Open Industries Schema (OIS)

**Open Industries Schema (OIS)** is an open, public data schema that allows businesses to express their goods, services, capabilities, and problems in a **machine-readable, AI-native format**.

OIS is designed to make businesses instantly understandable by:
- AI agents
- search engines
- marketplaces
- procurement systems
- future automation platforms

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

It may include (non-exhaustive):
- organization identity
- offerings (SKUs, services, capabilities)
- problems worth solving
- keywords for deterministic and semantic matching
- operational metadata (location, availability, constraints)

This file can live:
- at a business root URL (`/ois.json`)
- in a public repository
- in a shared OIS repository

---

## Repository Structure (Example)

```
(root directory)
  |-src
    |-ois.js
  |-compiled
    |-th
      |-<business_id>
        |-ois.json
```

Each `ois.json` file is independently usable. Any platform may download, cache, or index these files freely.

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
- the schema is currently **initiated and stewarded under RecapMap**
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

