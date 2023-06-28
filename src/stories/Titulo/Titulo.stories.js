import Titulo from "./Titulo";

export default {
  component: Titulo,
  argTypes: {
    nivel: {
      // select, radio, inline-radio
      control: "inline-radio",
    },
  },
};

export const Header1 = {
  args: {
    texto: "Header 1",
    nivel: 1,
    backgroundColor: "yellow",
    textColor: "black",
  },
};
export const Header3 = {
  args: {
    texto: "Header 3",
    nivel: 3,
    backgroundColor: "blue",
    textColor: "white",
  },
};
export const Header6 = {
  args: {
    texto: "Header 6",
    nivel: 6,
    backgroundColor: "red",
    textColor: "white",
  },
};