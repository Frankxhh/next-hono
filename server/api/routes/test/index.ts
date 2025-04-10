// test.ts
import { Hono } from 'hono';

const app = new Hono();

app.get('/', c => c.text('list test'));
app.post('/', c => c.json({ message: 'create a test', status: 201 }));

export default app;
