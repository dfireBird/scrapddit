const Reddit = require('./src/Reddit');
const program = require('commander');
const livestream = require('./src/livestream');

program
    .version('1.0.0')
    .description('Retrieves post titles from a subreddit or a reddit user. \n');

program
    .option('-c, --count <count>', 'Specify the count of posts you want', '25');

program
    .command('user <username>')
    .alias('u')
    .description('Get post titles from a user.')
    .action((username) => {
        if(Number(program.count) < 99) {
            Reddit.getUser(username)
                .getSubmissions({ limit: Number(program.count) })
                .map(post => post.title)
                .then(console.log)
                .catch(console.error);
        }
    });

program
    .command('subreddit <subredditname>')
    .alias('s')
    .description('Get post titles from a subreddit.')
    .action((subredditname) => {
        if(Number(program.count) < 99) {
            Reddit.getSubreddit(subredditname)
                .getHot({limit: Number(program.count)})
                .map(post => post.title)
                .then(console.log)
                .catch(console.error);
        }
    });

program
    .command('stream <subredditname>')
    .alias('t')
    .description('Streams the post titles from a specified subreddit')
    .action((subredditname) => {
        console.log('\x1b[34m', 'Ctrl-C to quit');
        livestream(subredditname);
    });

program.parse(process.argv);

if(program.count >= 99) {
    console.error('I can\'t display more than 99 items in console');
}

if(process.argv.length === 2)
    console.error('No arguments provided. \nUsage: index [options] [command]');