var Vfs;
(function (Vfs) {
    var Chat = (function () {
        function Chat() {
            this.twilioNumber = 'your-twilio-number';
            this.accountSid = 'SK93813e8bf645872bac5b7614cdc061c1';
            this.authToken = 'something-something';
            this.token = "eyJjdHkiOiJ0d2lsaW8tZnBhO3Y9MSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJpc3MiOiJTS2MzMjRkY2U3YzFmMzQ4MjFkNjgwOGRmYjA3NGUwMzI4IiwiZXhwIjoxNTU3ODY3MzI3LCJncmFudHMiOnsiaWRlbnRpdHkiOiJjZWQxOTY3QHlhaG9vLmNvbSIsImNoYXQiOnsic2VydmljZV9zaWQiOiJJUzVhZWNlZTkxNmJkYzQ1NTU4ZDkwZDNjZGRhMjA2MWEzIiwiZGVwbG95bWVudF9yb2xlX3NpZCI6bnVsbCwiZW5kcG9pbnRfaWQiOm51bGwsInB1c2hfY3JlZGVudGlhbF9zaWQiOm51bGx9fSwianRpIjoiU0tjMzI0ZGNlN2MxZjM0ODIxZDY4MDhkZmIwNzRlMDMyOC0xNTU3ODYzNjgwIiwic3ViIjoiQUMwNDgzZTUxZjNiMWQyYjc1MjIwYmRhYmFlNjY0YTYxZSJ9.Rt7-1THf5oMVtqpBZTxinFABVIwMsXvfT5iT6K8dZUY";
            this.client = null;
        }
        Chat.prototype.sendMessage = function (msg) {
            try {
                Twilio.Chat.Client.create(this.token).then(function (client) {
                    client.on('channelJoined', function (channel) {
                        console.log('Joined channel ' + channel.friendlyName);
                    });
                    client.getPublicChannelDescriptors().then(function (paginator) {
                        for (var i = 0; i < paginator.items.length; i++) {
                            var channelDescriptor = paginator.items[i];
                            if (channelDescriptor.friendlyName != null) {
                                console.log('Public Channel: ' + channelDescriptor.friendlyName);
                                channelDescriptor.getChannel().then(function (chn) {
                                    chn.join().then(function (channel) {
                                        console.log('Joined channel');
                                        debugger;
                                        chn.sendMessage("Hello").then(function (whatever) {
                                            debugger;
                                            console.log(whatever);
                                        });
                                    });
                                });
                            }
                        }
                    });
                });
            }
            catch (e) {
                alert(e.message);
            }
        };
        return Chat;
    }());
    Vfs.Chat = Chat;
})(Vfs || (Vfs = {}));
