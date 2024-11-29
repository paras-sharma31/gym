import { useEffect, useRef, useState } from "react";

const UseAuth = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", JSON.stringify(input));
  };

  return { input, handleChange, handleSubmit, inputRef };
};
export default UseAuth;
