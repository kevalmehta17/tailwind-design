
import ShampooBottle from "../../../../assets/image/threeBottleImage.png";
import send from "../../../../assets/icons/send.svg";
import arrowRight from "../../../../assets/icons/arrowRightWhite.svg";
import AcneIssue from "../../../../assets/image/acneIssue.png";
import arrowRightBlack from "../../../../assets/icons/arrowRightBlack.svg";
import mainBackground from "../../../../assets/icons/mainBackground.svg";
import Button from "../../../../components/Button";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full flex flex-col gap-[100px] max-[1025px]:gap-[72px] max-[322px]:gap-12"
    >
      {/* TOP HERO */}
      <div
        className="flex justify-between rounded-[20px] bg-[var(--hero-background)] bg-no-repeat bg-left-bottom max-[1025px]:pr-6 max-[769px]:flex-col"
        style={{ backgroundImage: `url(${mainBackground})` }}
      >
        {/* LEFT */}
        <div className="flex flex-1 flex-col justify-center py-[106.5px] pl-[60px] gap-10 max-w-[570px] max-[1025px]:max-w-[520px] max-[1025px]:pl-10 max-[1025px]:py-[72px] max-[1025px]:gap-7 max-[769px]:items-center max-[769px]:justify-center max-[769px]:w-full max-[769px]:max-w-full max-[769px]:py-20 max-[769px]:px-10 max-[769px]:gap-10 max-[426px]:py-[62px] max-[426px]:px-1 max-[322px]:py-10 max-[322px]:px-0 max-[322px]:gap-6">
          <div className="flex flex-col gap-[22px] max-[322px]:gap-[14px]">
            <div className="max-[426px]:flex max-[426px]:flex-col">
              <span className="inline-flex items-center font-normal text-[60px] leading-none tracking-[-0.01em] max-[1025px]:text-[52px] max-[426px]:text-[45px] max-[322px]:text-[34px] max-[322px]:leading-[105%]">
                Glow Beyond
                <img
                  src={send}
                  alt="sendLogo"
                  className="ml-[10px] w-[45px] h-[45px] pt-[7px] max-[1025px]:w-[38px] max-[1025px]:h-[38px] max-[769px]:hidden"
                />
              </span>
              <h1 className="text-[60px] font-normal leading-none tracking-[-0.01em] m-0 pl-[236px] text-black max-[1025px]:text-[52px] max-[1025px]:pl-[160px] max-[769px]:text-center max-[769px]:pt-[11px] max-[769px]:pl-0 max-[426px]:text-[45px] max-[322px]:text-[34px] max-[322px]:leading-[105%]">
                Expectations
              </h1>
            </div>
            <p className="m-0 font-light text-[30px] leading-[120%] tracking-[-0.01em] text-black max-[1025px]:text-[24px] max-[1025px]:leading-[125%] max-[1025px]:max-w-[24ch] max-[769px]:text-center max-[769px]:pt-4 max-[426px]:text-[18px] max-[322px]:text-[15px] max-[322px]:leading-[140%]">
              Clean, effective, and cruelty-free skincare made to deliver visible
              results.
            </p>
          </div>

          {/* Shop button */}
          <div className="flex items-center max-w-[230px] border border-black rounded-[70px] bg-black text-white py-[10px] px-5 gap-0.5 max-[1025px]:py-[9px] max-[1025px]:px-[14px] max-[1025px]:justify-around max-[322px]:py-1.5 max-[322px]:px-3 max-[322px]:rounded-[50px]">
            <Button className="bg-transparent text-white border-none text-[32px] font-light leading-[120%] tracking-[-0.01em] max-[1025px]:text-[30px] max-[322px]:text-[18px]">
              Shop Now
            </Button>
            <img
              src={arrowRight}
              alt="arrowRight"
              className="max-[322px]:w-5 max-[322px]:h-5"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="mt-auto max-[1025px]:max-w-[360px] max-[1025px]:pt-10 max-[1025px]:self-start max-[769px]:hidden">
          <img
            src={ShampooBottle}
            alt="product"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-[#f0f0f0] flex flex-col py-[50px] px-10 max-[1025px]:py-10 max-[1025px]:px-[30px] max-[426px]:py-[30px] max-[426px]:px-4 max-[322px]:py-[22px] max-[322px]:px-3">
        <h2 className="font-normal text-[50px] leading-none tracking-[-0.01em] text-black max-[1025px]:text-[40px] max-[769px]:text-[40px] max-[426px]:text-[24px] max-[322px]:text-[20px] max-[322px]:leading-[115%]">
          Why Choose Xtragleam?
        </h2>
        <div className="pt-[50px] flex flex-row gap-6 max-[1025px]:pt-8 max-[1025px]:gap-[18px] max-[769px]:flex-col max-[769px]:items-start max-[769px]:pt-[26px] max-[426px]:gap-6 max-[426px]:pt-4 max-[322px]:pt-3 max-[322px]:gap-4">
          <div className="w-1/2 max-[769px]:w-full">
            <img
              src={AcneIssue}
              alt="acne issue image"
              className="max-w-[560px] h-[426px] max-[1025px]:w-full max-[1025px]:max-w-full max-[1025px]:h-auto max-[769px]:w-full max-[769px]:max-w-full max-[769px]:h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-[30px] max-[1025px]:gap-[18px] max-[769px]:w-full max-[769px]:gap-4 max-[426px]:px-[5px] max-[426px]:gap-[11px] max-[322px]:px-0 max-[322px]:gap-[10px]">
            <h3 className="font-normal text-[28px] leading-[120%] tracking-[-0.01em] text-black max-[1025px]:text-[24px] max-[769px]:text-[26px] max-[426px]:text-[20px] max-[322px]:text-[16px]">
              Struggling with acne issues?
            </h3>
            <p className="text-[27px] leading-[150%] tracking-[-0.01em] text-black max-[1025px]:text-[20px] max-[769px]:text-[20px] max-[426px]:text-[14px] max-[322px]:text-[13px] max-[322px]:leading-[145%]">
              At Xtragleam Skincare, we understand how frustrating acne can be,
              and we're here to help you regain confidence in your skin. Our
              carefully designed recovery process targets acne at its root while
              soothing and nourishing your skin for long-term health.
            </p>
            <div className="flex flex-row items-center gap-[7px] w-fit border border-[#cfcfcf] rounded-[71px] bg-white py-[10px] px-[21px] max-[1025px]:py-2 max-[1025px]:px-4 max-[426px]:py-[7.5px] max-[426px]:px-[15.5px] max-[426px]:mt-[18px] max-[322px]:py-1.5 max-[322px]:px-3 max-[322px]:gap-1.5 max-[322px]:mt-[10px]">
              <Button className="border-transparent bg-transparent font-light text-[32px] leading-[120%] tracking-[-0.01em] text-black max-[1025px]:text-[26px] max-[769px]:text-[29px] max-[426px]:text-[22px] max-[322px]:text-[17px]">
                Explore Our Range
              </Button>
              <img
                src={arrowRightBlack}
                alt="right arrow"
                className="w-[39px] h-[39px] max-[1025px]:w-[30px] max-[1025px]:h-[30px] max-[769px]:w-[34px] max-[769px]:h-[34px] max-[322px]:w-[18px] max-[322px]:h-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
