import Home from "./components/pages/Home";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Documents from "./components/pages/documents";
import Document from "./components/pages/document";
import Services from "./components/pages/services";
import NotFound from "./components/pages/404";

let routes = [
    {path : '/' , element : <Home/>},
    {path : '/contact' , element : <Contact/>},
    {path : '/about' , element : <About/>},
    {path : '/documents' , element : <Documents/>},
    {path : '/documents/:documentId' , element : <Document/>},
    {path : '/services' , element : <Services/>},
    {path : '/*' , element : <NotFound/>},
]

export default routes