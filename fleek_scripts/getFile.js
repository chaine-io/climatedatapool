// Import Fleek Storage SDK

const fleekStorage = require('@fleekhq/fleek-storage-js')

// Function for getting an individual file

async function getFile() {

  const myFile = await fleekStorage.get({
    apiKey: 'my-key',
    apiSecret: 'my-secret',  
    key: 'filename-on-fleek',
    getOptions: [
      'data',
      'bucket',
      'key',
      'hash',
      'publicUrl'
    ],
  })

console.log('myFile', myFile)

}

// Run the function

async function run() {
await getFile()
}

// Error handling

run().then(() => console.log('done')).catch(console.error)