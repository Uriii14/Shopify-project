const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'backend', timestamp: new Date().toISOString() });
});

// ===== MongoDB =====
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.warn('⚠️  MONGO_URI no está definido en .env. Conexión a Mongo deshabilitada.');
} else {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error conectando a MongoDB:', err.message));
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`);
});