const deploy = require("ipfs-deploy/src");
const core = require("@actions/core");

async function main() {
  try {
    const pinningService = core.getInput("pinning-service");
    const pinataAPIKey = core.getInput("pinata-api-key");
    const pinataSecretAPIKey = core.getInput("pinata-secret-api-key");

    core.info(`Deploying to ${pinningService}`);

      remotePinners: pinningService,
    const ipfsHash = await deploy({
      pinata: {
        apiKey: pinataAPIKey,
        secretApiKey: pinataSecretAPIKey
      }
    });

    core.setOutput("ipfs-hash", ipfsHash);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
