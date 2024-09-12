import logo from './logo.svg';
import './App.css';
import Dashboard from './Page/Dashboard';
import ProjectForm from './Page/ProjectForm';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/Layout';
import AddNewClient from './Page/AddNewClient';
import ProjectsPage from './Page/ProjectPage';
import NewSearch from './Page/NewSearch';
import SearchResults from './Page/SearchResult';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<Layout children={<Dashboard />}  />} />
          <Route path="/project-form" element={ <Layout children={<ProjectForm />} isName={true} name="New project details"  />} />
           <Route path="/new-client" element={ <Layout children={<AddNewClient />} isName={true} name="Add a new client"  />} />
           <Route path="/project-page" element={ <Layout children={<ProjectsPage />} isName={true} name="Projects"  />} />
           <Route path="/new-search" element={ <Layout children={<NewSearch />} isName={true} name="New Search"  />} />
           <Route path="/search-result" element={ <Layout children={<SearchResults />} isName={true} name="Search Results"  />} />
          {/* <Route path="/project-page" element={<ProjectsPage />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
