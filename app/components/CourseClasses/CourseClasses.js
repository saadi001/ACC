import Image from "next/image";
import book1 from "../../asset/images/books1.png";
import Title from "../shared/Title/Title";

const CourseClasses = () => {
  return (
    <div className="py-8">
      <Title>Classes</Title>
      <div className="grid grid-cols-2 gap-5 mt-12">
        <div className="rounded-lg p-5 bg-gradient-to-tr from-red-100 to-red-50">
          <h5 className="bg-emerald-300 text-sm px-3 py-1 rounded-md w-fit">
            Chapter 1
          </h5>
          <div className="">
            <div className="flex items-center gap-3 mt-1">
              <Image
                src={book1}
                alt="books image"
                className="w-12 -ml-2"
              ></Image>
              <p className="text-lg font-semibold">
                Number of classes of every chapter
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <ul className="list-disc list-inside">
                <li>ল্যাবটরির নিরাপদ ব্যবহার </li>
              </ul>
              <p className="bg-emerald-400 px-2 rounded-md text-sm   ">5</p>
            </div>
            <div className="flex items-center justify-between">
              <p>chapter name</p>
              <p>classes</p>
            </div>
            <div className="flex items-center justify-between">
              <p>chapter name</p>
              <p>classes</p>
            </div>
            <div className="flex items-center justify-between">
              <p>chapter name</p>
              <p>classes</p>
            </div>
            <div className="flex items-center justify-between">
              <p>chapter name</p>
              <p>classes</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CourseClasses;
