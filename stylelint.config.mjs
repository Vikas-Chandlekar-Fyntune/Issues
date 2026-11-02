/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  rules: {
    "at-rule-no-deprecated": null,
    "lightness-notation": null,
    "hue-degree-notation": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "variants",
          "responsive",
          "screen",
          "custom-variant",
          "theme",
        ],
      },
    ],
    // Tailwind @apply contains utility classes, not standard CSS preludes.
    "at-rule-prelude-no-invalid": [
      true,
      {
        ignoreAtRules: ["apply"],
      },
    ],
  },
};
