import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const client = new Client({
  name: 'my-first-client',
  version: '0.0.1',
});

const transport = new StdioClientTransport({
  command: 'node',
  args: ['server.js'],
});

await client.connect(transport);

console.log('Client Connected!');
