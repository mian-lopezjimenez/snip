"use cache";

const Footer = async () => {
  return (
    <footer className="h-20 container mx-auto flex justify-center items-center px-6 xl:px-0 border-t-2">
      <p>&copy; {new Date().getFullYear()} Snip. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
