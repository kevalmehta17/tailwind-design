import arrowRight from "../../../../assets/icons/arrowRightBlack.svg";
import Button from "../../../../components/Button";

const OfferBanner = () => {
  return (
    <div
      className="
        flex flex-col items-center justify-center text-[var(--white)]
        py-[28px] px-[24.5px]
        sm:py-[40px] sm:px-[36px]
        md:py-[44px] md:px-[76px]
        lg:py-[50px] lg:px-[141px]
      "
      style={{ background: "var(--offerBanner-background)" }}
    >
      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-[7.5px] sm:gap-[9px] md:gap-[11px] lg:gap-[15px]">
        
        <h1
          className="
            font-bold leading-[100%] tracking-[-0.01em]
            text-[30px]
            sm:text-[40px]
            md:text-[50px]
            lg:text-[60px]
          "
        >
          Don't Miss Out: Limited-Time Offer!
        </h1>

        <h3
          className="
            font-normal leading-[120%] tracking-[-0.01em]
            text-[18.5px]
            sm:text-[24px]
            md:text-[30px]
            lg:text-[38px]
          "
        >
          Enjoy 20% off your first purchase with code{" "}
          <span className="font-bold">GLOW20</span>
        </h3>
      </div>

      {/* Timer */}
      <div
        className="
          flex items-center justify-center text-center
          py-[25px] px-[10px]
          sm:py-[30px]
          md:py-[36px] md:px-[12px]
          lg:py-[50px] lg:px-[15px]
        "
      >
        <span
          className="
            font-normal leading-[120%] tracking-[-0.01em]
            text-[26px]
            sm:text-[40px]
            md:text-[62px]
            lg:text-[86.67px]
          "
        >
          Hurry, Offer Ends In 12hrs 30mins 56Seconds
        </span>
      </div>

      {/* Button */}
      <div
        className="
          bg-white border border-[#cfcfcf]
          rounded-[40px]
          lg:rounded-[71.38px]
        "
      >
        <Button
          className="
            flex items-center justify-center
            gap-[5px] sm:gap-[6px] md:gap-[6px] lg:gap-[7px]
            text-black bg-transparent border-none
            font-light leading-[120%] tracking-[-0.01em]
            text-[20px]
            sm:text-[22px]
            md:text-[26px]
            lg:text-[32px]
            py-[11px] px-[13px]
            sm:py-[14px] sm:px-[18px]
            md:py-[15px] md:px-[18px]
            lg:py-[19.45px] lg:px-[21.45px]
          "
        >
          Shop the Sale
          <img
            src={arrowRight}
            alt="arrow right"
            className="
              w-[24px]
              md:w-[28px]
              lg:w-auto
            "
          />
        </Button>
      </div>
    </div>
  );
};

export default OfferBanner;