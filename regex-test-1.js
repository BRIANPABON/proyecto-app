const text = 'pimbarola rola cola imbarola'
const reg = /imba/g
console.log(reg.test(text));
console.log(text.match(reg));