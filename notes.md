Middleware (route handlers are mw)

- built-in
- third party
- custom

Install morgan `yarn add morgan`.

m1
m2
m3
m4

rh
rh

what is code used for? a communication medium.

- context (comments explain your decisions)
  - why not using async/await
- clarity
- minimize cognitive load
  - do one thing
  - shorter functions
  - reducing complexity
  - code that is not clever
- no surprises === reveal intent

  - well named artifacts

  const x = 2.99
  const taxPercent = 2.99

pure function

- does not cause any side effects
- same arguments > same output
- does not rely on outer scope for state

```js
const e = 5;
const total = 0;

function addFive(number) {
  total = number + e; // impure
}

function addFive(number) {
  return number + 5;
}
```

function vs procedure

- functions return a value (make them pure)
- procedures do not return a value (will change state, hence not pure)

structure an application

- by type (reducers, actions, containers, components)
- by feature
- hybrid
  - type then feature
  - feature then type << preferred for me >>

components

- users
  - UserList
  - UserCard
