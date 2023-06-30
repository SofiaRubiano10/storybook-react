/** @type { import('@storybook/react').Preview } */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Atoms", "Molecules", "Examples"],
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
