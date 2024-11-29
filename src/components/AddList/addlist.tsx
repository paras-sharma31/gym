import React, { useState } from "react";
import { RiDeleteBackLine } from "react-icons/ri";
import { Outlet } from 'react-router-dom';


interface CategoryData {
  file: string;
  category: string;
}

const Addlist = () => {
  const [category, setCategory] = useState<string>("");
  const [files, setFiles] = useState<string>("");
  const [list, setList] = useState<CategoryData[]>([]);

  const handleInput = (e: any) => {
    setCategory(e.target.value);
    
  };

  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    const baseImg: any = await covertBase64(file);
    console.log(baseImg);
    setFiles(baseImg);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (category && files) {
      setList((prev) => [...prev, { category, file: files }]);
      setCategory("");
      setFiles("");
    }
  };

  const covertBase64 = (file) => {
    console.log(file)
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleDelete = (index: number) => {
    const items = list.filter((_, i) => i !== index);
    setList(items);
  };

  return (

    <div className="w-full h-[70vh] flex items-center justify-center ">
      <div className="w-[50%] m-auto  h-[400px] flex items-center gap-2 justify-center flex-col">
        <div>
          <form onSubmit={handleSubmit} className="mb-5">
            <p> Add Your Category </p>
            <input
              type="text"
              value={category}
              placeholder="Add Your Category..."
              className="  rounded-md bg-gray-500  mr-2 "
              style={{ padding: "5px 45px" }}
              onChange={handleInput}
            />
            <input type="date" className="rounded-md bg-gray-500 py-1 px-10 mr-2" />
            <input type="file" onChange={handleFile} className="pointer" />
            <button
              type="submit"
              className=" p-2 rounded-md text-xs font-medium bg-yellow-600"
            >
              Submit
            </button>
          </form>
          <div className="flex flex-col items-center">
            {list.map((item, index) => (
              <>
                <input
                  type="text"
                  key={index}
                  value={item?.category}
                  disabled
                  className=" bg-yellow-600 rounded-md text-lg  font-medium "
                  style={{ padding: "7px 44px" }}
                />
                <img
                  src={item?.file}
                  alt="Uploaded preview"
                  style={{
                    marginTop: "10px",
                    border: "1px solid",
                    borderRadius: "25px",
                  }}
                />
                <button className=" p-1 rounded-md">
                  <RiDeleteBackLine
                    fill="red"
                    onClick={() => handleDelete(index)}
                  />
                </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addlist;
