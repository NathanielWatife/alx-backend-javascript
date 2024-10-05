// 1-block-scoped.js
export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      let task = true;  // block-scoped variable
      let task2 = false; // block-scoped variable
    }
  
    return [task, task2]; // returns the outer variables, not the inner ones
}
  