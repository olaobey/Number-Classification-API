const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: true,
        message: 'Something went wrong on the server.',
    });
};

module.exports = errorMiddleware;