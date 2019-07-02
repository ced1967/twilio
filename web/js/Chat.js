var Vfs;
(function (Vfs) {
    var Chat = (function () {
        function Chat() {
            this.twilioNumber = 'your-twilio-number';
            this.accountSid = 'SK93813e8bf645872bac5b7614cdc061c1';
            this.authToken = 'something-something';
            this.token = "eyJjdHkiOiJ0d2lsaW8tZnBhO3Y9MSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJpc3MiOiJTS2MzMjRkY2U3YzFmMzQ4MjFkNjgwOGRmYjA3NGUwMzI4IiwiZXhwIjoxNTU5NDY4ODU2LCJncmFudHMiOnsiaWRlbnRpdHkiOiJjZWQxOTY3QHlhaG9vLmNvbSIsImNoYXQiOnsic2VydmljZV9zaWQiOiJJUzVhZWNlZTkxNmJkYzQ1NTU4ZDkwZDNjZGRhMjA2MWEzIiwiZGVwbG95bWVudF9yb2xlX3NpZCI6bnVsbCwiZW5kcG9pbnRfaWQiOm51bGwsInB1c2hfY3JlZGVudGlhbF9zaWQiOm51bGx9fSwianRpIjoiU0tjMzI0ZGNlN2MxZjM0ODIxZDY4MDhkZmIwNzRlMDMyOC0xNTU5MzgyNDAwIiwic3ViIjoiQUMwNDgzZTUxZjNiMWQyYjc1MjIwYmRhYmFlNjY0YTYxZSJ9.yqV56wqegLjqGCJlVIdEafjbe7U1auXQSOprO0bhLRU";
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
                                    if (chn.state.status !== "joined") {
                                        chn.join().then(function (channel) {
                                            console.log('Joined channel');
                                            chn.sendMessage("Hello").then(function (whatever) {
                                                console.log(whatever);
                                            });
                                        });
                                    }
                                    else {
                                        chn.sendMessage("Hello3").then(function (whatever) {
                                            console.log(whatever);
                                        });
                                    }
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
