import {pathRewrite} from '../utils/helpers';

const httpProxyTarget = {
    port: 3001,
    protocol: 'http',
};

const httpsProxyTarget = {
    port: 443,
    protocol: 'https',
};

export const devServerProxyConfig = {
    '/admin-api': {
        target: `${httpProxyTarget.protocol}://localhost:${httpProxyTarget.port}`,
        changeOrigin: true,
        secure: false,
    }
};

