// Fonctions utilitaires pour gérer les intégrations

function logDeploymentStatus(platform, status) {
    console.log(`Statut du déploiement sur ${platform}: ${status}`);
}

module.exports = {
    logDeploymentStatus
};
