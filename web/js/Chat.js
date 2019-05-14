var Vfs;
(function (Vfs) {
    var Chat = (function () {
        function Chat() {
            this.twilioNumber = 'your-twilio-number';
            this.accountSid = 'SK93813e8bf645872bac5b7614cdc061c1';
            this.authToken = 'something-something';
            this.token = "eyJjdHkiOiJ0d2lsaW8tZnBhO3Y9MSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJpc3MiOiJTS2MzMjRkY2U3YzFmMzQ4MjFkNjgwOGRmYjA3NGUwMzI4IiwiZXhwIjoxNTU3Mzk5OTg0LCJncmFudHMiOnsiaWRlbnRpdHkiOiJjZWQxOTY3QHlhaG9vLmNvbSIsImNoYXQiOnsic2VydmljZV9zaWQiOiJJUzVhZWNlZTkxNmJkYzQ1NTU4ZDkwZDNjZGRhMjA2MWEzIiwiZGVwbG95bWVudF9yb2xlX3NpZCI6bnVsbCwiZW5kcG9pbnRfaWQiOm51bGwsInB1c2hfY3JlZGVudGlhbF9zaWQiOm51bGx9fSwianRpIjoiU0tjMzI0ZGNlN2MxZjM0ODIxZDY4MDhkZmIwNzRlMDMyOC0xNTU3Mzk2MzUyIiwic3ViIjoiQUMwNDgzZTUxZjNiMWQyYjc1MjIwYmRhYmFlNjY0YTYxZSJ9.fnNI1FsJ1icf3iA4wkI4fiGcOyyeEg397Tzn1FXEZx8";
            this.client = null;
        }
        Chat.prototype.sendMessage = function (msg) {
            Twilio.Chat.Client.create(this.token).then(function (client) {
                client.getPublicChannelDescriptors().then(function (paginator) {
                    debugger;
                    for (var i = 0; i < paginator.items.length; i++) {
                        var channel = paginator.items[i];
                        if (channel.friendlyName != null) {
                            console.log('Public Channel: ' + channel.friendlyName);
                            channel.sendMessage("Hello");
                        }
                    }
                });
            });
        };
        return Chat;
    }());
    Vfs.Chat = Chat;
})(Vfs || (Vfs = {}));
