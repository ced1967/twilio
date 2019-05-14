// https://itnext.io/send-sms-with-node-js-typescript-and-twilio-32d1e631d656
//import * as Twilio from 'twilio';
declare const Twilio: any;

module Vfs {
	export class Chat {
		twilioNumber = 'your-twilio-number';
		accountSid = 'SK93813e8bf645872bac5b7614cdc061c1';
		authToken = 'something-something';
		//token = "eyJjdHkiOiJ0d2lsaW8tZnBhO3Y9MSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJpc3MiOiJTSzkzODEzZThiZjY0NTg3MmJhYzViNzYxNGNkYzA2MWMxIiwiZXhwIjoxNTU3Mzk5NjE0LCJncmFudHMiOnsiaWRlbnRpdHkiOiJjZWQxOTY3QHlhaG9vLmNvbSIsImNoYXQiOnsic2VydmljZV9zaWQiOiJJUzVhZWNlZTkxNmJkYzQ1NTU4ZDkwZDNjZGRhMjA2MWEzIiwiZGVwbG95bWVudF9yb2xlX3NpZCI6bnVsbCwiZW5kcG9pbnRfaWQiOm51bGwsInB1c2hfY3JlZGVudGlhbF9zaWQiOm51bGx9fSwianRpIjoiU0s5MzgxM2U4YmY2NDU4NzJiYWM1Yjc2MTRjZGMwNjFjMS0xNTU3Mzk2MDk2Iiwic3ViIjoiQUMwNDgzZTUxZjNiMWQyYjc1MjIwYmRhYmFlNjY0YTYxZSJ9.yyrQWDROAvrodGBiiyPBUWlsjjVW44fAMdELGkhLu28";
		token = "eyJjdHkiOiJ0d2lsaW8tZnBhO3Y9MSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJpc3MiOiJTS2MzMjRkY2U3YzFmMzQ4MjFkNjgwOGRmYjA3NGUwMzI4IiwiZXhwIjoxNTU3Mzk5OTg0LCJncmFudHMiOnsiaWRlbnRpdHkiOiJjZWQxOTY3QHlhaG9vLmNvbSIsImNoYXQiOnsic2VydmljZV9zaWQiOiJJUzVhZWNlZTkxNmJkYzQ1NTU4ZDkwZDNjZGRhMjA2MWEzIiwiZGVwbG95bWVudF9yb2xlX3NpZCI6bnVsbCwiZW5kcG9pbnRfaWQiOm51bGwsInB1c2hfY3JlZGVudGlhbF9zaWQiOm51bGx9fSwianRpIjoiU0tjMzI0ZGNlN2MxZjM0ODIxZDY4MDhkZmIwNzRlMDMyOC0xNTU3Mzk2MzUyIiwic3ViIjoiQUMwNDgzZTUxZjNiMWQyYjc1MjIwYmRhYmFlNjY0YTYxZSJ9.fnNI1FsJ1icf3iA4wkI4fiGcOyyeEg397Tzn1FXEZx8";
		client = null;
		
		constructor() {

		}

		public sendMessage(msg) {
			Twilio.Chat.Client.create(this.token).then(client => {
				// Use client
				/**
				client.getSubscribedChannels().then(function(paginator) {
					for (var i = 0; i < paginator.items.length; i++) {
						const channel = paginator.items[i];
						console.log('Suscribed Channel: ' + channel.friendlyName);
					}
				});

				client.getUserChannelDescriptors().then(function(paginator) {
					for (var i=0; i<paginator.items.length; i++) {
						var channel = paginator.items[i];
						console.log('User Channel: ' + channel.friendlyName);
					}
				});
				 */

				client.getPublicChannelDescriptors().then(function(paginator) {
					debugger;
					for (var i = 0; i < paginator.items.length; i++) {
						const channel = paginator.items[i];
						if(channel.friendlyName != null) {
							console.log('Public Channel: ' + channel.friendlyName);
							channel.sendMessage("Hello")
						}						
					}
				});

				/**
				try {
					client.createChannel({
						uniqueName: 'general',
						friendlyName: 'General Chat Channel',
					})
					.then(function(channel) {
						console.log('Created general channel:');
						console.log(channel);
						channel.sendMessage("Hi!");
					});	
				}
				catch(e) {
					debugger

					console.log(e)
				}
				*/
			});
/*
			if(!this.client)
				this.client = Twilio(this.accountSid, this.authToken, null);

		var chat = new this.client.Chat();
	*/	

			//this.client.sendMessage("twilio rocks!!");
		}
	}
}