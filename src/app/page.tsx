import BreadCrumbs from "@/components/BreadCrumbs";
import NavBar from "@/components/Navbar";
import Product from "@/components/Product";

export default function Home() {
  return (
    <main>
      <NavBar />
      <BreadCrumbs />
      <Product />
    </main>
  );
}
