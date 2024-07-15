class Solution {
    private func getNextWords(_ word: String, _ wordSet: inout Set<String>) -> [String] {
        var nextWords = [String]()
        var wordArray = Array(word)
        
        for i in 0..<wordArray.count {
            let originalChar = wordArray[i]
            for char in "abcdefghijklmnopqrstuvwxyz" {
                wordArray[i] = char
                let newWord = String(wordArray)
                if wordSet.contains(newWord) {
                    nextWords.append(newWord)
                    wordSet.remove(newWord)
                }
            }
            wordArray[i] = originalChar
        }
        return nextWords
    }
    
    func ladderLength(_ beginWord: String, _ endWord: String, _ wordList: [String]) -> Int {
        var wordSet = Set(wordList)
        guard wordSet.contains(endWord) else { return 0 }
        
        var queue = [beginWord]
        var steps = 1
        
        while !queue.isEmpty {
            var nextQueue = [String]()
            for word in queue {
                if word == endWord {
                    return steps
                }
                let nextWords = getNextWords(word, &wordSet)
                nextQueue.append(contentsOf: nextWords)
            }
            queue = nextQueue
            steps += 1
        }
        
        return 0
    }
}
