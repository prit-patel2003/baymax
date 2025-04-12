'use client'

import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-[1000]">
        <Navbar />
      </div>
      
      {/* Main content should expand */}
      
        {children}


      {/* Footer sticks to the bottom */}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
