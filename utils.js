// Utility functions for managing integrations

function logDeploymentStatus(platform, status) {
    if (!platform || !status) {
        console.error('Platform and status must be provided.');
        return;
    }
    console.log(`Deployment status on ${platform}: ${status}`);
}

module.exports = {
    logDeploymentStatus
};