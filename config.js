// Configuration pour l'intégration des services cloud

const config = {
    aws: {
        accessKeyId: 'YOUR_ACCESS_KEY_ID',
        secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
        region: 'us-east-1' // Default AWS region
    },
    azure: {
        clientId: '',
        clientSecret: '',
        tenantId: ''
    },
    googleCloud: {
        projectId: '',
        keyFilename: ''
    }
};

module.exports = config;