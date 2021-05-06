/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function switchNodes(n1: ListNode, n2: ListNode) {
    let v1 = n1.val;
    n1.val = n2.val;
    n2.val = v1;
}

function sortList(head: ListNode | null): ListNode | null {
    if (head == null)
        return;
    let pBase = head;//作为枢纽值的结点
    let pleft = pBase;//指向当前最后一个比枢纽值小的结点,pBase与pleft之间的结点值始终都比枢纽值小，
    let pright = pBase.next;//指向比枢纽值大的结点
    let temp;
    while (pright != null) {
        //作为遍历的pright指针，此时当pright找到了下一个比基准值小的结点，就把pleft右移，将pright的值与pleft交换
        if (pright.val < pBase.val) {
            pleft = pleft.next;//移向下一个存储小值的位置
            if (pright != pleft) {
                temp = pleft.val;
                pleft.val = pright.val;
                pright.val = temp;
            }
        } 
        pright = pright.next;
    }
    temp = pBase.val;
    pBase.val = pleft.val;
    pleft.val = temp;//原pleft的下一个结点就比枢纽值大
    // sortList(pBase);
    sortList(pleft);
    return head;
};
// @lc code=end

