import SearchBar from "./SearchBar";
import Button from "./Button";

export default function Navigation() {
  return (
    <nav className="flex px-4 py-3 justify-between bg-stone-50 dark:bg-stone-800">
        <div className="">LOGO</div>
        <div className="lg:w-1/2">
        <SearchBar/>
        </div>
        <div className="">
            <Button>Giriş Yap</Button>
            <Button> Sepetim </Button>
        </div>
    </nav>
  );
}
