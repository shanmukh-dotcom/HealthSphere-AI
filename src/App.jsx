import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Insights from './pages/Insights';
import Hospitals from './pages/Hospitals';
import Insurance from './pages/Insurance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reports" element={<Reports />} />
          <Route path="chat" element={<Chat />} />
          <Route path="insights" element={<Insights />} />
          <Route path="profile" element={<Profile />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
