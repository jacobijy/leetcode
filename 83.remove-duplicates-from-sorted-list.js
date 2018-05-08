/*
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (40.34%)
 * Total Accepted:    236.5K
 * Total Submissions: 586.2K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->1->2
 * Output: 1->2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->2->3->3
 * Output: 1->2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head ||!head.next) return head
    let temp = head;
    let val = temp.val;
    while(temp.next) {
      let temp_ex = temp.next;
      while(temp_ex &&val == temp_ex.val) {
        temp_ex = temp_ex.next
        temp.next = temp_ex
      }
      temp = temp_ex;
      if (!temp) break;
      val = temp.val;
    }
    return head;
};
