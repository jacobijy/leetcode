/*
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.95%)
 * Total Accepted:    248.3K
 * Total Submissions: 731.4K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let temp = head;
  let array = [temp];
  let length = 1;
  while (temp.next) {
    array.push(temp.next);
    temp = temp.next;
    length++;
  }
  console.log(length)
  if (n > length || n <= 0) {
    return head;
  }
  else if (n == length) {
    return head.next;
  }
  else if (n == 1) {
    let node = array[length - n - 1];
    node.next = null;
  }
  else {
    let nNode = array[length - n];
    let nNodePre = array[length - n - 1];
    let nNodeNext = array[length - n + 1];
    nNodePre.next = nNodeNext;
  }
  return head;
};
