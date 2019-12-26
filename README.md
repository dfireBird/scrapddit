# Scrapddit

A program to retrive posts titles from a reddit user or a subreddit.

The program only retrives titles of top 25 posts from a subreddit and reddit user.

Used libraries: [snoowrap](https://github.com/not-an-aardvark/snoowrap) and [commander](https://github.com/tj/commander.js)

![imgur](https://i.imgur.com/Spj7KI3.gif)


## Usage

Download the program from [here](https://github.com/Phoenix181/scrapddit/releases/tag/v1.0-beta)

**Warning**: Make sure to read any script from internet before running in your PC.

Usage: 
```bash
node index.js [options] [command]
scrappdit [options] [command]
```

Use `u` flag to get the top post titles of the user.

```bash
node index.js u <username> 
scrappdit u <username>
```

Use `s` flag to get the hot post titles of the subreddit.

```bash
node index.js s <subredditname>
scrappdit s <subredditname>
```

Use `-c, --count <count>` option to get a specified number of post titles. The default count is 25.

```bash
node index.js u <username> -c <count>
node index.js s <subreddit name> -c <count>
```

List of options available:

  - `-V, --version`                Output the version number

  - `-h, --help`                   Output usage information

  - `-c, --count <count>`          Specify the count of posts you want (default: 25);

List of commands avaiable:

 - `user | u <username>`            Get post titles from a user.
 - `subreddit | s <subredditname>`  Get post titles from a subreddit.

## Contributing

1. Clone the repo
2. `npm install`
3. `node index.js <option> <commands>`
4. :tada:

Optional:

Install [pkg](https://github.com/zeit/pkg) to package the script into a executable!
