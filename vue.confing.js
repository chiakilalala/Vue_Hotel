module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/hotel_vue/' : '/',
    build: {
        assetsPublicPath: ''
    }
}