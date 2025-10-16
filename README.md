# Learn SmartContract with Hardhat 3 Beta Project (`mocha` and `ethers`)

This project showcases a inherinted Hardhat 3 Beta project using `mocha` for tests and the `ethers` library for Ethereum interactions.

## seting your project

if you will show `typechain-types` for import to testing your project you can add on
hardhat.config.ts

```typescript
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v6",
  },
```

## Compile your project

after setting yo can run

```bash
npx hardhat compile
```

## create file test in folder test

for example in my project, I use Child.test.ts for test child
for run test in test project you can compile with scipt in terminal :

```bash
npx hardhat test test/Child.test.ts
```
