"use strict";
// interface IStack<T> {
//     push( item:T ): T
//     pop(): T
// }
// class Stack<T> implements IStack<T> {
//     arr: T[]
//     constructor() {
//         this.arr = []
//     }
//     push(item: T): T {
//         this.arr.push(item)
//         return this.arr[this.arr.length - 1]
//     }
//     pop() {
//         if ( this.arr.length <= 0 )
//             throw new Error('Stack is empty')
//         let popped:T = this.arr.pop() as T
//         return popped
//     }
// }
// const parenthesisMap:Map<string, string> = new Map<string, string>([
//     ['(', ')'],
//     ['{', '}'],
//     ['[', ']']
// ])
// function isValid(s: string): boolean {
//     if ( s.length % 2 != 0 ) return false;
//     let stack = new Stack<string>()
//     for ( let i=0; i<s.length; i++ ) {
//         let char = s[i]
//         if ( ['(', '{', '['].includes( char ) ) {
//             stack.push(char)
//             continue;
//         }
//         let closedPopped = char
//         try {
//             let openedPopped = stack.pop()
//             if ( closedPopped == undefined || openedPopped == undefined ) return false;
//             if ( closedPopped != parenthesisMap.get(openedPopped) )
//                 return false;
//         } catch (error) {
//             return false;
//         }    
//     }
//     if ( stack.arr.length > 0) return false;
//     return true;
// }
// console.log( isValid( "[()]") )
const parenthesisMap = {
    '(': ')',
    '{': '}',
    '[': ']'
};
function isValid(s) {
    let arr = [];
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let ch = s[i];
        if (['(', '{', '['].includes(ch)) {
            arr.push(ch);
            continue;
        }
        let popped = arr.pop();
        if (popped == undefined)
            return false;
        if (popped == '(' && ch != ')')
            return false;
        if (popped == '{' && ch != '}')
            return false;
        if (popped == '[' && ch != ']')
            return false;
    }
    if (arr.length > 0)
        return false;
    return true;
}
console.log(isValid("[()]"));
