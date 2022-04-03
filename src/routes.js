import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import HomePage from "./components/Homepage/Homepage";
import BookUpload from "./components/BookUpload/BookUpload";
import Children from "./components/children/Children";
import Fiction from "./components/Fiction/Fiction";
import NonFiction from "./components/NonFiction/NonFiction";
import ReviewPage from "./components/ReviewPage/review";

const routes = [
    {path: '/signup', component: SignUp},
    {path: '/signin', component: SignIn},
    {path: '/home', component: HomePage},
    {path: '/book_upload', component: BookUpload},
    {path: '/children', component: Children},
    {path: '/fiction', component: Fiction},
    {path: '/non_fiction', component: NonFiction},
    {path: '/review/:book_id', component: ReviewPage},
    {path: '/', component: HomePage},
];

export default routes;