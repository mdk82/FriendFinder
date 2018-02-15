
const path = require('path')

const friends = require('../data/friends')

// API routes //
// ========== //
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    })

// Add new friend //
    app.post('/api/friends', function (req, res) {
        let newFriend = req.body;
        let friendScores = newFriend.scores;
        let friendName = '';
        let friendImage = '';

        console.log(newFriend)

        for (let i = 0; i < friends.length; i++) {
            let diff = 0;
            for (let j = 0; j < friendScores.length; j++) {
            diff += Math.abs(friends[i].scores[j] - friendScores[j]);
            console.log(diff)
            }
        
            if (diff < 500) {
                totalDiff = diff
                friendName = friends[i].name
                friendImage = friends[i].photo
            }
        }

        friends.push(newFriend);

        res.json({
            status: 'OK',
            name: friendName,
            photo: friendImage
        });
        
    });
};





