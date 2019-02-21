import * as ought from "./index";

export = {
  fail() {
    ought.equal(7, 11);
  },

  pass() {
    ought.equal(42, 42);
    ought.config({ color: false });
  }
};
