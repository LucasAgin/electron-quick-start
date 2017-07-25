// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var database = firebase.database();
// var quoteRef = FIRDatabase.database().reference(withPath: "Quotes")
var quoteRef = firebase.database().ref('Quotes');
quoteRef.on('value', function(snapshot) {
  snapshot.forEach(function(child){
        var key = child.key;
        var value = child.val();
        console.log(key);
        console.log(value);
    });
});
