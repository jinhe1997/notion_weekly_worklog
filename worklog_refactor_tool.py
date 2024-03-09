from notion_client import Client

notion = Client(auth="secret_q8mUnweFdaYucfaPtGzZmCfL1ZmZ1nFjehdoq6x0FJZ")

list_users_response = notion.blocks.children.list(**{
    "block_id": "06c65cbb1f3e4f14a263df9bfeded41b",
})

block_of_pages = list_users_response["results"]
unsupported_ids = [result['id'] for result in block_of_pages if result['type'] == 'unsupported']
for unsupported_id in unsupported_ids:
    print(f"Unsupported block id: {unsupported_id}")

for unsupported_id in unsupported_ids:
    notion.blocks.delete(block_id=unsupported_id)
