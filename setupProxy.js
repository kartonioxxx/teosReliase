const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // Шлях, який потрібно проксіювати
        createProxyMiddleware({
            target: 'https://script.google.com/macros/s/AKfycbzO17O_2S0rnbJ-YiI6LxiMSsadWCTidZk9sRHwqBQ/dev', // Цільовий сервер, який потрібно досягнути
            changeOrigin: true, // Змінювати початковий домен запиту на цільовий домен
        })
    );
};
