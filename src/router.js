import Index from './Pages/Index';
import AboutMe from './Pages/AboutMe';
import App from './App'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<App/>}>
        <Route path = '' element = {<Index/>}/>
        <Route path = '/AboutMe' element = {<AboutMe/>}/>
        <Route path = '/Skills' element = {<Skills/>}/>
        <Route path = '/Contact' element = {<Contact/>}/>
    </Route>
))

export default router
