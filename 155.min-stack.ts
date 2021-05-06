/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    private data: { [key: number]: any };
    private _top: number;
    constructor() {
        this._top = -1;
        this.data = {};
    }

    push(val: number): void {
        ++this._top;
        this.data[this._top] = val;
    }

    pop(): void {
        let tmp = 0;
        if (this._top == -1) {
            // cout << "栈已空！" <<endl;
            console.log("栈已空！");
            return;
        }
        else {
            tmp = this.data[this._top--];
        }
    }

    top(): number {
        let tmp = 0;
        if (this._top == -1) {
            // cout << "栈已空！" <<endl;
            console.log("栈空！");
            return null;
        }
        else {
            tmp = this.data[this._top];
        }
        return tmp;
    }

    getMin(): number {
        if (this._top == -1) {
            // cout << "栈已空！" <<endl;
            console.log("栈已空！");
            return;
        }
        else {
            let tmp;
            for (let i = 0; i <= this._top; i++) {
                if (tmp === undefined || tmp > this.data[i]) {
                    tmp = this.data[i];
                }
            }
            return tmp;
        }
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
// @lc code=end

