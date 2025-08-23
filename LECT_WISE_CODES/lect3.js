var a = "sarvesh pandey";
{
  a = "this";
  console.log(a);
}
console.log(a);
// this
// this
// because var is globally scoped while let and const are block scoped
let b = "sarvesh";
{
  let b = "kittu";
  console.log(b); // first this prints
}
console.log(b);
// kittu
// sarvesh
// because bhai ye locally scoped hai b because its a let not var
// var u can redeclare but let u cannot redeclare
// for eg:
// let b = "pandey";
// SyntaxError: Identifier 'b' has already been declared
//     at wrapSafe (node:internal/modules/cjs/loader:1662:18)
//     at Module._compile (node:internal/modules/cjs/loader:1704:20)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.17.0
// PS C:\Users\sarve\OneDrive\Desktop\coding\JAVASCRIPT>
