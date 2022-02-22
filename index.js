const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client')

//Init clinet

const notionclient = new Client(
    {
        auth: process.env.NOTION_TOKEN
    }
)

const databaseId = process.env.NOTION_DATABASE_ID


async function addItem(text) {
    try {
        const response = await notionclient.pages.create({
            parent: { database_id: databaseId },
            properties: {
                title: {
                    title: [
                        {
                            "text": {
                                "content": text
                            }
                        }
                    ]
                }
            },
        })
        console.log(response)
        console.log("Success! Entry added.")
    } catch (error) {
        console.error(error.body)
    }
}

addItem("Yurts in Big Sur, California")
