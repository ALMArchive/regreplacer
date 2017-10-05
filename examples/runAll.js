const files = [
   "intro-example.js",
   "ex01-construction.js",
   "ex02-match.js",
   "ex03-hasMatches.js",
   "ex04-getMatches.js",
   "ex05-getCaptures.js",
   "ex06-getIndices.js",
   "ex07-replace.js",
   "main-example.js"
]

for(const x of files) {
   require(`./${x}`);
}