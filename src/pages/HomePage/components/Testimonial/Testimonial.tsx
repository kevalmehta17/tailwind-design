import { allReviews } from "../../../../constants/AllReviews";

interface ReviewCardProps {
  imageSrc: string;
  reviewHeading: string;
  review: string;
  name: string;
}

const ReviewCard = ({
  imageSrc,
  reviewHeading,
  review,
  name,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col items-start rounded-[14px] bg-white px-3 py-[14px] sm:rounded-[18px] sm:px-[18px] sm:py-[22px] lg:px-6 lg:py-7">
      <div className="h-[68px] w-[68px] flex-shrink-0 self-center rounded-full sm:h-[88px] sm:w-[88px] lg:h-[100px] lg:w-[100px]">
        <img
          src={imageSrc}
          alt={`${name} Profile Picture`}
          className="h-full w-full object-cover object-top rounded-full"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-2 pt-3 sm:gap-[10px] sm:pt-5">
        <h3 className="m-0 text-[15px] font-normal leading-[120%] tracking-[-0.01em] text-black sm:text-[21px] md:text-[22px] lg:text-[24px] max-[425px]:text-[18px]">
          {reviewHeading}
        </h3>
        <p className="m-0 text-[13px] font-light leading-[145%] tracking-[-0.01em] text-black sm:text-[18px] lg:text-[20px] lg:leading-[150%] max-[425px]:text-base">
          {review}
          <strong className="font-normal"> – {name}</strong>
        </p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div
      id="spa"
      className="bg-[var(--bg-testimonial-primary)] pb-3 pl-[10px] pt-6 sm:pb-5 sm:pl-4 sm:pt-[35px] md:pb-[21px] md:pt-[52px] lg:pl-[21px] lg:pt-[67px]"
    >
      <h1 className="text-[24px] font-normal leading-none tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px] max-[425px]:text-[30px] lg:text-[50px] max-[322px]:text-[24px]">
        Testimonial
      </h1>
      <div className="grid grid-cols-1 gap-[10px] pb-3 pr-[10px] pt-4 sm:gap-4 sm:pb-5 sm:pr-4 sm:pt-8 md:gap-[18px] md:pb-14 md:pt-[38px] lg:grid-cols-3 lg:gap-6 lg:pb-[87px] lg:pr-[21px] lg:pt-[50px]">
        {allReviews.map((review) => (
          <ReviewCard
            key={review.name}
            imageSrc={review.imageSrc}
            reviewHeading={review.reviewHeading}
            review={review.review}
            name={review.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
