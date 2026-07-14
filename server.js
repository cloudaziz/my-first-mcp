/**
 * My First MCP Server
 *
 * Learning project.
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerEchoTool } from './tools/echo.js';

const server = new McpServer({
  name: 'my-first-mcp',
  version: '0.0.1',
});

registerEchoTool(server);

const transport = new StdioServerTransport();

await server.connect(transport);

console.log('✅ MCP Server Connected');
