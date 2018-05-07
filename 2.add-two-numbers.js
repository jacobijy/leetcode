/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (28.72%)
 * Total Accepted:    492.7K
 * Total Submissions: 1.7M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * 
 * Example
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
var addTwoNumbers = function(l1, l2) {
  let rstDummy = new ListNode(0);
  let prevNode = rstDummy;
  let result = 0;
  let tens = 0;
  while (l1 || l2 || tens) {
    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;
    let temp = a + b + tens;
    prevNode.next = new ListNode(temp%10);
    prevNode = prevNode.next;
    tens = Math.floor(temp/10);
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }
  return rstDummy.next;
};
