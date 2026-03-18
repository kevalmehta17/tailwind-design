import Button from "../../components/Button";
import Input from "../../components/Input";

const Footer = () => {
  return (
    <div id="contact" className="w-full bg-black text-white">
      {/* Inner Container */}
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Subscription */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center text-center
            gap-[14px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px]
            py-[24px] sm:py-[32px] md:py-[42px] lg:py-[50px]
          "
        >
          <h4
            className="
              font-normal leading-[100%]
              text-[15px]
              sm:text-[18px]
              md:text-[18px]
              lg:text-[20px]
              max-w-[250px] md:max-w-[280px]
            "
          >
            Be the first to get notification about our upcoming event
          </h4>

          <div
            className="
              flex items-center
              bg-gray-light
              rounded-[5px]
              p-[1px]
              min-h-[38px] md:min-h-[44px]
               bg-white
            "
          >
            <Input
              type="email"
              placeholder="Email"
              className="
                flex-1 bg-transparent border-none outline-none
                text-[13px] md:text-base
                px-[12px] md:px-[24px]
                h-[38px] md:h-[44px]
               
              "
            />

            <Button
              className="
                bg-black text-white border-none m-0
                rounded-[5px]
                min-w-[72px] md:min-w-[88px]
                h-[38px] md:h-[44px]
                text-[13px] md:text-base
                font-medium
                md:px-[18px]
              "
            >
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className=" w-full border-solid border-gray-dark" />

      {/* Copyright */}
      <div
        className="
            text-center max-w-[1200px] mx-auto w-full
            text-[11px] sm:text-[13px] md:text-base lg:text-[17px]
            py-[18px] sm:py-[22px] md:py-[26px]
          "
      >
        © 2024, Xtragleam Skincare. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
