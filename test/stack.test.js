class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      throw new Error("Empty stack");
    } else {
      delete this.items[this.top];
      this.top -= 1;
    }
  }
}

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  test("can push to the top", () => {
    stack.push("a");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("a");
  });

  test("can pop off", () => {
    stack.push("a");
    stack.pop();
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
});
