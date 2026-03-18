import Button from "../../../../components/Button";
import Link from "../../../../components/Link";
import ALL_PRODUCTS from "../../../../constants/ALL_PRODUCTS";
import HeartIcon from "../../../../assets/icons/heart.svg";
import BagIcon from "../../../../assets/icons/bag3.svg";

const imageClassMap: Record<string, string> = {
  xsBoxImage:
    "block self-center object-contain w-[210px] h-[180px] max-sm:w-[160px] max-sm:h-[135px] max-[322px]:w-[130px] max-[322px]:h-[110px]",
  refinedImage:
    "block self-center object-contain w-[138px] h-[230px] max-sm:w-[104px] max-sm:h-[174px] max-[322px]:w-[85px] max-[322px]:h-[140px]",
  topImage:
    "block self-center object-contain w-[118px] h-[214px] max-sm:w-[90px] max-sm:h-[163px] max-[322px]:w-[75px] max-[322px]:h-[132px]",
};

const BestSeller = () => {
  return (
    <section
      id="shop"
      className="flex flex-col gap-[50px] max-[1024px]:gap-10 max-[769px]:gap-8 max-sm:gap-4 max-[322px]:gap-3"
    >
      <div className="flex items-end justify-between gap-0 max-[769px]:gap-3 max-sm:gap-1.5">
        <h2 className="m-0 text-[50px] font-normal leading-none tracking-[-0.01em] text-black max-[1024px]:text-[44px] max-[769px]:text-[38px] max-[769px]:leading-[1.05] max-sm:text-[22px] max-sm:leading-[1.1] max-[322px]:text-[18px]">
          Discover Our Best-Sellers
        </h2>
        <Link
          path="#"
          className="text-[30px] font-light leading-none tracking-[-0.01em] text-black underline max-[1024px]:text-[24px] max-[769px]:text-[22px] max-[769px]:leading-[1.1] max-sm:text-base max-sm:leading-[1.1] max-[322px]:text-[13px]"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-[17px] max-[1200px]:grid-cols-2 max-[769px]:grid-cols-1">
        {ALL_PRODUCTS.map((product) => (
          <article
            key={product.id}
            className="flex h-full flex-col rounded-[10px] border border-[var(--border-bestSeller-primary)] bg-gray-200"
          >
            {/* Main Product Card */}
            <div className="flex min-h-[286px] flex-1 flex-col justify-between px-5 py-[35px] max-[769px]:min-h-[248px] max-[769px]:px-4 max-[769px]:py-[26px] max-sm:min-h-[210px] max-sm:px-3 max-sm:py-[18px] max-[322px]:min-h-[180px] max-[322px]:px-[10px] max-[322px]:py-[14px]">
              {/* Card Top */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-1.5 text-[20px] font-normal leading-[98%] tracking-[-0.01em] text-black max-[769px]:text-[18px] max-[769px]:leading-[95%] max-sm:text-[15px] max-sm:leading-[100%] max-[322px]:text-[13px]">
                    {product.badge}
                  </p>
                  <span className="text-[20px] font-light leading-[98%] tracking-[-0.01em] text-amber-400 max-[769px]:text-[18px] max-[769px]:leading-[95%] max-sm:text-[15px] max-sm:leading-[100%] max-[322px]:text-[13px]">
                    ★★★★★
                  </span>
                </div>

                <Button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[25px] border border-gray-500 bg-white max-sm:h-8 max-sm:w-8 max-[322px]:h-7 max-[322px]:w-7"
                  aria-label={`Add ${product.name} to favorites`}
                >
                  <img
                    src={HeartIcon}
                    alt="favorite"
                    className="h-[22px] w-[22px] max-sm:h-[18px] max-sm:w-[18px] max-[322px]:h-[15px] max-[322px]:w-[15px]"
                  />
                </Button>
              </div>

              {/* Card Image */}
              <div className="my-auto flex max-w-full justify-center">
                <img
                  className={imageClassMap[product.imageClassName]}
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-auto flex items-end justify-between gap-4 border border-[var(--border-bestSeller-secondary)] bg-white px-5 py-8 max-[769px]:flex-col max-[769px]:items-start max-[769px]:gap-3 max-[769px]:px-4 max-[769px]:py-6 max-sm:gap-2 max-sm:px-3 max-sm:py-4 max-[322px]:gap-1.5 max-[322px]:px-[10px] max-[322px]:py-3">
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <h3 className="m-0 text-base font-light leading-[120%] tracking-[-0.01em] text-black max-[769px]:text-[15px] max-[769px]:leading-[115%] max-sm:text-sm max-[322px]:text-[12px]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 max-sm:gap-1.5">
                  <span className="text-base font-normal leading-[98%] tracking-[-0.01em] text-[var(--text-bestSeller-primary)] line-through max-[769px]:text-[15px] max-[769px]:leading-[95%] max-sm:text-sm max-sm:leading-[100%] max-[322px]:text-[12px]">
                    {product.oldPrice}
                  </span>
                  <span className="text-base font-normal leading-[98%] tracking-[-0.01em] text-black max-[769px]:text-[15px] max-[769px]:leading-[95%] max-sm:text-sm max-sm:leading-[100%] max-[322px]:text-[12px]">
                    {product.price}
                  </span>
                </div>
              </div>

              <Button className="inline-flex min-h-10 items-center justify-center gap-[10px] rounded-[40px] border-none bg-gray-900 px-[10px] py-[5px] text-sm font-normal whitespace-nowrap text-white max-[769px]:min-h-9 max-[769px]:gap-2 max-[769px]:text-[13px] max-sm:min-h-8 max-sm:gap-1.5 max-sm:px-2 max-sm:py-1 max-sm:text-[12px] max-[322px]:min-h-7 max-[322px]:gap-1 max-[322px]:px-[7px] max-[322px]:py-[3px] max-[322px]:text-[11px]">
                <span>Add to Cart</span>
                <img
                  src={BagIcon}
                  alt="cart"
                  className="h-[25px] w-[25px] max-[769px]:h-[22px] max-[769px]:w-[22px] max-sm:h-[18px] max-sm:w-[18px] max-[322px]:h-[15px] max-[322px]:w-[15px]"
                />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
