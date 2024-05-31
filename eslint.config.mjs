import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
	{ ignores: [".next/", ".yarn/"] },
	...fixupConfigRules(compat.extends("plugin:@next/next/core-web-vitals")),
];
