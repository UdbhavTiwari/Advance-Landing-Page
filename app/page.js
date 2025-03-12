
import ApplyForInternship from "@/components/ApplyBtn";
import Highlights from "@/components/Content/Highlights";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import Qualifications from "@/components/Qualifications";



export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl  mx-auto pt-20 px-6">
    <Header/>
    </div>
      <Highlights/>
      <Qualifications/>
      <ApplyForInternship/>
      <Footer/>
    </>
  );
}
