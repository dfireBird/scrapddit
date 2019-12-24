const Reddit = require('./src/Reddit');
const program = require('commander');

program
    .version('1.0.0')
    .description('Retrieves post from a subreddit or a reddit user. \n');

program
    .command('user <username>')
    .alias('u')
    .description('Get posts from a user.')
    .action((username) => {
        Reddit.getUser(username).getSubmissions()
            .then((Submissions) => {
                const titles = Submissions.map((Submission) => {
                    return Submission.title;
                });
                console.log(titles);
            })
            .catch(console.log)
    });

program
    .command('subreddit <subredditname>')
    .alias('s')
    .description('Get posts from a subreddit.')
    .action((subredditname) => {
        Reddit.getSubreddit(subredditname).getHot().map(post => post.title)
            .then(console.log)
            .catch(console.error);
    });

program.parse(process.argv);

if(process.argv.length === 2)
    console.error('No arguments provided. \nUsage: index [options] [command]');