import Form from "./components/Form";
import Result from "./components/Result";
import Warning from "./components/Warning";
import { useForm } from "./contexts/FormContext";
import Another from "./components/Another";
import { details } from ".";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { motion } from "motion/react";

const App = () => {
  const { check, warning } = useForm();

  useEffect(() => {});

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-zinc-900  ">
      <Navbar />

      {warning === 0 && <Warning />}
      {warning === 1 ? check ? <Form /> : <Result /> : null}
      {warning === 2 && (
        <div className=" flex flex-col gap-5 overflow-y-scroll py-2 px-4 md:p-10 ">
          <h1 className="text-center text-gray-100 underline  text-3xl mt-10 md:text-6xl font-bold">
            Other Projects
          </h1>
          {warning === 2 &&
            details.map((val) => (
              <div className="">
                <Another
                  title={val.name}
                  id={val.id}
                  desc={val.desc}
                  image={val.img}
                  link={val.link}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
