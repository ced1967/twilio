package com.vincle.twilio;

import com.twilio.jwt.accesstoken.AccessToken;
import com.twilio.jwt.accesstoken.ChatGrant;

public class GenerateToken {
	public static void main(String[] args) {
    String twilioAccountSid = "AC0483e51f3b1d2b75220bdabae664a61e";
    //String twilioApiKey = "SK93813e8bf645872bac5b7614cdc061c1";			//std
    //String twilioApiSecret = "hAAhcSerTCxRuSdsxnuOJAy3M0MZILW2";		//

    String twilioApiKey = "SKc324dce7c1f34821d6808dfb074e0328";			//master
    String twilioApiSecret = "32TAn7PxC285qn6D8bGSqeTKWg1GRfZv";		//

    String serviceSid = "IS5aecee916bdc45558d90d3cdda2061a3";
    String identity = "ced1967@yahoo.com";

    ChatGrant grant = new ChatGrant();
    grant.setServiceSid(serviceSid);

    AccessToken token = new AccessToken.Builder(twilioAccountSid, twilioApiKey, twilioApiSecret)
        .identity(identity).grant(grant).build();

    System.out.println(token.toJwt());
    System.out.println("*** WARNING: valid only 1 hour");
  }
}