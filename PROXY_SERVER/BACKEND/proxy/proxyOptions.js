const crypto = require('crypto');
const { config } = require('../config');
const cookieConfig = {
    httpOnly,
    maxAge,
    path,
    secure,
    signed,
    sameSite,
} = config;

const getTokenFromCookie = (proxyReqOpts, srcReq) => {
    const { jwt } = srcReq.signedCookies[config.cookieName];
    proxyReqOpts.headers['Authorization'] = `Bearer ${jwt}`;
    proxyReqOpts.headers['Cookie'] = '';
    return proxyReqOpts;
}

const proxyAuthLogin = {
    proxyReqBodyDecorator: (bodyContent, srcReq) => {
        const verify = crypto.randomBytes(20).toString('hex');
        return { verify };
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
        const goodRequest = userRes.statusCode === 201;
        const goodResponse = () => {
            const resp = JSON.parse(proxyResData.toString('utf8'));
            const code = resp.code;
            userRes.cookie(config.cookieName, { code }, cookieConfig);
        }

        goodRequest && goodResponse();
        return {};
    }
}

const proxyAuthLogout = {
    proxyReqBodyDecorator: (bodyContent, srcReq) => {
        const { code } = srcReq.signedCookies[config.cookieName];
        return { code };
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
        userRes.clearCookie(config.cookieName);
        return {};
    }
}

const proxyAuthToken = {
    proxyReqBodyDecorator: (bodyContent, srcReq) => {
        const { code } = srcReq.signedCookies[config.cookieName];
        return { code, apiKey: config.userApiKey };
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
        const goodRequest = userRes.statusCode === 201;
        const goodResponse = () => {
            const { code } = userReq.signedCookies[config.cookieName];
            const { jwt } = JSON.parse(proxyResData.toString('utf8'));
            userRes.clearCookie(config.cookieName);
            userRes.cookie(config.cookieName, { code, jwt }, cookieConfig);
        }

        goodRequest && goodResponse();
        return {};
    }
}

const proxyApiRequestMovies = {
    proxyReqOptDecorator: getTokenFromCookie,
}

const proxyApiRequestUserMovies = {
    proxyReqPathResolver: req => {
        const { code } = req.signedCookies[config.cookieName];
        return `${req.url}/${code.split(':')[0]}`;
    },
    proxyReqOptDecorator: getTokenFromCookie,
}

const proxyApiRequestAddUserMovie = {
    proxyReqBodyDecorator: (bodyContent, srcReq) => {
        const { movieId } = bodyContent;
        const { code } = srcReq.signedCookies[config.cookieName];
        const userId = code.split(':')[0];
        return { userId, movieId };
    },
    proxyReqOptDecorator: getTokenFromCookie,
}

const proxyApiRequestDeleteUserMovie = {
    proxyReqPathResolver: req => {
        const { movieId } = req.body;
        const { code } = req.signedCookies[config.cookieName];
        const userId = code.split(':')[0];
        return `${req.url}/${userId}/${movieId}`;
    },
    proxyReqOptDecorator: getTokenFromCookie,
}

module.exports = {
    proxyAuthLogin,
    proxyAuthLogout,
    proxyAuthToken,
    proxyApiRequestMovies,
    proxyApiRequestUserMovies,
    proxyApiRequestAddUserMovie,
    proxyApiRequestDeleteUserMovie,
}