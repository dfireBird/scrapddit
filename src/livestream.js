const Reddit = require('./Reddit');
const {SubmissionStream} = require('snoostorm');

const livestream = (name) => {
   const submissions = new SubmissionStream(Reddit, {subreddit: name, limit: 10, pollTime: 1000});
   submissions.on('item', (submission) => {
       console.log('\x1b[32m%s\x1b[0m', submission.title);
   });
}

module.exports = livestream;