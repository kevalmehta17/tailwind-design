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
      className="flex w-full flex-col gap-12 md:gap-[72px] xl:gap-[100px]"
    >
      {/* TOP HERO */}
      <div
        className="flex flex-col justify-between rounded-[20px] bg-[var(--hero-background)] bg-left-bottom bg-no-repeat md:flex-row md:pr-6 xl:pr-0"
        style={{ backgroundImage: `url(${mainBackground})` }}
      >
        {/* LEFT */}
        <div className="flex w-full flex-col items-center justify-center gap-10 px-1 py-[62px] sm:px-10 sm:py-20 md:w-auto md:flex-1 md:max-w-[520px] md:items-start md:px-10 md:py-[72px] md:gap-7 xl:max-w-[570px] xl:gap-10 xl:py-[106.5px] xl:pl-[60px] xl:pr-0">
          <div className="flex flex-col gap-[22px]">
            <h1 className="flex flex-col text-[45px] text-[var(--heading-primary)] md:text-[52px] xl:text-[60px]">
              <span className="inline-flex items-center justify-center leading-none tracking-[-0.01em] md:justify-start">
                Glow Beyond
                <img
                  src={send}
                  alt="sendLogo"
                  className="hidden md:block md:h-[38px] md:w-[38px] md:pt-1 xl:h-[45px] xl:w-[45px] xl:pt-[7px]"
                />
              </span>
              <span className="pt-[11px] text-center md:pl-[160px] md:text-left xl:pl-[236px]">
                Expectations
              </span>
            </h1>
            <p className="max-w-[24ch] pt-4 text-center text-[18px] leading-[125%] text-[var(--text-primary)] md:text-left md:text-[24px] xl:text-[30px] xl:leading-[120%] xl:tracking-[-0.01em]">
              Clean, effective, and cruelty-free skincare made to deliver
              visible results.
            </p>
          </div>
          <div className="flex items-center rounded-[70px] border border-[var(--border-primary)] bg-[var(--button-primary)] px-4 py-2 md:justify-around lg:max-w-[230px] lg:gap-0.5 lg:px-5 lg:py-2.5">
            <Button className="border-none bg-transparent text-[var(--button-text)] text-[24px] font-normal leading-[120%] tracking-[-0.01em] md:text-[30px] xl:text-[32px]">
              Shop Now
            </Button>
            <img src={arrowRight} alt="Arrow Right" className="h-6 w-6 xl:h-auto xl:w-auto" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="mt-auto hidden md:block md:max-w-[360px] md:pt-10 xl:max-w-none xl:pt-0">
          <img src={ShampooBottle} alt="Shampoo Bottle" className="h-auto w-full object-contain" />
        </div>
      </div>
      {/* BOTTOM HERO */}
      <div></div>
    </div>
  );
};

export default Hero;
