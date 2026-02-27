import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';
import { Founder } from './pages/founder';
import { HowItWorks } from './pages/how-it-works';
import { FAQPage } from './pages/faq-page';
import { BlogList } from './pages/blog-list';
import { BlogPost } from './pages/blog-post';
import { BlogAdmin } from './pages/admin/blog-admin';
import { BlogEditor } from './pages/admin/blog-editor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin/blog" element={<BlogAdmin />} />
        <Route path="/admin/blog/:id" element={<BlogEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
