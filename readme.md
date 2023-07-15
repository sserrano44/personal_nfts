# personal_nfts

Welcome to `personal_nfts`, an open source project that enables you to manage your NFT collection via console using Hardhat.

## Overview

This project is designed to make it easy to manage your NFT collection on Ethereum or Polygon. You can create, deploy and interact with your NFTs directly from your console. The project leverages Hardhat, a development environment to compile, deploy, test, and debug your Ethereum software.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [node.js and npm](https://nodejs.org/en/download/).
- You have installed [Hardhat](https://hardhat.org/getting-started/#overview).
- You have a basic understanding of Ethereum development and Non-Fungible Tokens (NFTs).

## Setting up personal_nfts

To set up personal_nfts, follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/user/personal_nfts.git
    ```
2. Install the dependencies:
    ```
    cd personal_nfts
    npm install
    ```
3. Set up your environment file. Rename the `.env.example` to `.env`, and replace the placeholders with your real data:
    - `ACCOUNT_PRIVATE_KEY`: Your Ethereum account private key.
    - `ALCHEMY_ETHEREUM_URL`: The Alchemy URL for the Ethereum network.
    - `ALCHEMY_POLYGON_URL`: The Alchemy URL for the Polygon network.
    > Please make sure you use either `ALCHEMY_ETHEREUM_URL` or `ALCHEMY_POLYGON_URL` depending on the network you want to deploy.

## Deploying your Contract

To deploy your contract, use the following command:

```
npx hardhat --network ethereum run scripts/deploy.js
```

This command will return a contract address. Make sure to add this contract address to your `.env` file as `CONTRACT_ADDRESS`.

## Contributing to personal_nfts

To contribute to personal_nfts, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contact

If you want to contact the maintainer of the project you can reach out at `email@address.com`.

## License

This project uses the following license: [License Name](#).


