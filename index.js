const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/db');
const authRouter = require('./routes/auth');
const courseRouter = require('./routes/course');
const progressRouter = require('./routes/progress');
const evaluationsRouter = require('./routes/evaluations');
const submissionsRouter = require('./routes/submissions');
const adminRouter = require('./routes/admin');
const { requireAuth, requireAdmin } = require('./middleware/auth');
const bootstrapUsers = require('./config/bootstrapUsers');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

connectDB();

const allowedOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((v) => v.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Requests sin origin (health checks/server-to-server) se permiten.
    if (!origin) return callback(null, true);
    // En local dev, se permite localhost aunque FRONTEND_URL no este definido.
    if (origin.startsWith('http://localhost:')) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Origen no permitido por CORS'));
  }
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true });
});

app.get('/', (req, res) => {
  res.json({
    message: 'API Comprension Lectora 7',
    version: '1.0.0',
    database: 'cl7'
  });
});

app.use('/api/auth', authRouter);
app.use('/api/course', courseRouter);
app.use('/api/progress', progressRouter);
app.use('/api/evaluations', evaluationsRouter);
app.use('/api/submissions', submissionsRouter);
app.use('/api/admin', requireAuth, requireAdmin, adminRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});

bootstrapUsers().catch((error) => {
  console.error('Error bootstrapping default users:', error.message);
});
