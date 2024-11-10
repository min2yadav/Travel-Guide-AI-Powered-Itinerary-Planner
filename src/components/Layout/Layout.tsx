import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

const Layout = ({children}) => {

  return (
    <div className={"flex flex-col bg-white text-black min-h-screen"}>
      <Header/>
      <main className={"grow"}>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
