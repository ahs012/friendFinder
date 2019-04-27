
//Require friend data
var friends = require ("../app/data/friends.js");

module.exports = function(app) {
    // GET ALL Friends
    app.get("/api/friends", function(req,res){
        return res.json(friends);
    })

    // POST new friend
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        friends.push(newFriend);
       
        var arrComp = [];

        //Compatibility Calculator Function
        for ( var i = 0; i < ( friends.length - 1); i++) {
            var indexNew = friends.length - 1;
            var eachComp = arrDifference(friends[i].scores, friends[indexNew].scores);
            arrComp.push(eachComp);
        }

        var bestIndex = calcCompatibility(arrComp);
        console.log("Your best friend is: " + friends[bestIndex].name);
        res.json(friends[bestIndex]);       
    });

    // Function for array diference / compatibility
    function arrDifference(arr1, arr2) {
        var difference= 0;
        var newArr = [];
        var sum = 0;
        for (var i = 0; i < arr1.length; i++) {
            difference = arr1[i] - arr2[i];
            newArr.push(difference);
        }
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i] >= 0) {
                sum = newArr[i] + sum;
            } else {
                sum = - newArr[i] + sum;
            }
        }
    return sum;
    }

    // Function to calculate friends with the most compatibility
    function calcCompatibility (arr) {
        var mostCompatibility = 41;
        var friendIndex;
        for (var i = 0; i < arr.length; i++) {
            if (mostCompatibility > arr[i]) {
                mostCompatibility = arr[i];
                friendIndex = i;
            }      
        }
        return friendIndex;
    }
}