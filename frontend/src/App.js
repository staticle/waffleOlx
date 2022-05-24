import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/indexPage/IndexPage";
import CreateAd from "./pages/indexPage/create-ad/CreateAd";
import theme from "./theme";

import "./globalStyles.css";
import Signin from "./pages/indexPage/auth/signin/Signin";
import Signup from "./pages/indexPage/auth/signup/Signup";
import Profile from "./pages/indexPage/profile/Profile";
import YourAds from "./pages/indexPage/your-ads/YourAds";
import HomePage from "./pages/indexPage/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />}>
            <Route index element={<HomePage />}></Route>
            <Route path="create-ad" element={<CreateAd />}></Route>

            <Route path="auth">
              <Route path="signin" element={<Signin />}></Route>
              <Route path="signup" element={<Signup />}></Route>
            </Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="your-ads" element={<YourAds />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
