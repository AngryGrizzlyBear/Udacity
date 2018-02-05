var faceBookFriends = {
    name: "Evan",
    friends: 5,
    messages: ["I don't like Facebook", "No" ],
    postMessage: function(message){
        console.log(message);
    },
    deleteMessage: function(index){
        console.log(index);
    },
    addFriend: function(){
        console.log("addFriend was called");
    },
    removeFriend: function(){
        console.log("removeFriend was called");
    },
}
console.log(faceBookFriends.messages)
faceBookFriends.postMessage()



// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1