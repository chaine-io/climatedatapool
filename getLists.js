// Impprt Fleek Storage SDK

const fleekStorage = require('@fleekhq/fleek-storage-js')

// Function to list files

async function fileList() {

const files = await fleekStorage.listFiles({
apiKey: 'my-key',
apiSecret: 'my-secret',
getOptions: [
'bucket',
'key',
'hash',
'publicUrl'
],
})

console.log('files', files)
}

// Fuction to list buckets

async function bucketList() {

const buckets = await fleekStorage.listBuckets({
apiKey: 'my-key',
apiSecret: 'my-secret',
})

console.log('buckets', buckets)

}

// Run the functions

async function run() {
await bucketList()
await fileList()
}

// Error handling

run().then(() => console.log('done')).catch(console.error)
