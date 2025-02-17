class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // 단어 삽입
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!(char in node.children)) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }

  // 단어의 끝에 해당하는 노드의 isWord 값을 토글 (예: 제거하거나 복원)
  toggleWord(word, value) {
    let node = this.root;
    for (const char of word) {
      if (!(char in node.children)) return; // 단어가 Trie에 없으면 리턴
      node = node.children[char];
    }
    node.isWord = value;
  }
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  const trie = new Trie();

  // 빈 문자열은 제외하고 모든 단어를 Trie에 삽입
  for (const word of words) {
    if (word.length > 0) {
      trie.insert(word);
    }
  }

  const result = [];

  // DFS와 메모이제이션을 이용해 word[index:]를 구성할 수 있는지 확인
  const canForm = (word, index, memo) => {
    if (index === word.length) return true;
    if (memo[index] !== undefined) return memo[index];

    let node = trie.root;
    for (let i = index; i < word.length; i++) {
      const char = word[i];
      if (!(char in node.children)) break;
      node = node.children[char];
      // 단어의 한 조각이 끝나는 지점이라면, 재귀적으로 남은 부분을 확인
      if (node.isWord && canForm(word, i + 1, memo)) {
        memo[index] = true;
        return true;
      }
    }
    memo[index] = false;
    return false;
  };

  // 각 단어에 대해 검사
  for (const word of words) {
    if (word.length === 0) continue;
    const memo = new Array(word.length);
    // 자기 자신을 구성 단어로 사용하지 않도록, 단어의 끝 노드를 일시적으로 비활성화
    trie.toggleWord(word, false);
    // 단어 전체를 구성할 수 있는지 확인하는데, 단어 자체가 Trie에 있지 않으므로 반드시 2개 이상의 조각으로 구성되어야 함
    if (canForm(word, 0, memo)) {
      result.push(word);
    }
    // 검사 후 단어를 다시 복원
    trie.toggleWord(word, true);
  }

  return result;
};
