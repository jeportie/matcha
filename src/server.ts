import Fastify from 'fastify';

const server = Fastify({
  logger: true,
});

// Health endpoint
server.get('/health', async (): Promise<{ status: string }> => {
  return { status: 'ok' };
});

// Server startup
const start = async (): Promise<void> => {
  try {
    const port = process.env.PORT ? Number(process.env.PORT) : 3000;

    await server.listen({ port, host: '0.0.0.0' });

    console.log(`Server running on http://localhost:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

// Launch server
void start();
