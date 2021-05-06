/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let setA = new Set();
    while(headA) {
        setA.add(headA);
        headA = headA.next;
    }
    while(headB) {
        if (setA.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};
// @lc code=end

