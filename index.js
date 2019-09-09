const Client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "******",
    host: "localhost",
    port: 5432,
    database: "postgres"
})

client.connect()
.then(() => console.log("mantap konek"))
.catch(e => console.log(e))
.finally(() => client.end())