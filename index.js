const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client')

//Init clinet

const notion = new Client(
    {
        auth: process.env.NOTION_TOKEN
    }
)

const databaseId = process.env.NOTION_DATABASE_ID


// https://www.notion.so/TEST-ac4345b510f340598d890bd74ce11efe

async function addItem(text) {
    try {
        const response = await notion.pages.create({
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

// addItem("Yurts in Big Sur, California")


async function retrivePage() {
    try {
        const pageId = 'ac4345b510f340598d890bd74ce11efe';
        const response = await notion.pages.retrieve({ page_id: pageId });
        console.log(response);
        console.log(response)
        console.log("Success! Entry added.")
    } catch (error) {
        console.error(error.body)
    }
}

async function retriveBlock() {
    try {
        const blockId = 'ac4345b510f340598d890bd74ce11efe#d718754e4d54429e98a419c47781a552';
        const response = await notion.blocks.retrieve({ block_id: blockId });
        console.log(response);
        console.log(response)
        console.log("Success! Entry added.")
    } catch (error) {
        console.error(error.body)
    }
}



async function retriveBlockChildren() {
    try {
        const blockId = '0e4d154c-149a-449b-a2b2-edfa5b333310';
        const response = await notion.blocks.children.list({ block_id: blockId });
        console.log(response);
        console.log(response)
        console.log("Success! Entry added.")
        console.log(response.results[0].toggle.text[1]);

    } catch (error) {
        console.error(error.body)
    }
}
// https://www.notion.so/TEST-ac4345b510f340598d890bd74ce11efe#0e4d154c149a449ba2b2edfa5b333310

async function appendBlockChildren() {
    try {
        const blockId = '0e4d154c-149a-449b-a2b2-edfa5b333310';
        const response = await notion.blocks.children.append({
            block_id: blockId,
            children: [
                {
                    object: 'block',
                    type: 'paragraph',
                    paragraph: {
                        text: [
                            {
                                type: 'mention',
                                mention: {
                                    type: 'date',
                                    date: { start: '2022-02-21', end: null, time_zone: null }
                                },
                                annotations: {
                                    bold: false,
                                    italic: false,
                                    strikethrough: false,
                                    underline: false,
                                    code: false,
                                    color: 'default'
                                },
                            },
                        ],
                    },
                }
            ],
        });
        console.log(response);
    } catch (error) {
        console.error(error.body)
    }
}



appendBlockChildren();
// retriveBlockChildren();