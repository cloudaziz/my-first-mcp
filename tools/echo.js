import { z } from 'zod';

export function registerEchoTool(server) {
  server.registerTool(
    'echo',
    {
      title: 'Echo Tool',
      description: 'Returns the same message',

      inputSchema: {
        message: z.string(),
      },
    },
    async ({ message }) => {
      return {
        content: [
          {
            type: 'text',
            text: message,
          },
        ],
      };
    },
  );
}
