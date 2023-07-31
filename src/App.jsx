import data from "./data.json";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:grid md:place-items-center md:grid-cols-2">
      <div className="flex flex-col items-center bg-gradient-to-b from-gradLSB to-gradLRB rounded-b-[30px] text-white text-center p-4 shadow-xl">
        <div className="mb-4 text-lg font-bold opacity-90">Your Result</div>

        <div className="text-center grid place-content-center w-40 h-40 bg-gradient-to-b from-gradVB to-gradPB rounded-[50%] ">
          <span className="text-6xl font-bold">76</span> <br />{" "}
          <span className="opacity-50 font-semibold">of 100</span>
        </div>
        <div className="mt-8">
          <div className="text-2xl font-semibold mb-2">Great</div>
          <div className="opacity-50 mb-4 w-72">
            You scored higher than 65% of the people who have taken the tests.
          </div>
        </div>
      </div>
      <div className="flex bg-gradPB flex-col p-4 gap-4 items-center">
        <div className="font-bold self-start ">Summary</div>
        {data.map((item) => {
          return (
            <div className="p-4 flex justify-between w-full bg-primaryRed/10 rounded-lg">
              <div className="text-primaryRed font-semibold">
                <img src={require(`${item.icon}`)} alt="" />
                {item.category}
              </div>

              <div>
                <span className="font-[800]">{item.score} /</span>{" "}
                <span className="font-bold opacity-30">100</span>
              </div>
            </div>
          );
        })}

        <button className="bg-slate-700 font-bold text-white p-4 rounded-[500px] w-full">
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;
