// Utility functions for managing integrations

function logDeploymentStatus(platform, status) {
    if (!platform) {
        console.error('Platform must be provided.');
        return;
    }
    if (!status) {
        console.error('Status must be provided.');
        return;
    }
    console.log(`Deployment status on ${platform}: ${status}`);
}

module.exports = {
    logDeploymentStatus
};