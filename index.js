const deploy = require("ipfs-deploy/src");
const core = require("@actions/core");

async function main() {
  try {
    const deployDir = core.getInput("deploy-dir");
    const pinningService = core.getInput("pinning-service");
    const pinataAPIKey = core.getInput("pinata-api-key");
    const pinataSecretAPIKey = core.getInput("pinata-secret-api-key");

    core.info(`Deploying to ${pinningService}`);

    const ipfsHash = await deploy({
      publicDirPath: deployDir,
      remotePinners: [pinningService],
      credentials: {
        pinata: {
          apiKey: pinataAPIKey,
          secretApiKey: pinataSecretAPIKey
        }
      },
      open: false,
      copyHttpGatewayUrlToClipboard: false
    });

    core.setOutput("ipfs-hash", ipfsHash);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
