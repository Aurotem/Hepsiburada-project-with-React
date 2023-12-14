import SearchBar from "./SearchBar";
import Button from "../Button";

export default function Navigation() {
  return (
    <nav className="flex px-4 py-3 justify-between bg-stone-50 dark:bg-stone-800 sticky top-0 z-10">
      <div className="text-white text-3xl">LOGO</div>
      <div className="lg:w-1/3">
        <SearchBar />
      </div>
      <div className="">
        <Button>Giriş Yap</Button>
        <Button> Sepetim </Button>
      </div>
    </nav>
  );
}
