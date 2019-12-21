const Reddit = require('./Reddit');

Reddit.getHot().map(post => post.title).then(console.log)