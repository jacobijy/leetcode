class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    public insert() {

    }

    private static index = 0;
    private static leftIndex = 0;
    private static create(arr: number[], index) {
        if (!arr[this.index]) return null;
        let node = new TreeNode(arr[this.index], this.create(arr, index), this.create(arr, index+1));
        return node;
    }

    static generate(arr: number[]): TreeNode {
        this.index = 0;
        let index = 0;
        let root = new TreeNode(arr[0]);
        let current = root;
        while(true) {
            current.left = new TreeNode(arr[++index]);
            current.right = new TreeNode(arr[++index]);
            if (current.left) {
                current = current.left;
            }
            else if (current.right) {

            }
        }
        return root;
    }
}

let root = TreeNode.generate([5,4,8,11,null,13,4,7,2,null,null,null,1])
console.log(root.left.left)