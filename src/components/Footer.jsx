import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center text-black p-4 bg-zinc-50 shadow-xl">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
