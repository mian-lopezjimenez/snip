import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto flex gap-2 justify-end px-2 md:px-0 py-2 mb-8 border-b-2">
      <Button variant="outline">Log in</Button>
      <ThemeToggle />
    </header>
  );
};

export default Header;
