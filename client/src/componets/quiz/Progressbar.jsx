import Header from "./Header";

const Progressbar = ({ question, Questionarray, index, changeindex, derenderQuestion, decindex }) => {
  const renderCells = () => {
    return Questionarray?.map((_, i) => <div key={i} className={i <= index ? "w-14 h-1 bg-pink-500" : ""}></div>);
  };

  return (
    <div>
      {/* <Header index={index} length={colors.length} decreindex={decrementIndex} derenderingquestion={derenderQuestion} /> */}
      <Header index={index} length={Questionarray.length} decreindex={decindex} derenderingquestion={derenderQuestion} decimg={changeindex} />
      <div className="flex flex-col items-center justify-center mt-4">
        <div className=" w-96 bg-gray-200">
          <div className="flex">{renderCells()}</div>
        </div>
      </div>

      {/* <Twoimage increindex={incrementIndex} renderquestion={renderQuestion} indexs={index} /> */}
    </div>
  );
};

export default Progressbar;
