// https://itnext.io/send-sms-with-node-js-typescript-and-twilio-32d1e631d656
//import * as Twilio from 'twilio';
declare const Twilio: any;

//Run simple server... open index.html to run this class
module Vfs {
	export class Chat {
		twilioNumber = 'your-twilio-number';
		accountSid = 'SK93813e8bf645872bac5b7614cdc061c1';
		authToken = 'something-something';

		//The token is valid only for a limited amount of time (see java program that generates the token)
		token = "eyJjdHkiOiJ0d2lsaW8tZnBhO3Y9MSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJpc3MiOiJTS2MzMjRkY2U3YzFmMzQ4MjFkNjgwOGRmYjA3NGUwMzI4IiwiZXhwIjoxNTU5NjMwMjczLCJncmFudHMiOnsiaWRlbnRpdHkiOiJjZWQxOTY3QHlhaG9vLmNvbSIsImNoYXQiOnsic2VydmljZV9zaWQiOiJJUzVhZWNlZTkxNmJkYzQ1NTU4ZDkwZDNjZGRhMjA2MWEzIiwiZGVwbG95bWVudF9yb2xlX3NpZCI6bnVsbCwiZW5kcG9pbnRfaWQiOm51bGwsInB1c2hfY3JlZGVudGlhbF9zaWQiOm51bGx9fSwianRpIjoiU0tjMzI0ZGNlN2MxZjM0ODIxZDY4MDhkZmIwNzRlMDMyOC0xNTU5NTQzOTM2Iiwic3ViIjoiQUMwNDgzZTUxZjNiMWQyYjc1MjIwYmRhYmFlNjY0YTYxZSJ9.TXx8Cjhk89dmNJyOVbdUc-zr5DTptL8NZouvTiUrF6U";
		client = null;

		constructor() {
		}

		public sendMessage(msg) {
			try {
				Twilio.Chat.Client.create(this.token).then(client => {
					// Use client
					client.on('channelJoined',function(channel) {
						console.log('Joined channel ' + channel.friendlyName);
					});
					client.getPublicChannelDescriptors().then(function(paginator) {
						for(var i = 0;i < paginator.items.length;i++) {
							const channelDescriptor = paginator.items[i];
							if(channelDescriptor.friendlyName != null) {
								console.log('Public Channel: ' + channelDescriptor.friendlyName);
								channelDescriptor.getChannel().then(function(chn) {
									if(chn.state.status !== "joined") {
										chn.join().then(function(channel) {
											console.log('Joined channel');
											chn.sendMessage("Hello").then((whatever) => {
												console.log(whatever);
											})
										});	
									}
									else {
										chn.sendMessage("Hello3").then((whatever) => {
											console.log(whatever);
										})

									}
								});
							}
						}
					});
				});

			}
			catch(e) {
				alert(e.message)
			}
		}
	}
}