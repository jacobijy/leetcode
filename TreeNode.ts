export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    static create(val) {
        if (val === null) return null;
        return new TreeNode(val);
    }

    static generate(arr: number[]) {
        let index = 0;
        let root = new TreeNode(arr[0]);
        let current = root;
        let count = 1;
        let collects = [root]
        while (true) {
            let nodesC = count;
            let arrN = collects;
            collects = [];
            count = 0;
            for (let i = 0; i < nodesC; i++) {
                current = arrN[i];
                current.left = TreeNode.create(arr[++index]);
                current.right = TreeNode.create(arr[++index])
                if (current.left !== null) {
                    count++;
                    collects.push(current.left);
                }
                if (current.right !== null) {
                    count++;
                    collects.push(current.right);
                }
            }
            if (arr[index + 1] === undefined) {
                break;
            }
        }
        return root;
    }
}

let root = TreeNode.generate([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
console.log(root.left.left)