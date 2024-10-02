import { configJs } from "../plugin";

export const javascript = [
  { ...configJs.configs.recommended, name: 'idea2app/javascript/recommended' },
  {
    name: "idea2app/javascript",
    "rules": {
      "array-callback-return": ["error", { allowImplicit: true, checkForEach: true }],
      "no-constant-binary-expression": ["error"],
      "no-constructor-return": ["error"],
      "no-duplicate-imports": ["error"],
      "no-self-compare": ["error"],
      "no-unmodified-loop-condition": ["error"],
      "class-methods-use-this": ["warn", { enforceForClassFields: true }],
      "curly": ["error", "multi-or-nest"],
      "default-param-last": ["error"],
    }
  }
]