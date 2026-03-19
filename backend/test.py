from pymongo import MongoClient

url = "YOUR_MONGO_URL"

client = MongoClient(url)

print(client.list_database_names())