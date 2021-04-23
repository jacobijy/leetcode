class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    private static create(arr: number[], index) {
        let node = new TreeNode(arr[index], this.create(arr, ++index), this.create(arr, ++index));
        return node;
    }

    static generate(arr: number[]): TreeNode {
        // let root = new TreeNode(arr[0]);
        let index = 0;
        let root;
        while (arr[index] !== null) {
            // root = new TreeNode(arr[index], arr[++index], arr[++])
        }
        return root;
    }
}