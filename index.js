const deploy = require("ipfs-deploy/src");
const core = require("@actions/core");

async function main() {
  try {
    const deployDir = core.getInput("deploy-dir");
    const pinningService = core.getInput("pinning-service");
    const pinataAPIKey = core.getInput("pinata-api-key");
    const pinataSecretAPIKey = core.getInput("pinata-secret-api-key");
    const cloudflareAPIEmail = core.getInput("cloudflare-api-email");
    const cloudflareAPIKey = core.getInput("cloudflare-api-key");
    const cloudflareZone = core.getInput("cloudflare-zone");
    const cloudflareRecord = core.getInput("cloudflare-record");

    core.info(`Deploying to ${pinningService} & updating Cloudflare DNS`);

    const ipfsHash = await deploy({
      publicDirPath: deployDir,
      remotePinners: [pinningService],
      dnsProviders: ['cloudflare'],
      credentials: {
        pinata: {
          apiKey: pinataAPIKey,
          secretApiKey: pinataSecretAPIKey
        },
        cloudflare: {
          apiEmail: cloudflareAPIEmail,
          apiKey: cloudflareAPIKey,
          zone: cloudflareZone,
          record: cloudflareRecord
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
