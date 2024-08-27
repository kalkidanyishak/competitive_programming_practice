/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count=1
    for(let i=1; i<nums.length; i++){
        let current=nums[i]
        let pre=nums[i-1]
        if(current!=pre){
            nums[count]=current
            count++
        }
        
    }
    return count
    
};