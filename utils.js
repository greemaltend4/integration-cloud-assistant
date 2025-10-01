// Utility functions for managing integrations

function logDeploymentStatus(platform, status) {
    if (!platform) {
        console.error('Platform must be provided.');
        return;
    }
    if (typeof status !== 'string' || !status) {
        console.error('Status must be a non-empty string.');
        return;
    }
    console.log(`Deployment status on ${platform}: ${status}`);
}

module.exports = {
    logDeploymentStatus
};