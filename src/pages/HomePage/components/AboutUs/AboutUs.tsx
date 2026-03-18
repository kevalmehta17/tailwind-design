import Houses from "../../../../assets/image/house.png";
import HallImage from "../../../../assets/image/hallImage.png";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex w-full flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-[48px] md:pr-0 lg:gap-[80px] sm:gap-[40px] sm:pr-6"
    >
      {/* LEFT SIDE */}
      <div className="flex min-h-full flex-col gap-[12px] pl-[5px] sm:gap-[18px] md:gap-[24px]">
        <span className="max-h-[52px] max-w-fit rounded-[4px] border border-black bg-gray-50 px-[12px] py-[6px] text-[12px] font-semibold leading-[18px] text-black sm:px-[20px] sm:py-[10px] sm:text-base lg:px-[24px] lg:py-[12px] lg:text-[18px] lg:leading-[28px]">
          ABOUT US
        </span>

        <h2 className="max-w-fit text-[24px] font-semibold leading-[32px] tracking-normal text-black sm:text-[32px] md:text-[38px] md:leading-[48px] lg:text-[48px] lg:leading-[58px]">
          How much is your property worth now?
        </h2>

        <p className="max-w-fit text-sm font-normal leading-[22px] tracking-normal text-[var(--text-aboutUs-primary)] lg:text-base lg:leading-[24px]">
          We have built our reputation as true local area experts. We have
          gained more knowledge about buyer interests, our neighborhood and the
          market than any other brand because we live locally and work for local
          people.
        </p>

        {/* Stats */}
        <div className="mt-auto grid grid-cols-2 gap-[24px]">
          <div className="min-h-[142px] w-full rounded-[4px] bg-gray-100 p-[16px]">
            <h3 className="h-[28px] w-[70px] text-[24px] font-semibold text-gray-700">
              178K+
            </h3>
            <p className="pt-[4px] text-base font-normal leading-[24px] tracking-normal text-gray-700">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in
              libero.
            </p>
          </div>

          <div className="min-h-[142px] w-full rounded-[4px] bg-gray-100  p-[16px]">
            <h3 className="h-[28px] w-[70px] text-[24px] font-semibold text-gray-700">
              362
            </h3>
            <p className="pt-[4px] text-base font-normal leading-[24px] tracking-normal text-gray-700">
              Lorem ipsum dolor amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="flex min-h-[145px] w-full items-center bg-gray-100">
          <div className="flex-1">
            <h3 className="w-full pl-[24px] pt-[16px] text-[24px] font-semibold leading-[28px] tracking-normal text-gray-700">
              Title
            </h3>
            <p className="pl-[24px] text-base font-normal leading-[24px] tracking-normal text-gray-700">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in
              libero.
            </p>
          </div>

          <div className="flex min-w-0 flex-1 justify-center">
            <img
              src={Houses}
              alt="houses Image"
              className="h-auto w-full max-w-[254px]"
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex h-auto">
        <img
          src={HallImage}
          alt="hall image"
          className="h-full w-full rounded-[4px]"
        />
      </div>
    </section>
  );
};

export default AboutUs;
