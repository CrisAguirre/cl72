const { verifyJwt } = require('../utils/jwt');

function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) return res.status(401).json({ message: 'Token requerido' });

    const secret = process.env.JWT_SECRET;
    if (!secret) return res.status(500).json({ message: 'JWT_SECRET no configurado en el servidor' });

    const payload = verifyJwt(token, secret);
    req.user = payload;
    next();
  } catch (_error) {
    res.status(401).json({ message: 'Token invalido o expirado' });
  }
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso solo para administrador' });
  }
  next();
}

module.exports = { requireAuth, requireAdmin };
