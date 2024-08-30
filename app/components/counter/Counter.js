import CountComponent from "./CountComponent";


const Counter = () => {
  return (
    <div className="grid grid-cols-4 mt-12 md:mt-20 mb-8 md:mb-14 bg-gradient-to-tr from-blue-100 to-blue-50 py-5 md:py-8 divide-x divide-slate-300 rounded-md">
      <div className="text-center px-2">
        <p className="text-xl md:text-3xl font-bold">
          <CountComponent endNumber={103}/>
        </p>
        <p className="text-sm md:text-base">Admission Class</p>
      </div>
      <div className="text-center px-2">
        <p className="text-xl md:text-3xl font-bold">
          <CountComponent endNumber={24}/>
        </p>
        <p className="text-sm md:text-base">Hand Note</p>
      </div>
      <div className=" text-center px-2">
        <p className="text-xl md:text-3xl font-bold">
          <CountComponent endNumber={8}/>
        </p>
        <p className="text-sm md:text-base">Regular classes</p>
      </div>
      <div className=" text-center px-2">
        <p className="text-xl md:text-3xl font-bold">
          <CountComponent endNumber={6}/>
        </p>
        <p className="text-sm md:text-base">Special class</p>
      </div>
    </div>
  );
};

export default Counter;
