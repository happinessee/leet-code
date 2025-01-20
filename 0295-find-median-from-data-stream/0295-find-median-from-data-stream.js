class MedianFinder {
  constructor() {
    this.small = new MaxHeap(); // 최대 힙 (작은 절반)
    this.large = new MinHeap(); // 최소 힙 (큰 절반)
  }

  addNum(num) {
    // 1. 최대 힙에 먼저 삽입
    this.small.push(num);

    // 2. 최대 힙의 루트 값을 최소 힙으로 이동
    if (this.small.size() > 0 && this.large.size() > 0 && this.small.top() > this.large.top()) {
      this.large.push(this.small.pop());
    }

    // 3. 두 힙의 크기 균형 유지
    if (this.small.size() > this.large.size() + 1) {
      this.large.push(this.small.pop());
    } else if (this.large.size() > this.small.size()) {
      this.small.push(this.large.pop());
    }
  }

  findMedian() {
    if (this.small.size() > this.large.size()) {
      return this.small.top(); // 홀수 개일 때
    } else {
      return (this.small.top() + this.large.top()) / 2; // 짝수 개일 때
    }
  }
}

// 힙 구현 (MaxHeap과 MinHeap은 별도 구현 필요)

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 인덱스
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 인덱스
  leftChildIndex(index) {
    return 2 * index + 1;
  }

  // 오른쪽 자식 인덱스
  rightChildIndex(index) {
    return 2 * index + 2;
  }

  // 힙에 값 추가
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // 힙에서 루트 값 제거 후 반환
  pop() {
    if (this.size() === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return root;
  }

  // 루트 값 반환
  top() {
    return this.heap[0];
  }

  // 힙 크기 반환
  size() {
    return this.heap.length;
  }

  // 삽입 시 힙 재구성
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.heap[parent] >= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  // 삭제 시 힙 재구성
  bubbleDown() {
    let index = 0;
    while (this.leftChildIndex(index) < this.size()) {
      const left = this.leftChildIndex(index);
      const right = this.rightChildIndex(index);
      let largerChild = left;

      if (right < this.size() && this.heap[right] > this.heap[left]) {
        largerChild = right;
      }

      if (this.heap[index] >= this.heap[largerChild]) break;

      [this.heap[index], this.heap[largerChild]] = [this.heap[largerChild], this.heap[index]];
      index = largerChild;
    }
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return root;
  }

  top() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.heap[parent] <= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  bubbleDown() {
    let index = 0;
    while (this.leftChildIndex(index) < this.size()) {
      const left = this.leftChildIndex(index);
      const right = this.rightChildIndex(index);
      let smallerChild = left;

      if (right < this.size() && this.heap[right] < this.heap[left]) {
        smallerChild = right;
      }

      if (this.heap[index] <= this.heap[smallerChild]) break;

      [this.heap[index], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[index]];
      index = smallerChild;
    }
  }
}