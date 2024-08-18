import { chapter1, chapter2 } from "@/app/asset/data/chaptersData";
import book1 from "../../asset/images/books1.png";
import book3 from "../../asset/images/books3.jpg";
import Title from "../shared/Title/Title";
import SingleClass from "./SingleClass";

const CourseClasses = () => {
  return (
    <div className="py-8">
      <Title>Classes</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        <SingleClass
          chapter={1}
          image={book1}
          chapterData={chapter1}
          chapterBG={"bg-gradient-to-br from-red-300 to-red-200"}
        />
        <SingleClass
          chapter={2}
          image={book3}
          chapterData={chapter2}
          imageWidth={"!w-8 !ml-0"}
          classNames={"!bg-gradient-to-tr !from-blue-100 !to-blue-50"}
          chapterBG={"bg-gradient-to-br from-blue-300 to-blue-200"}
        />
        <div></div>
      </div>
    </div>
  );
};

export default CourseClasses;
