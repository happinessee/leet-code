class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
}

class StreamChecker {
    constructor(words) {
        this.trie = new Trie();
        this.stream = [];
        
        // Insert reversed words into the trie
        for (let word of words) {
            this.trie.insert(word.split('').reverse());
        }
    }

    query(letter) {
        // Add letter to stream
        this.stream.push(letter);
        
        // Check for suffix match
        let node = this.trie.root;
        
        // Traverse the trie in reverse order
        for (let i = this.stream.length - 1; i >= 0; i--) {
            const char = this.stream[i];
            if (!node.children[char]) {
                return false; // No match found
            }
            node = node.children[char];
            if (node.isEndOfWord) {
                return true; // Found a matching suffix
            }
        }
        
        return false; // No matching suffix found
    }
}

