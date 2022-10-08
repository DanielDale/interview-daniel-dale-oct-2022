const dbAction = require('./dbActions.js')

// Check if a url already has a shortened version
//function isExistingUrl(url){
    //get 
//}

// Call dbAction insert for a new url
function insertUrlToDb(url, shortened){
   dbAction.insertNewUrl(url, shortened) 
}

// Call dbAction to fetch the Url using the shortened one
exports.getUrl = (shortened) => {
    return dbAction.getUrlFromShortened(shortened)
}

// Insert process
exports.insertUrl = (url, shortened) => {
    return dbAction.getShortenedFromUrl(url).then(function(row){
        if(row[0].length == 0){
            return insertUrlToDb(url, shortened)
        }
        else{
            console.log("Already exists as a shortened url.")
            return row[0]
        }
    })
}
