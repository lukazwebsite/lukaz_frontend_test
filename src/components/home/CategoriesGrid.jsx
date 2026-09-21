
import { getFeaturedCategories } from '@/utils/actions';
import { getImageUrl } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';



const CategoriesGrid = async () => {


  // Categories flagged as Featured in admin (Category > Featured).
  const shopbyCategories = await getFeaturedCategories();


  // console.log("shopbyCategories",shopbyCategories)

  // const handleFilter = (cat) => {

  //   // dispatchFilterProduct({ type: "SET_CATEGORIES", payload: cat });
  // }


  return (
    <section className="py-16 bg-linear-to-r from-[#8ae5bf] via-[#68bf9b] to-[#70bf9c]">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white space-grotesk">Shop by Category</h2>
        <p className="text-white mt-1 text-sm md:text-base space-grotesk">Find your perfect pair by category</p>
      </div>

      <div className="mx-auto max-w-[1640px] px-3 sm:px-4 md:px-16 grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
        {shopbyCategories?.map((category, idx) => {

          const url = `/shop/${category?.slug}`

          return (


            <div
              key={idx}
              className="bg-white group h-75 md:h-75 lg:h-82.5 xl:h-85 rounded-md bg-cover bg-center relative overflow-hidden cursor-pointer">
              <Link

                href={url}
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${getImageUrl("category", category?.thumbnail)})` }}
              ></Link>
              {/* dark overlay */}
              <Link

                href={url}
                className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent">

              </Link>

              <Link

                href={url}
                className="absolute text-center bottom-7 left-4 right-4 text-[#3A9E75] text-xl font-bold space-grotesk">
                {category?.name?.toUpperCase()}
              </Link>
            </div>

          )
        })}
      </div>
    </section>
  );
};

export default CategoriesGrid;
