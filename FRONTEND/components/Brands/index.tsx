import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            
            <div
              className="wow fadeInUp bg-blue-950 dark:bg-gray-dark flex overflow-hidden rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s"
            >
              
              <div className="flex w-max animate-scroll">
                {brandsData.concat(brandsData).map((brand, index) => (
                  <SingleBrand key={index} brand={brand} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Brands;
const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex-shrink-0 mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 w-[160px] h-[100px] flex items-center justify-center rounded-md">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="flex items-center justify-center w-full h-full"
      >
        <Image
          src={image}
          alt={name}
          width={100}
          height={80}
          style={{ objectFit: "contain" }}
        />
      </a>
    </div>
  );
};
