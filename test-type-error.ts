import * as ought from "./index";

export = {
  typeMismatch() {
    ought.equal(42, "42");
  },

  unimplementedInterface() {
    ought.config({});
  }
};
