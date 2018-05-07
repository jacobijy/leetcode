/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (41.42%)
 * Total Accepted:    345.2K
 * Total Submissions: 833.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2
  }
  else if (l2 == null) {
    return l1
  }
  let rstDummy = new ListNode(0);
  let prevNode = rstDummy;
  while (l1 || l2) {
    let a =l1 ? l1.val : l2.val + 1;
    let b =l2 ? l2.val : l1.val + 1;
    if (a < b) {
      prevNode.next = new ListNode(a);
      l1 = l1 ? l1.next : l1;
    }
    else if (a >=b) {
      prevNode.next = new ListNode(b);
      l2 = l2 ? l2.next : l2;
    }
    prevNode = prevNode.next;
  }
  return rstDummy.next
};


