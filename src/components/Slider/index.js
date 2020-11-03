import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import AwsSliderStyles from 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Avatar from '../../assets/img/avatar.jpg';

const Slider = (
  <AwesomeSlider cssModule={AwsSliderStyles}>
    <div data-src="https://vod-progressive.akamaized.net/exp=1604228018~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2185%2F18%2F460927992%2F2039252910.mp4~hmac=5ac4cbe2fbeaffc7ddbca36141f907c0cc755f69ee84f3683aeb8d2b4aa2e33a/vimeo-prod-skyfire-std-us/01/2185/18/460927992/2039252910.mp4?filename=pexels-cottonbro-5427573.mp4" />
    <div data-src="https://vod-progressive.akamaized.net/exp=1604228018~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2185%2F18%2F460927992%2F2039252910.mp4~hmac=5ac4cbe2fbeaffc7ddbca36141f907c0cc755f69ee84f3683aeb8d2b4aa2e33a/vimeo-prod-skyfire-std-us/01/2185/18/460927992/2039252910.mp4?filename=pexels-cottonbro-5427573.mp4" />
    <div data-src="https://vod-progressive.akamaized.net/exp=1604228018~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2185%2F18%2F460927992%2F2039252910.mp4~hmac=5ac4cbe2fbeaffc7ddbca36141f907c0cc755f69ee84f3683aeb8d2b4aa2e33a/vimeo-prod-skyfire-std-us/01/2185/18/460927992/2039252910.mp4?filename=pexels-cottonbro-5427573.mp4" />
  </AwesomeSlider>
);

export default Slider;

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

// const Slider = (
//   <AwesomeSlider animation="cubeAnimation">
//     <div data-src="/path/to/image-0.png" />
//     <div data-src="/path/to/image-1.png" />
//     <div data-src="/path/to/image-2.jpg" />
//   </AwesomeSlider>
// );

// export default Slider;