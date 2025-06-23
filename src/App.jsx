import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/commonLayouts/CommonLayout";
import PublicProfile from "./pages/publicProfile";
import NewsFeed from "./pages/NewsFeed";
import NewsFeed2 from "./pages/NewsFeed2";
import Friends from "./pages/Friends";
import About from "./pages/About";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<PublicProfile />} />
          <Route path="/news-feed" element={<NewsFeed />} />
          <Route path="/news-feed2" element={<NewsFeed2 />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
