Users=new Meteor.Collection("users");

Users.allow({
    insert: function (UserId, user) {
        return false; // No direct inserts
    }
});


