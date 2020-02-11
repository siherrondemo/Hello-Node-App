import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

console.log()
// TODO : Enter your LaunchDarkly SDK key here
// const client = LaunchDarkly.init("sdk-b2f64606-70d8-4188-abea-410887091c61");

// const user = {
//    "firstName":"Bob",
//    "lastName":"Loblaw",
//    "key":"louise@example.com",
//    "custom":{
//       "groups":"beta_testers"
//    }
// };

// client.once('ready', function() {
//   // TODO : Enter the key for your feature flag here
//   client.variation("show-widgets", user, false, function(err, showFeature) {
//     // client.track("event-called", user);
//     if (showFeature) {
//       // application code to show the feature
//       console.log("Showing your feature to " + user.key );
//     } else {
//       // the code to run if the feature is off
//       console.log("Not showing your feature to " + user.key);
//     }
//     client.flush(function() {
//       client.close();
//     });
//   });
// });
