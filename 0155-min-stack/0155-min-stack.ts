class MinStack {
    stack:Array<number>;
    min:number;

    constructor() {
        this.stack = [];
        this.min = 2147483647;    
    }

    push(val: number): void {
        this.stack.push(val);
        this.min = val < this.min ? val : this.min;
    }

    pop(): void {
        const popNumber = this.stack.pop();
        if (popNumber === this.min) this.min = Math.min(...this.stack);
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */