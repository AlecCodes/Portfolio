import Index from './Pages/Index';
import AboutMe from './Pages/AboutMe';
import App from './App'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<App/>}>
        <Route path = '' element = {<Index/>}/>
        <Route path = '/AboutMe' element = {<AboutMe/>}/>
    </Route>
))

export default router
