import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
 
const routes = [
    
    {path: '/signup', component: SignUp},
    {path: '/signin', component: SignIn},
    
    {path: '/', component: SignIn},
];

export default routes;