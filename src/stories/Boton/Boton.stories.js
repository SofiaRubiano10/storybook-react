import Boton from "./Boton";
export default { component: Boton };

//Storys
export const Primary = {
  args: {
    label: "Primary",
    primary: true,
  },
};
export const Secondary = {
  args: {
    label: "Secondary",
    primary: false,
  },
};
