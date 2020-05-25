class MongoSevice {
    constructor({ client, dbName, collectionName }){
        this.mongoClient = client;
        this.mongoDBName = dbName;
        this.mongoCollectionName = collectionName;
    }

    isConnected(){
        return Promise.resolve(this.mongoClient.isConnected());
    };

    async insert(data){
        const db = this.mongoClient.db(this.mongoDBName),
              collection = db.collection(this.mongoCollectionName),
              result = await collection.insertOne(data);
    
        return result;
    };
}

export default MongoSevice;