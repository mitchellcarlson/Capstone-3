exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/r-reflections';
exports.TEST_DATABASE_URL = "mongodb://cap3:pikapika1@ds145312.mlab.com:45312/capstone-3" ||'mongodb://localhost/test-reflections';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '86400' 