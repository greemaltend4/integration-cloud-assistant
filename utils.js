// Utility functions for managing integrations

function logDeploymentStatus(platform, status) {
    console.log(`Deployment status on ${platform}: ${status}`);
}

module.exports = {
    logDeploymentStatus
};