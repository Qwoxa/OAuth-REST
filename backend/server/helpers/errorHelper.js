module.exports = (err, req, res, next) => {
    if (req.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: {
            message: err.message,
            statusCode
        }
    });
};