// Get the query string and determines if it is a string(date) or a number(unix time).
// Then exports a json object with the appropriate values to be returned to the browser.

// Create object contatining date + unix time to be exported as json.
// Find values for unix and date using private functions
//  should have two properties:
//    one for UNIX time (can be null)
//    one for Date (can be null)


// get query string
// decide if its a number or a string (use toInt to try to convert to number)
// if it's a string:
//  validate it
//    if its valid parse the string to unix time, return
//    if its not, return null
// if its a number:
//  validate it
//    if its valid, convert it to human time, return
//    if it's not, return null
// send json back to client
