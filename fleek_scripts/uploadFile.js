// Import Fleek Storage SDK

const fleekStorage = require('@fleekhq/fleek-storage-js')

// Import fs to read files from file system

const fs = require('fs');

// Function for uploading a file onto Fleek

async function uploadFile() {

  fs.readFile('/filepath/filename', async (error, fileData) => {
    const uploadedFile = await fleekStorage.upload({
      apiKey: 'my-key',
      apiSecret: 'my-secret',    
      key: '/filepath/filename',
      data: fileData,
    });
    console.log('uploadedFile', uploadedFile)

  })


}
// N.B.: The folder structure in the filepath here will get created on Fleek
// Run the function

async function run() {
await uploadFile()
}

// Error handling

run().then(() => console.log('done')).catch(console.error)