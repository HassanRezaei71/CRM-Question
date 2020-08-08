    import StartPage from "../Views/StartPage/StartPage";
import Question from "../Views/Question/Question";
import EndPage from "../Views/EndPage/EndPage";

const routes = [
  {
    exact: true,
    path: "/",
    component: StartPage,
  },
  {
    path: "/question/:id",
    component: Question,
  },
  {
    path: "/end",
    component: EndPage,
  },
];

export default routes;