// Configuration pour l'intégration des services cloud

const config = {
    aws: {
        accessKeyId: '',
        secretAccessKey: '',
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