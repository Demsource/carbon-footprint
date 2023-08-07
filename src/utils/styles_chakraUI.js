export const scrollBarStyles = {
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb ": {
    backgroundColor: "brand.500",
    borderRadius: "25px",
    border: "3px solid transparent",
    borderColor: "#B2D8D8",
  },
};

export const disableSelectionStyles = {
  WebkitUserSelect: "none" /* Safari */,
  msUserSelect: "none" /* IE 10 and IE 11 */,
  userSelect: "none" /* Standard syntax */,
};
