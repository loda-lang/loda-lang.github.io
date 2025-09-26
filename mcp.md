---
layout: page
title: MCP Server
short_title: MCP
permalink: /mcp/
nav_order: 4
---

The LODA Model Context Protocol (MCP) server enables AI agent systems to access the [LODA API](https://api.loda-lang.org/v2/). The server endpoint is:

```
https://api.loda-lang.org/v2/mcp/
```

## Visual Studio Code with GitHub Copilot

To install the LODA MCP server in VS Code, follow these steps:

1. Install the GitHub Copilot extension.
2. Open the Command Palette (`Cmd+Shift+P` on macOS, `Ctrl+Shift+P` on Windows).
3. Select `MCP: Add server...`
4. Choose `HTTP (HTTP or Server-Sent Events)`.
5. Enter the server URL: `https://api.loda-lang.org/v2/mcp/`
6. Assign a name to the server.
7. Select either `workspace` or `global` scope.
8. Confirm and trust the server.

![LODA MCP Copilot Demo](images/loda-mcp-copilot.gif)

# Example Prompts

Try these example prompts:

```
Show me LODA stats.
```

```
Find LODA programs related to the Fibonacci numbers.
```

```
Show me the LODA program for A000301.
```

```
Compute the first 100 terms of A000045.
```
