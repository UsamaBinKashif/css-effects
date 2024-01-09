import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const CustomHandle = (props) => {
  return (
    <div
      style={{
        width: props.portrait ? "100%" : "0.25rem",
        height: props.portrait ? "0.25rem" : "100%",
        backgroundImage: `linear-gradient(
            ${props.portrait ? "to left" : "to bottom"},
            rgba(25, 0, 0, 1) 0%,
            /*... (gradient colors) ...*/
            rgba(25, 0, 0, 1) 100%
        )`,
      }}
    />
  );
};
const ComparisonSlider = () => {
  return (
    <section className="  ">
      <div className="p-10">
        <ReactCompareSlider
          changePositionOnHover={true}
          itemOne={
            <ReactCompareSliderImage src="/assets/Che 1.png" alt="Image one" />
          }
          itemTwo={
            <ReactCompareSliderImage src="/assets/Che 2.png" alt="Image two" />
          }
          handle={<CustomHandle />}
        />
      </div>
      <div className="p-10">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage src="/assets/167.png" alt="Image one" />
          }
          itemTwo={
            <ReactCompareSliderImage src="/assets/167.1.png" alt="Image two" />
          }
         
        />
      </div>
      <div className="p-10">
        <ReactCompareSlider
         handle={<CustomHandle portrait={true} />}
         changePositionOnHover={true}
          itemOne={
            <ReactCompareSliderImage src="/assets/one.jpg" alt="Image one" />
          }
          itemTwo={
            <ReactCompareSliderImage src="/assets/two.jpg" alt="Image two" />
          }
        />
      </div>
    </section>
  );
};

export default ComparisonSlider;
