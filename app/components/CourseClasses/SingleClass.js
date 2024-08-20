import Image from "next/image";

const SingleClass = ({
  paper,
  image,
  chapterData,
  imageWidth,
  classNames,
  chapterBG,
}) => {
  return (
    <div
      className={`rounded-lg p-5 bg-gradient-to-tr from-red-100 to-red-50 ${classNames}`}
    >
      <h5
        className={` text-sm font-medium px-3 py-1 rounded-md w-fit ${chapterBG}`}
      >
        {paper} Paper
      </h5>
      <div className="">
        <div className="flex items-center gap-3 mt-4">
          <Image
            src={image}
            alt="books image"
            className={`w-12 -ml-2 ${imageWidth}`}
          ></Image>
          <p className="text-lg font-semibold">
            Number of classes of every chapter
          </p>
        </div>
        {chapterData.map((chapter, i) => {
          return (
            <div key={i} className="flex items-center justify-between mt-2">
              <ul className="list-disc list-inside ml-2">
                <li>{chapter?.name}</li>
              </ul>
              <p className="bg-emerald-400 px-2 rounded-md text-sm">
                {chapter?.classes}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleClass;
