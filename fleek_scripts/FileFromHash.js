// Import Fleek Storage SDK

const fleekStorage = require('@fleekhq/fleek-storage-js')

// Function for getting file from hash

async function FileFromHash() {

  const myFile = await fleekStorage.getFileFromHash({
    hash: 'file-haah-on-fleek',
  })

console.log('myFile', myFile)

}

// Run the function

async function run() {
await FileFromHash()
}

// Error handling

run().then(() => console.log('done')).catch(console.error)