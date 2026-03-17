import arrowRight from "../../../../assets/icons/arrowRightBlack.svg";
import Button from "../../../../components/Button";

const OfferBanner = () => {
  return (
    <div>
      <div>
         <h1>Don't Miss Out: Limited-Time Offer!</h1>
        <h3>
          Enjoy 20% off your first purchase with code <span>GLOW20</span>
        </h3>
      </div>
      <div>
         <span>Hurry, Offer Ends In 12hrs 30mins 56Seconds</span>
      </div>
      <div>
        <Button >
          Shop the Sale
          <img src={arrowRight} alt="arrow right" />
        </Button>
      </div>
    </div>
  )
}

export default OfferBanner
