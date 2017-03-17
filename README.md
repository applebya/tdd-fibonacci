## TDD Fibonacci Sequence

`npm install; npm test`


This was a skills test I went though for a developer interview, and my tests didn't pass the expected timeframe. Like any good developer, I took the problem home and to understand it some more, and do better in the future.

[Here's an article on Fibonacci in JS](https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e) that helped me understand the problem a bit better, and goes further into recursive performance with memoization.

I'd be interested to see how others have approached this problem, or maybe build on the tests/perf. Feel free to make a PR :)


The test (paraphrased):

- **1.** Write a stack (+ test)

- **2** Write a function that returns a fibonacci sequence _using a **loop** method_ out of a specified quantity (+ test)

- **3** Write a function that returns a fibonacci sequence _using a **recursive** method_ out of a specified quantity (+ test)