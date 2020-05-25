let mongoServerConfig = {
    /** mongodb 網址 */
    url: process.env.MONGODB_URL || 'mongodb://localhost:27017', 
    /** 資料庫名稱 */
    dbName: process.env.MONGODB_DB_NAME || 'user',
    /** 資料表名稱 */
    collectionName:'echo'
};

export default mongoServerConfig;