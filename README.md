# Scrapddit

A program to retrive posts from a reddit user or a subreddit.

The program only retrives top 25 posts from a subreddit and reddit user.

## Usage

**Warning**: Make sure to read any script from internet before running in your PC.

Usage: ```node index.js [options] [command]```

Use `u` flag to get the top 25 posts of the user.

```node index.js u <username> ```

Use `s` flag to get the hot 25 posts of the subreddit.

```node index.js s <subredditname>```

List of options available:

  - -V, --version                output the version number

  - -h, --help                   output usage information

List of commands avaiable:

 - user|u <username>            Get posts from a user.
 - subreddit|s <subredditname>  Get posts from a subreddit.

## Contributing

1. Clone the repo
2. `npm install`
3. `node index.js <option> <commands>`
4. :tada:

Optional:

Install [pkg](https://www.npmjs.com/package/pkg) to package the script into a executable!
