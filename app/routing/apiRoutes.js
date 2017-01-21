var fData = require('../data/friends.js');
var path = require('path');

// Routing

module.exports = function(app) {

    // API GET Requests

//app.get returns simple data
    app.get('/api/friends', function(req, res) {
        console.log('connected');
        console.log(fData);
        res.json(fData);

    });

    // API POST Requests

    app.post('/api/friends', function(req, res) {

        var body = req.body;
        console.log(fData);
        console.log(body);

        var bffScore = 50;
        var bffIndex = 0;

        for (var i = 0; i < fData.length; i++) {
        	
            var currentdifference = totalDifference(fData[i].scores, body.scores)

            if (i == 0) {
                bffIndex = i; //friend index
                bffScore = currentdifference;
            }
            if (currentdifference < bffScore) {
                bffIndex = i;
                bffScore = currentdifference
            }

        }

        
        res.json(fData[bffIndex]);
    });
 
    function totalDifference(existing, newFriend) {
        var difference = 0;
        console.log('existing: ' + existing);
        console.log('new: ' + newFriend);

        for (i = 0; i < existing.length; i++) {
            
            difference += Math.abs(existing[i] - newFriend[i])
        }
        return difference;
    }
}