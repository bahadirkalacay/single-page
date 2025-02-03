import Blog from "./components/blog/Blog";
import Comments from "./components/comments/Comments";
import Footer from "./components/footer/Footer";
import HeaderSticky from "./components/header-sticky/HeaderSticky";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <HeaderSticky />
      <Navbar />
      <HomePage />
      <Blog />
      <Comments />
      <Footer />
    </>
  );
};

export default App;
