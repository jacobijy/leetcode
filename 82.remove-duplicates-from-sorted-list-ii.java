import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode id=82 lang=java
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (39.47%)
 * Likes:    2814
 * Dislikes: 123
 * Total Accepted:    324.1K
 * Total Submissions: 820.3K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given the head of a sorted linked list, delete all nodes that have duplicate
 * numbers, leaving only distinct numbers from the original list. Return the
 * linked list sorted as well.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,3,3,4,4,5]
 * Output: [1,2,5]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,1,1,2,3]
 * Output: [2,3]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 * 
 * 
 */

// @lc code=start

// Definition for singly-linked list.

class Solution {
    public static void main(String[] args) {
        Solution s = new Solution();
        int[] arr = {1,2,2};
        ListNode head = s.generateListNode(arr);
        head = s.deleteDuplicates(head);
        s.toArray(head);
    }
    public List<Integer> toArray(ListNode head) {
        List<Integer> arr=new ArrayList<Integer>();
        ListNode tmp = head;
        while(tmp != null) {
            arr.add(tmp.val);
            tmp = tmp.next;
        }
        System.out.println(arr);
        return arr;
    }
    public ListNode generateListNode(int[] arr) {
        ListNode head = new ListNode();
        ListNode tmp = head;
        for (int i = 0; i < arr.length; i++) {
            tmp.val = arr[i];
            if (i < arr.length - 1) {
                ListNode node = new ListNode();
                tmp.next = node;
                tmp = node;
            }
        }
        return head;
    }
    public ListNode deletaNode(ListNode head, ListNode node) {
        ListNode tmp = head;
        while (tmp.next != null) {
            if (tmp.next.equals(node)) {
                if (node.next != null) {
                    ListNode next = node.next;
                    tmp.next = next;
                    node = null;
                } else {
                    tmp.next = null;
                    node = null;
                    break;
                }
            }
            tmp = tmp.next;
        }
        if (head.equals(node)) {
            head = head.next;
        }
        return head;
    }

    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return head;
        int val = head.val;
        ListNode tmp = head;
        while (tmp.next != null) {
            ListNode next = tmp.next;
            int nextVal = next.val;
            if (val == nextVal) {
                head = deletaNode(head, tmp);
                head = deletaNode(head, next);
            } else {
                val = nextVal;
            }
            tmp = tmp.next;
        }
        return head;
    }
}
// @lc code=end