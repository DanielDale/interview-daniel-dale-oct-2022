const dbAction = require('./dbActions.js')

// Call dbAction insert for a new url
function insertUrlToDb(url, shortened){
   return dbAction.insertNewUrl(url, shortened) 
}

// Call dbAction to fetch the Url using the shortened one
exports.getUrl = (shortened) => {
    return dbAction.getUrlFromShortened(shortened)
}

// Insert process
exports.insertUrl = (url, shortened) => {
    // Check if anything is available for this url before inserting
    return dbAction.getShortenedFromUrl(url).then(function(row){
        if(row.length == 0){
            return insertUrlToDb(url, shortened)
        }
        else{
            console.log("Already exists as a shortened url.")
            return row
        }
    })
}
