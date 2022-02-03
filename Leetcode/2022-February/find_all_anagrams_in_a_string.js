/**
 * Leetcode-02/02/2022
 * {@link https://leetcode.com/problems/find-all-anagrams-in-a-string/}
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let pmap = new Map();
  let smap = new Map();
  if (s.length < p.length) {
    return [];
  }
  let ans = [];

  function compare(smp, pmp) {
    let skey = smp.keys();
    let pkey = pmp.keys();

    if (skey.length !== pkey.length) {
      return false;
    }
    for (let i of skey) {
      if (smp.get(i) !== pmp.get(i)) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < p.length; i++) {
    pmap.set(p[i], (pmap.get(p[i]) || 0) + 1);
  }

  for (let i = 0; i < p.length; i++) {
    smap.set(s[i], (smap.get(s[i]) || 0) + 1);
  }

  for (let i = p.length; i < s.length; i++) {
    if (compare(smap, pmap)) {
      ans.push(i - p.length);
    }

    smap.set(s[i], (smap.get(s[i]) || 0) + 1);

    smap.set(s[i - p.length], (smap.get(s[i - p.length]) || 0) - 1);
    if (smap.get(s[i - p.length]) === 0) {
      smap.delete(s[i - p.length]);
    }
  }
  if (compare(smap, pmap)) {
    ans.push(s.length - p.length);
  }

  return ans;
};
