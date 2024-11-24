class Node {
    constructor(key, value, next = null) {
        this.key = key;   // 현재 키
        this.value = value; // 현재 값
        this.next = next;   // 다음 노드
    }
}

class MyHashMap {
    constructor() {
        this.size = 1 << 20; // 2^20 = 1,048,576
        this.hashMapArray = new Array(this.size).fill(null); // 해시 테이블
    }

    /** 해시 함수 */
    hash(key) {
        return key & (this.size - 1); // key % size 대신 비트 연산
    }

    /** 값 삽입 */
    put(key, value) {
        const index = this.hash(key); // 해시 계산
        if (!this.hashMapArray[index]) {
            // 버킷이 비어 있으면 새 노드 생성
            this.hashMapArray[index] = new Node(key, value);
            return;
        }

        let current = this.hashMapArray[index];
        while (true) {
            if (current.key === key) {
                // 동일한 키가 있으면 값 업데이트
                current.value = value;
                return;
            }
            if (!current.next) break; // 다음 노드가 없으면 루프 종료
            current = current.next;
        }

        // 연결 리스트 끝에 새 노드 추가
        current.next = new Node(key, value);
    }

    /** 값 검색 */
    get(key) {
        const index = this.hash(key); // 해시 계산
        let current = this.hashMapArray[index];
        while (current) {
            if (current.key === key) return current.value; // 키가 일치하면 값 반환
            current = current.next; // 다음 노드로 이동
        }
        return -1; // 키가 없으면 -1 반환
    }

    /** 값 삭제 */
    remove(key) {
        const index = this.hash(key); // 해시 계산
        let current = this.hashMapArray[index];
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    // 중간 또는 끝 노드 삭제
                    prev.next = current.next;
                } else {
                    // 첫 번째 노드 삭제
                    this.hashMapArray[index] = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        }
    }
}
