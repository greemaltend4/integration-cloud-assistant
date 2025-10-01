// Configuration pour l'intégration des services cloud

const config = {
    aws: {
        accessKeyId: 'YOUR_ACCESS_KEY_ID',
        secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
        region: 'us-east-1' // Updated AWS region
    },
    azure: {
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
        tenantId: 'YOUR_TENANT_ID'
    },
    googleCloud: {
        projectId: 'YOUR_PROJECT_ID',
        keyFilename: 'path/to/your/keyfile.json'
    }
};

module.exports = config;