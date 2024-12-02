class Twitter {
    private tweets: Map<number, { tweetId: number, timestamp: number }[]>;
    private followers: Map<number, Set<number>>;
    private time: number;

    constructor() {
        this.tweets = new Map();
        this.followers = new Map();
        this.time = 0;
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push({ tweetId, timestamp: this.time++ });
    }

    getNewsFeed(userId: number): number[] {
        const feeds: { tweetId: number, timestamp: number }[] = [];
        const followees = this.followers.get(userId) || new Set();
        
        if (this.tweets.has(userId)) {
            feeds.push(...this.tweets.get(userId)!);
        }

        for (const followee of followees) {
            if (this.tweets.has(followee)) {
                feeds.push(...this.tweets.get(followee)!);
            }
        }

        feeds.sort((a, b) => b.timestamp - a.timestamp);
        return feeds.slice(0, 10).map(tweet => tweet.tweetId);
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.followers.has(followerId)) {
            this.followers.set(followerId, new Set());
        }
        this.followers.get(followerId).add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.followers.has(followerId)) {
            this.followers.get(followerId).delete(followeeId);
        }
    }
}
