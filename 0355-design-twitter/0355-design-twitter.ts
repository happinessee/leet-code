class Twitter {
    private tweets: Map<number, { tweetId: number, timestamp: number }[]>; // userId -> tweets
    private followers: Map<number, Set<number>>; // userId -> followers
    private time: number; // Global timestamp for ordering tweets

    constructor() {
        this.tweets = new Map();
        this.followers = new Map();
        this.time = 0;
    }

    // Post a new tweet
    postTweet(userId: number, tweetId: number): void {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId)!.push({ tweetId, timestamp: this.time++ });
    }

    // Retrieve the 10 most recent tweet IDs
    getNewsFeed(userId: number): number[] {
        const feeds: { tweetId: number, timestamp: number }[] = [];
        const followees = this.followers.get(userId) || new Set();
        
        // Include user's own tweets
        if (this.tweets.has(userId)) {
            feeds.push(...this.tweets.get(userId)!);
        }

        // Include tweets from followees
        for (const followee of followees) {
            if (this.tweets.has(followee)) {
                feeds.push(...this.tweets.get(followee)!);
            }
        }

        // Sort by timestamp (descending) and return the 10 most recent
        feeds.sort((a, b) => b.timestamp - a.timestamp);
        return feeds.slice(0, 10).map(tweet => tweet.tweetId);
    }

    // Follow a user
    follow(followerId: number, followeeId: number): void {
        if (!this.followers.has(followerId)) {
            this.followers.set(followerId, new Set());
        }
        this.followers.get(followerId)!.add(followeeId);
    }

    // Unfollow a user
    unfollow(followerId: number, followeeId: number): void {
        if (this.followers.has(followerId)) {
            this.followers.get(followerId)!.delete(followeeId);
        }
    }
}
