import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Home/Home'
import SkillsPage from './components/Skills/Skills'
import ContactPage from './components/Contact/Contact'
import CertificationsPage from './components/Certifications/certifications'

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <SkillsPage/>
      <ContactPage/>
      <CertificationsPage/>
    </div>
  );
}

export default App;
