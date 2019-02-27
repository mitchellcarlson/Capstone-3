//exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/r-reflections';
exports.DATABASE_URL = process.env.DATABASE_URL;
//exports.TEST_DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/test-reflections';
exports.TEST_DATABASE_URL = process.env.DATABASE_URL;
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '86400' 