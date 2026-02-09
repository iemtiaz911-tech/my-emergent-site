import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { AIUGCPage } from "./pages/AIUGCPage";
import { ContactPage } from "./pages/ContactPage";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ai-ugc" element={<AIUGCPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies" element={<Homepage />} />
        </Routes>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#11212D',
              color: '#CCD0CF',
              border: '1px solid #4A5C6A',
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
