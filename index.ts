import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const LaunchDarkly = require('launchdarkly-node-server-sdk');

// TODO : Enter your LaunchDarkly SDK key here
const client = LaunchDarkly.init("sdk-6886d82f-4487-4073-8977-dd625dfbe55e");

//const client = LaunchDarkly.init("5dd325bdc3a8bb0968c8ab7f");
const user = {
   "firstName":"Bob",
   "lastName":"Loblaw",
   "key":"louise@example.com",
   "custom":{
      "groups":"beta_testers"
   }
};

client.once('ready', function() {
//   // TODO : Enter the key for your feature flag here
  client.variation("typescript", user, false, function(err, showFeature) {
    // client.track("event-called", user);
    if (showFeature) {
      // application code to show the feature
      console.log("Showing your feature to " + user.key );
    } else {
      // the code to run if the feature is off
      console.log("Not showing your feature to " + user.key);
    }
    client.flush(function() {
      client.close();
    });
  });
});
