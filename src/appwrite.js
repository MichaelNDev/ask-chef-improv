import { Client, Functions } from "appwrite"


const client = new Client()
    .setEndpoint("https://cloud.appwrite.iov1")
    .setProject('67ef173d00172885308e')

const functions = new Functions(client)

export { client, functions }
