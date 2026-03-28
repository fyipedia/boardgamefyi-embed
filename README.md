# boardgamefyi-embed

[![npm](https://img.shields.io/npm/v/boardgamefyi-embed)](https://www.npmjs.com/package/boardgamefyi-embed)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/boardgamefyi-embed)

Embed **BoardGameFYI** widgets on any website. **10 widget types**, zero dependencies, Shadow DOM isolation, 4 themes, 2 styles. Live data from [BoardGameFYI](https://boardgamefyi.com).

Every widget includes a "Powered by BoardGameFYI" backlink.

> **Try the interactive widget builder at [widget.boardgamefyi.com](https://widget.boardgamefyi.com)**

## Quick Start

```html
<div data-boardgamefyi="entity" data-slug="catan" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/boardgamefyi-embed@1/dist/embed.min.js"></script>
```

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-boardgamefyi="entity" data-slug="..."></div>` | Entity detail card — calculator, country, role, or game |
| `glossary` | `<div data-boardgamefyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-boardgamefyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `search` | `<div data-boardgamefyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `compare` | `<div data-boardgamefyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `faq` | `<div data-boardgamefyi="faq" data-slug="..."></div>` | FAQ accordion with expand/collapse |
| `dna-radar` | `<div data-boardgamefyi="dna-radar" data-slug="..."></div>` | 8-axis DNA radar chart — strategy, luck, interaction, complexity, and more |
| `dna-bars` | `<div data-boardgamefyi="dna-bars" data-slug="..."></div>` | DNA horizontal bar chart (alternative to radar) |
| `player-badge` | `<div data-boardgamefyi="player-badge" data-slug="..."></div>` | Inline player count badge |
| `weight-badge` | `<div data-boardgamefyi="weight-badge" data-slug="..."></div>` | Inline BGG weight/complexity badge |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-boardgamefyi` | entity, glossary, guide, search, compare, faq, dna-radar, dna-bars, player-badge, weight-badge | required | Widget type |
| `data-slug` | e.g. "catan" | — | Entity slug |
| `data-theme` | light, dark, sepia, auto | light | Visual theme |
| `data-style-variant` | modern, clean | modern | Widget style |
| `data-size` | default, compact, large | default | Size |

## Themes & Styles

4 themes (light, dark, sepia, auto) × 2 styles (modern, clean) = 8 visual combinations.

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/boardgamefyi-embed@1/dist/embed.min.js"></script>
```

## Guide FYI Family

Part of [FYIPedia](https://fyipedia.com). Guide FYI covers calculators, salary, education, and board games. Hub: [reffyi.com](https://reffyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| CalcFYI | [calcfyi.com](https://calcfyi.com) | 200+ calculators, 50 formula cards, financial/health/math | [npm](https://www.npmjs.com/package/calcfyi-embed) |
| SalaryFYI | [salaryfyi.com](https://salaryfyi.com) | 36 countries, salary data, tax calculators, 26 rate configs | [npm](https://www.npmjs.com/package/salaryfyi-embed) |
| **BoardGameFYI** | [boardgamefyi.com](https://boardgamefyi.com) | 10,552 board games, 8-axis DNA profiles, BGG integration | **[npm](https://www.npmjs.com/package/boardgamefyi-embed)** |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
