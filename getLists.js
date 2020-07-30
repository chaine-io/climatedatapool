const fleekStorage = require('@fleekhq/fleek-storage-js')

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

async function bucketList() {

const buckets = await fleekStorage.listBuckets({
apiKey: 'my-key',
apiSecret: 'my-secret',
})

console.log('buckets', buckets)

}

async function run() {
await bucketList()
await fileList()
}

run().then(() => console.log('done')).catch(console.error)