const ANIMATION_MAP = {
  FromRight: "forward",
  ToLeft: "back",
  FromBottom: "bottom",
  FakeIn: "fake-in",
};
const main_config = {
  "/": {
    PUSH: ANIMATION_MAP["FromRight"],
    POP: ANIMATION_MAP["ToLeft"],
  },
  "/checkout": {
    PUSH: ANIMATION_MAP["FromRight"],
    POP: ANIMATION_MAP["ToLeft"],
  },
  "/thanks": {
    REPLACE: ANIMATION_MAP["FromBottom"],
  },
};
const loading_config = {
  "/error": {
    REPLACE: ANIMATION_MAP["FakeIn"],
  },
  "/loading": {
    REPLACE: ANIMATION_MAP["FakeIn"],
  },
  "/": {
    REPLACE: ANIMATION_MAP["FakeIn"],
  },
};
export { main_config, loading_config };
