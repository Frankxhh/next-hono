// index.ts
import { Hono } from 'hono';
import test from './routes/test';

export const runtime = 'edge';

const app = new Hono().basePath('/api');
// 😃
app.route('/test', test);

export default app;
