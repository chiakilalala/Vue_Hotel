module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/Vue_Hotel/' : '/',
    build: {
        assetsPublicPath: ''
    }
}