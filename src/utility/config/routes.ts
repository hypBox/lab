import { Pages } from "../../types"
import PageNotFound from "../../pages/PageNotFound"
import MyLab from "../../pages/MyLab"
import Bootcamp from "../../pages/Bootcamp"
import Signin from "../../pages/auth/Signin"

const pages: Pages = {
  ROOT: {
    title: "Lab",
    path: "/",
    exact: true,
    component: MyLab,
  },
  SIGNIN: {
    title: "Signin",
    path: "/signin",
    component: Signin,
  },
  MY_LAB: {
    title: "My Lab",
    path: "/mylab",
    component: MyLab,
  },
  BOOTCAMP: {
    title: "Bootcamp",
    path: "/bootcamp",
    component: Bootcamp,
  },
  PAGE_NOT_FOUND: {
    title: "OPSS!!!",
    component: PageNotFound,
  },
}

export default pages
