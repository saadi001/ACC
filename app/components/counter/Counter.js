const Counter = () => {
  return (
    <div className="grid grid-cols-3 mt-20 mb-14 bg-gradient-to-tr from-blue-100 to-blue-50 py-8 divide-x divide-slate-300 rounded-md">
      <div className="text-center">
        <p className="text-3xl font-bold">650+</p>
        <p>Hand Note</p>
      </div>
      <div className=" text-center">
        <p className="text-3xl font-bold">130+</p>
        <p>Regular classes</p>
      </div>
      <div className=" text-center">
        <p className="text-3xl font-bold">5+</p>
        <p>Special class</p>
      </div>
    </div>
  );
};

export default Counter;
