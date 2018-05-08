/*
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (24.56%)
 * Total Accepted:    138.1K
 * Total Submissions: 562.2K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, rotate the list to the right by k places, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head
  let temp = head;
  let truerotate = k % NodeListLength(head);
  for (let i = 0; i < truerotate; i++) {
    temp = rotateOnceRight(temp)
  }
  
  return temp
};

var NodeListLength = function (head) {
  let length = 1;
  let temp = head;
  while (temp.next) {
    temp = temp.next;
    length++;
  }
  return length;
}

var rotateOnceRight = function (head) {
  let temp = head;
  let last2Node, lastNode;
  while (temp.next) {
    let tempex = temp.next;
    if (tempex.next == null) last2Node = temp;
    temp = tempex
  }
  lastNode = temp;
  last2Node.next = null;
  lastNode.next = head;
  return lastNode;
}