/* eslint-disable local-rules/no-flowbite */
"use strict";

module.exports = {
  "no-flowbite": {
    meta: {
      type: "problem",
      docs: {
        description: 'disallow usage of the word "Flowbite"',
        category: "Possible Errors",
        recommended: true,
      },
      schema: [], // no options
    },
    create(context) {
      return {
        Literal(node) {
          const value = node.value;
          const isFlowbite = /flowbite/i.test(value);

          if (isFlowbite) {
            context.report({
              node,
              message: 'The word "Flowbite" is not allowed in this repository.',
            });
          }
        },
      };
    },
    // create: function (context) {
    //   return {
    //     Identifier(node) {
    //       if (node.name.includes("Flowbite")) {
    //         context.report({
    //           node,
    //           message: 'Usage of "Flowbite" is not allowed.',
    //         });
    //       }
    //     },
    //     Literal(node) {
    //       if (
    //         typeof node.value === "string" &&
    //         node.value.includes("Flowbite")
    //       ) {
    //         context.report({
    //           node,
    //           message: 'Usage of "Flowbite" is not allowed.',
    //         });
    //       }
    //     },
    //   };
    // },
  },
};
