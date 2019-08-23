import express from 'express';
import route from './src/router/route';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(route);
// app.use(route);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server is running on port: ${port}`));

export default app;
