# jev-extract

**Turn documents into typed records by paying for each document read once and asking many constrained questions in parallel.**

[![Tests](https://github.com/gbesse/jev-extract/actions/workflows/test.yml/badge.svg)](https://github.com/gbesse/jev-extract/actions/workflows/test.yml) ![MIT](https://img.shields.io/badge/license-MIT-blue) ![Node](https://img.shields.io/badge/node-22%2B-green) ![Public alpha](https://img.shields.io/badge/status-public_alpha-orange)

## 30-second offline quick start

```sh
git clone https://github.com/gbesse/jev-extract.git && cd jev-extract
npm install && npm run demo
```

The probabilities are synthetic fixtures.

## Call real Jev

Set `TYPESAFE_API_KEY` for a reviewed adapter sending paid requests to `api.typesafe.ai`. This alpha deliberately leaves the live adapter unwired; `npm run live-smoke` makes zero requests and states that boundary.

## Library and integration

Import `extract`, `estimate`, `candidates`, `packingPlan`, and `aggregate`. The CLI provides `estimate` and a fake-backed `run`; the library result contains a record, provenance for every field, usage, and an exact document/schema cache key.

## How it decides

`enum` becomes choice, `flag` noul, `level` score, and `candidate` a choice over deterministic regex matches. Dates, amounts, emails, identifiers, and references are never generated. `absent` adds a paired presence question. Packs remain below configured request/state limits; long documents are chunked, and `first`, `any`, `all`, `max_probability`, or deterministic `majority` aggregate in code.

## Boundaries

No PDF, OCR, directory/CSV reader, persistent resume store, or live transport ships in this alpha. Convert those inputs upstream. Regex candidate quality bounds extraction quality; chunking can remove context; thresholds and fixture probabilities are illustrative. Jev is sensitive to irrelevant state. No live benchmark is claimed.

## Validation

Run `npm run check && npm run typecheck && npm test && npm run demo`. CI runs them on Node 22 and 24.

## Related projects

[DecisionPacks](https://github.com/gbesse/decisionpacks), [Question Forge](https://github.com/gbesse/question-forge), and [jev-codebook](https://github.com/gbesse/jev-codebook) complement schema and question design.

Independent project; not affiliated with TypeSafe AI. [API documentation](https://docs.typesafe.ai/api) · [Jev 1.13 model notes](https://docs.typesafe.ai/model-jaggedness/jev-1.13/)
