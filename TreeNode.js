export class TreeNode {
    val
    left
    right
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    static index = 0;

    static create(arr, index) {
        return node;
    }

    static generate(arr) {
        this.index = 0;
        let index = 0;
        let root = new TreeNode(arr[0]);
        root.left = new TreeNode(arr[1]);
        root.right = new TreeNode(arr[2]);
        let current = root;
        while(true) {
            let parent = current; // 存储当前节点，后边当前节点会指向其子节点
            if (data < current.data) { // 如果插入的数据小于当前节点的数据
                current = current.left; // 当前节点变为其左节点
                if (current == null) { // 如果当前节点为null 则把插入到当前节点
                    parent.left = n;
                    break;
                }
            } else {// 如果大于的话插入右节点
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
        return root;
    }
}

let root = TreeNode.generate([5,4,8,11,null,13,4,7,2,null,null,null,1])
console.log(root.left.left)