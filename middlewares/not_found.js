const notFound = (req,res,next) => {
    res.status(404).json({
        status: 404,
        message: "page not found"
    })
}

module.exports = notFound