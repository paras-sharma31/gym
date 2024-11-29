import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    name: "",
    dept: "",
    batch: "",
    varsity: "",
    session: "",
    address: "",
    district: "",
    thana: "",
    post: "",
    verify: false,
  });
  const [checkbox, setCheckBox] = useState<boolean>(false);
  console.log(checkbox);

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (formNo === 1 && state.name && state.dept && state.batch) {
      setFormNo(formNo + 1);
    } else if (
      formNo === 2 &&
      state.varsity &&
      state.session &&
      state.address
    ) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fillup all input field");
    }
  };

  const prev = () => {
    setFormNo(formNo - 1);
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (state.district && state.thana && state.post) {
      toast.success("form submit success");
      localStorage.setItem("formData", JSON.stringify(state));
    }
  };

  const handleCheck = () => {
    setCheckBox((prev) => !prev);
  };

  return (
    <div className="w-screen flex justify-center h-[750px] m-auto items-center ">
      <ToastContainer />
      <div className="card w-[50%]  rounded-md shadow-md bg-white p-5">
        <div className="flex justify-center items-center">
          {formArray.map((v, i) => (
            <>
              <div
                className={`w-[35px] my-3 text-white rounded-full ${
                  formNo - 1 === i ||
                  formNo - 1 === i + 1 ||
                  formNo === formArray.length
                    ? "bg-yellow-500"
                    : "bg-slate-400"
                } h-[35px] flex justify-center items-center`}
              >
                {v}
              </div>
              {i !== formArray.length - 1 && (
                <div
                  className={`w-[85px] h-[2px] ${
                    formNo === i + 2 || formNo === formArray.length
                      ? "bg-yellow-500"
                      : "bg-slate-400"
                  }`}
                ></div>
              )}
            </>
          ))}
        </div>
        <form action="" onSubmit={hanldeSubmit}>
          {formNo === 1 && (
            <div className="bg-white mt-4 rounded-lg shadow-md p-5">
              <p className="text-black bg-slate-300 p-1 text-xs rounded-md">
                Your Content Title
              </p>
              <div className="flex flex-col mb-2 bg-white">
                <label
                  htmlFor="name"
                  className=" bg-white text-gray-700 font-light text-sm mt-10"
                >
                  Please breifly describe prompt
                </label>
                <textarea
                  value={state.name}
                  onChange={inputHandle}
                  name="name"
                  className="p-2 border h-[200px] border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                  placeholder="breifly describe prompt"
                  id="name"
                />
              </div>
              <div className="flex flex-col mb-2  bg-white mt-3">
                <label
                  htmlFor="dept"
                  className=" bg-white text-gray-700 font-light text-sm "
                >
                  select the writing purpose
                </label>
                <select
                  name="dept"
                  id="dept"
                  className="p-2 border border-slate-400  outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                >
                  <option
                    value={state.dept}
                    className="text-xs font-light text-gray-700"
                  >
                    select a purpose
                  </option>
                  <option value={state.dept}>Essay</option>
                  <option value={state.dept}>Email</option>
                  <option value={state.dept}>Letter</option>
                  <option value={state.dept}>Story</option>
                </select>
              </div>
              <div className="flex flex-col mb-2 mt-3 bg-white">
                <label
                  htmlFor="batch"
                  className=" bg-white text-gray-700 font-light text-sm "
                >
                  select writing level
                </label>
                <input
                  value={state.batch}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400  outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                  type="text"
                  name="batch"
                />
              </div>
              <div className="mb-2 mt-3">
                <label
                  htmlFor=""
                  className=" bg-white text-gray-700 font-light text-sm "
                >
                  Automatic Citations
                </label>
                <p className="text-gray-800 p-2 text-sm flex items-center justify-between">
                  Add a thesis statement to your Essay, otherwise we will use
                  prompt as the main idea
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    checked={checkbox}
                    onChange={handleCheck}
                  />
                </p>
              </div>
              {checkbox === true && (
                <>
                  <div className="flex flex-col mb-2 mt-3 bg-white">
                    <label
                      htmlFor="batch"
                      className=" bg-white text-gray-700 font-light text-sm "
                    >
                      select writing level
                    </label>
                    <input
                      value={state.batch}
                      onChange={inputHandle}
                      className="p-2 border border-slate-400  outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                      type="text"
                      name="batch"
                    />
                  </div>
                </>
              )}
              <div className="mt-4 flex justify-end gap-3 items-end bg-white">
                <div>
                  {" "}
                  <button
                    onClick={next}
                    className="px-3 py-2 text-lg rounded-md w-full text-white bg-yellow-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {formNo === 2 && (
            <div className="bg-white">
              <div className="flex flex-col mb-2 bg-white">
                <label htmlFor="name " className="bg-white text-black">
                  varsity
                </label>
                <input
                  value={state.varsity}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                  type="text"
                  name="varsity"
                  placeholder="varsity"
                  id="varsity"
                />
              </div>
              <div className="flex flex-col mb-2 bg-white">
                <label htmlFor="session" className="bg-white text-black">
                  session
                </label>
                <input
                  value={state.session}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                  type="text"
                  name="session"
                  placeholder="session"
                  id="session"
                />
              </div>
              <div className="flex flex-col mb-2 bg-white">
                <label htmlFor="address" className="bg-white text-black">
                  address
                </label>
                <input
                  value={state.address}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                  type="textarea"
                  name="address"
                  placeholder="address"
                />
              </div>
              <div className="mt-4 flex justify-center gap-3 items-center bg-white">
                <button
                  onClick={prev}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
                >
                  Previous
                </button>
                <button
                  onClick={next}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {formNo === 3 && (
            <div className="bg-white">
              <div className="flex flex-col mb-2 bg-white">
                <label htmlFor="district" className="bg-white text-black">
                  District
                </label>
                <input
                  value={state.district}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                  type="text"
                  name="district"
                  placeholder="district"
                  id="district"
                />
              </div>
              <div className="flex flex-col mb-2 bg-white">
                <label htmlFor="thana" className="bg-white text-black">
                  Thana
                </label>
                <input
                  value={state.thana}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                  type="text"
                  name="thana"
                  placeholder=" thana "
                  id="thana"
                />
              </div>
              <div className="flex flex-col mb-2 bg-white">
                <label htmlFor="post" className="bg-white text-black">
                  Post
                </label>
                <input
                  value={state.post}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md bg-white text-black"
                  type="text"
                  name="post"
                  placeholder="post"
                />
              </div>
              <div className="mt-4 flex justify-center gap-3 items-center bg-white">
                <button
                  onClick={prev}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
                >
                  submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
