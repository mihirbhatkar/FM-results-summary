import data from "./data.json";

function App() {
  return (
    <div className="min-h-screen sm:flex sm:items-center sm:justify-center bg-white">
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:shadow-lg rounded-[30px]">
        <div className="flex flex-col items-center bg-gradient-to-b from-gradLSB to-gradLRB rounded-b-[30px] sm:rounded-[30px] text-white text-center pt-4 sm:pt-12 pb-6">
          <div className="mb-4 text-lg font-bold opacity-90">Your Result</div>

          <div className="text-center grid place-content-center w-40 h-40 bg-gradient-to-b from-gradVB to-gradPB rounded-[50%] ">
            <span className="text-6xl font-bold">76</span> <br />{" "}
            <span className="opacity-50 font-semibold">of 100</span>
          </div>
          <div className="mt-8">
            <div className="text-2xl font-semibold mb-2">Great</div>
            <div className="opacity-60 mb-4 w-64 sm:w-60">
              You scored higher than 65% of the people who have taken these
              tests.
            </div>
          </div>
        </div>
        <div className="w-full px-8 flex bg-gradPB flex-col p-4 gap-4 items-center">
          <div className="font-bold self-start ">Summary</div>
          {data.map((item) => {
            let itemColor = "";
            let itemTextColor = "";
            switch (item.category) {
              case "Reaction":
                itemColor = "bg-primaryRed/5";
                itemTextColor = "text-primaryRed";
                break;

              case "Memory":
                itemColor = "bg-primaryOrange/5";
                itemTextColor = "text-primaryOrange";

                break;

              case "Verbal":
                itemColor = "bg-primaryGreen/5";
                itemTextColor = "text-primaryGreen";

                break;

              case "Visual":
                itemColor = "bg-primaryCobalt/5";
                itemTextColor = "text-primaryCobalt";

                break;

              default:
                itemColor = "bg-black";
                itemTextColor = "text-black";

                break;
            }
            return (
              <div
                key={item.category}
                className={`p-4 flex sm:gap-16 justify-between w-full ${itemColor} rounded-lg`}
              >
                <div
                  className={`${itemTextColor} font-semibold flex justify-between items-center`}
                >
                  <img src={item.icon} className="inline mr-2" alt="" />
                  {item.category}
                </div>

                <div className="flex font-[800] justify-between gap-2">
                  <span className="">{item.score}</span>/
                  <span className="opacity-30">100</span>
                </div>
              </div>
            );
          })}

          <button className="bg-slate-700 font-bold text-white mt-2 mb-4 p-4 rounded-[500px] w-full active:bg-gradient-to-b active:from-gradLSB active:to-gradLRB ">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
