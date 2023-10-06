import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import CreateBlog from './create';
import BlogslistView from './Bloglist';
import ShowBlogs from './showblogs';
import EditBlogs from './Edit';
import Signin from './Signup';

function App() {
 return(
   <>
  <BrowserRouter>
  <Header/>
   <Routes>
     <Route exact path='/' Component={Home}/>
     <Route exact path='/create' Component={CreateBlog}/>
     <Route exact path='/bloglist' Component={BlogslistView}/>
     <Route path='/signin' Component={Signin} />
    
     <Route path='/about' Component={About} />
     <Route path='/showblogs/:id' Component={ShowBlogs}/>
     <Route path='/showblogs/editblog/:id' Component={EditBlogs}/>


   </Routes>
  </BrowserRouter>
     {/* <h1>create blog</h1><br /> */}
{/* <CreateBlog/> */}
{/* <br /><hr /><h1> bloglist here</h1><br /> */}
{/* <BlogslistView/> */}
</>
 )
}

export default App;
