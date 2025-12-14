# GitHub Copilot Instructions for LODA Language Website

## Project Overview

This is the source code for the LODA Language website (https://loda-lang.org), built with Jekyll static site generator. LODA is an assembly language, computational model, and tool for mining integer sequences.

## Technology Stack

- **Static Site Generator**: Jekyll (GitHub Pages compatible, version ~219)
- **Web Editor**: Interactive LODA program editor using:
  - CodeMirror for code editing
  - LODA-RUST WASM for program execution
  - Chart.js for visualization
  - Web Workers for async execution
- **Styling**: Jekyll Minima theme with custom CSS
- **Languages**: Markdown, HTML, JavaScript, YAML, Ruby (for Jekyll)

## Repository Structure

- `/` - Jekyll site root with Markdown pages
- `/_config.yml` - Jekyll configuration
- `/_edit/` - Interactive LODA program editor (HTML, JS, WebAssembly)
- `/_includes/` - Jekyll include templates
- `/_data/` - Jekyll data files
- `/css/`, `/js/`, `/images/` - Static assets
- `/spec.markdown` - LODA language specification
- `/contributing.md` - Contribution guidelines
- `/mcp.md` - LODA Model Context Protocol (MCP) server documentation

## Key Project Concepts

### LODA Language
- Assembly-like programming language for integer sequences
- Designed for efficient execution, optimization, and synthesis
- Used for mining integer sequences (OEIS)
- Operations include arithmetic, combinatorics, number theory, bitwise, and control flow

### Program Mining
- Community-driven effort to discover integer sequence programs
- Uses BOINC distributed computing and local miners
- Programs stored in separate [loda-programs](https://github.com/loda-lang/loda-programs) repository

### MCP Integration
- LODA has a Model Context Protocol (MCP) server
- Enables AI agents to access LODA API at `https://api.loda-lang.org/v2/mcp/`
- Can be integrated with VS Code and GitHub Copilot

## Development Guidelines

### Jekyll Site Development
- Pages use front matter with layout, title, and permalink
- Build site with: `bundle exec jekyll serve`
- Site content is in Markdown files with `.md` or `.markdown` extensions
- Custom collections defined in `_config.yml` (e.g., `_edit` directory)

### Interactive Editor
- Located in `/_edit/` directory
- Uses CodeMirror with custom LODA mode
- Web Worker pattern for async program execution
- WASM integration for running LODA programs in browser
- Do not modify CodeMirror library files (they are vendored)

### Code Style
- Markdown: Follow existing formatting in documentation
- JavaScript: Use clear variable names, ES6+ features where appropriate
- HTML: Semantic markup, accessible elements
- Keep LODA code examples simple and well-commented

### Documentation
- LODA specification is the authoritative reference in `/spec.markdown`
- Examples should be clear and demonstrate one concept at a time
- Include both code and expected output where relevant
- Use OEIS sequence IDs (e.g., A000045 for Fibonacci) when applicable

## Common Tasks

### Adding New Pages
1. Create `.md` or `.markdown` file in root
2. Add front matter with layout, title, permalink
3. Write content in Markdown
4. Jekyll will automatically build and include in navigation

### Updating LODA Specification
- Edit `/spec.markdown`
- Follow existing structure with anchors for linking
- Include operation examples with assembly code blocks
- Use proper mathematical notation and terminology

### Modifying Interactive Editor
- Main logic in `/_edit/index.js` (PageController class)
- Worker logic in `/_edit/worker.js`
- LODA mode definition in `/_edit/web/codemirror_mode_loda.js`
- Test changes locally before committing

## Testing and Building

### Local Development
```bash
# Install dependencies
bundle install

# Serve site locally
bundle exec jekyll serve

# Site will be available at http://localhost:4000
```

### File Exclusions
- Jekyll excludes: `_site/`, `.sass-cache/`, `.jekyll-cache/`, `.jekyll-metadata/`
- Version control ignores: `.DS_Store`, `vendor/`, `openapi.v2.yaml`

## Contributing

- Follow guidelines in `/contributing.md`
- Report bugs/features in appropriate loda-lang GitHub repository
- Join discussion on Discord or via email
- Submit pull requests with clear descriptions
- Maintain compatibility with GitHub Pages

## Important Notes

- This is a static Jekyll site - no server-side processing
- The `_edit` directory is treated as a special collection (no Jekyll processing)
- CodeMirror and other vendored libraries should not be modified
- LODA execution happens client-side via WebAssembly
- MCP server runs separately at api.loda-lang.org

## Resources

- [LODA GitHub Organization](https://github.com/loda-lang)
- [LODA Programs Repository](https://github.com/loda-lang/loda-programs)
- [LODA API](https://api.loda-lang.org/v2/)
- [LODA MCP Server](https://api.loda-lang.org/v2/mcp/)
- [Community Discord](https://loda-lang.org/discord)
- [Mining Dashboard](https://dashboard.loda-lang.org/grafana/)
- [BOINC Project](https://boinc.loda-lang.org/loda/)
