import { CHANGE_CURRENT_PAGE } from "src/actions/nav";

const initialState = {
  allPages: [
    {
      name: "Accueil",
      href: "/",
    },
    {
      name: "Films",
      href: "/films",
    },
    {
      name: "À propos",
      href: "/a-propos",
    },
  ],
  currentPage: {
    name: "Accueil",
    href: "/",
  },
};

const nav = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
};

export default nav;
