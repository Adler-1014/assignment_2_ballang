import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage"; // Corrected typo "SighnInPage" to "SignInPage"
import MyPage from "./pages/MyPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { AuthProvider } from "./contexts/auth.context";

function App() {
  // Correctly return the Routes wrapped in a fragment if needed
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailPage />}
            />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
