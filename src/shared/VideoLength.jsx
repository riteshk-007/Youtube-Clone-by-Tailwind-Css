import moment from "moment/moment";
// eslint-disable-next-line react/prop-types
function VideoLength({ time }) {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return (
    <div className="absolute bottom-2 right-2 bg-black py-[2px] px-2 text-[11px] rounded text-white">
      {videoLengthInSeconds}
    </div>
  );
}

export default VideoLength;
