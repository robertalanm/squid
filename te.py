from typing import List

# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

 

# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
 

# Constraints:

# 1 <= strs.length <= 200
# 0 <= strs[i].length <= 200
# strs[i] consists of only lowercase English letters.

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        prefix = strs[0]
        for i in range(1, len(strs)):
            while strs[i].find(prefix) != 0:
                prefix = prefix[:-1]
                if not prefix:
                    return ""
        return prefix

solve = Solution()

test_strs = [
    ["flower","flow","flight"], 
    ["dog","racecar","car"]
]

for strs in test_strs:
    answer = solve.longestCommonPrefix(strs)
    if len(answer) is 0:
        print("answer is None!")
    else:
        print("answer:", answer)

# IDEAL RESPONSE
# answer: fl
# answer is None!


# JAVASCRIPT QUESTION
# // Without using .flat(), create a function to flatten an array

# // const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
# // flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]


# (function main() {
#     const flatten = (arr) => {
#         // your code goes here


#     }
#     const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
#     const answer = flatten(exampleArray)
#     console.log(answer);
# }());