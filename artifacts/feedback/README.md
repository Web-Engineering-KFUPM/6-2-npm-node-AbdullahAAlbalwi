# 6-2-node-npm-main — Feedback

## Submission

- **Lab:** 6-2-node-npm-main
- **Deadline (Riyadh / UTC+03:00):** 2026-04-01T20:59:00+03:00
- **Last commit time (from git log):** 2026-04-01T11:48:14+03:00
- **Submission marks:** **20/20** (On time)


## Files Checked

- Repo root (cwd): C:\5.6\6-2-npm-node-AbdullahAAlbalwi
- Detected project root: C:\5.6\6-2-npm-node-AbdullahAAlbalwi
- Calculator: ✅ C:\5.6\6-2-npm-node-AbdullahAAlbalwi\calculator.js
- Utils folder: ✅ C:\5.6\6-2-npm-node-AbdullahAAlbalwi\utils
- Parser: ✅ C:\5.6\6-2-npm-node-AbdullahAAlbalwi\utils\parser.js
- Operation file: ✅ C:\5.6\6-2-npm-node-AbdullahAAlbalwi\utils\operation.js

---

## TODO-by-TODO Feedback

### TODO 1: Create required utils structure (utils/, parser, operation file) — **5/5**

**Checklist**
- ✅ utils folder exists in the project root
- ✅ utils/parser.js exists
- ✅ utils/operation.js or utils/operations.js exists

**Deductions / Notes**
- ✅ No deductions. Good job!

### TODO 2: Import required modules in calculator.js — **10/10**

**Checklist**
- ✅ Imports operation functions from ./utils/operation(s).js
- ✅ Imports parser functions from ./utils/parser.js
- ✅ Imports lodash using: import _ from "lodash"

**Deductions / Notes**
- ✅ No deductions. Good job!

### TODO 3: Parse command line arguments in calculator.js — **10/10**

**Checklist**
- ✅ Reads operation from process.argv[2]
- ✅ Reads numbers from process.argv.slice(3)

**Deductions / Notes**
- ✅ No deductions. Good job!

### TODO 4: Validate input and calculate result in calculator.js — **15/15**

**Checklist**
- ✅ Checks operation validity using isValidOperation(...)
- ✅ Parses numbers using parseNumbers(...)
- ✅ Uses conditional logic (switch or if/else) to choose the operation
- ✅ Calls add(...) in calculator.js
- ✅ Calls subtract(...) in calculator.js
- ✅ Calls multiply(...) in calculator.js
- ✅ Calls divide(...) in calculator.js
- ✅ Displays output using console.log(...)

**Deductions / Notes**
- ✅ No deductions. Good job!

### TODO 5: Implement add() and subtract() in utils/operation(s).js — **5/10**

**Checklist**
- ✅ Exports add(numbers)
- ✅ Exports subtract(numbers)
- ❌ add(numbers) implements addition logic
- ❌ subtract(numbers) implements subtraction logic

**Deductions / Notes**
- ❗ Missing: add(numbers) implements addition logic
- ❗ Missing: subtract(numbers) implements subtraction logic

### TODO 6: Implement multiply() and divide() in utils/operation(s).js — **5/10**

**Checklist**
- ✅ Exports multiply(numbers)
- ✅ Exports divide(numbers)
- ❌ multiply(numbers) implements multiplication logic
- ❌ divide(numbers) implements division logic

**Deductions / Notes**
- ❗ Missing: multiply(numbers) implements multiplication logic
- ❗ Missing: divide(numbers) implements division logic

### TODO 7: Implement parseNumbers() using lodash in utils/parser.js — **8/10**

**Checklist**
- ✅ Imports lodash using: import _ from "lodash"
- ✅ Exports parseNumbers(input)
- ✅ parseNumbers uses _.map(...)
- ✅ parseNumbers converts strings to numbers
- ❌ parseNumbers uses _.compact(...) and returns the parsed values

**Deductions / Notes**
- ❗ Missing: parseNumbers uses _.compact(...) and returns the parsed values

### TODO 8: Implement isValidOperation() using lodash in utils/parser.js — **10/10**

**Checklist**
- ✅ Exports isValidOperation(operation)
- ✅ Defines valid operations including add, subtract, multiply, divide
- ✅ Uses lodash _.includes(...) or equivalent membership check
- ✅ Returns the validation result

**Deductions / Notes**
- ✅ No deductions. Good job!

---

## How marks were deducted (rules)

- JS comments are ignored (so starter TODO comments do NOT count).
- Checks are intentionally lenient, but now include top-level implementation logic in addition to existence checks.
- Code can be in ANY order; repeated code is allowed.
- Common equivalents are accepted, and naming is flexible where possible.
- calculator.js is graded for implementation, but NOT for file creation.
- Folder/file creation grading only applies to utils/, parser.js, and operation.js / operations.js.
- lodash installation and manual testing commands are NOT graded.
- Either `utils/operation.js` or `utils/operations.js` is accepted.
- Missing required items reduce marks proportionally within that TODO.
