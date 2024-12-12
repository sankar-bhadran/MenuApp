import Layout from "@/components/layout/layout";
import Herosection from "@/components/hero/Herosection";
import SectionOne from "@/components/Section/SectionOne";
import Listingpage from "@/components/listing/Listingpage";
import SectionTwo from "@/components/lastsection/SectionTwo";
export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen">
        <Herosection />
        <SectionOne />
        {/* <Listingpage /> */}
        <SectionTwo />
      </main>
    </Layout>
  );
}
