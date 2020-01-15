const deploy = require("ipfs-deploy/src");
const core = require("@actions/core");

async function main() {
  try {
    const pinningService = core.getInput("pinning-service");
    const pinataAPIKey = core.getInput("pinata-api-key");
    const pinataSecretAPIKey = core.getInput("pinata-secret-api-key");

    core.info(`Deploying to ${pinningService}`);

    await deploy({
      remotePinners: pinningService,
      pinata: {
        apiKey: pinataAPIKey,
        secretApiKey: pinataSecretAPIKey
      }
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
