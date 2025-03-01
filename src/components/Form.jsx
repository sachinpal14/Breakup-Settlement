import React from "react";
import { useForm } from "../contexts/FormContext";
import { motion } from "motion/react";
import { del } from "motion/react-client";

const Forms = () => {
  const {
    duration,
    setduration,
    gifts,
    setgifts,
    stipend,
    setstipend,
    setcheck,
    reason,
    setreason,
    contact,
    setcontact,
    check,
  } = useForm();

  const handleSubmit = (e) => {
    setcheck((prev) => !prev);
    e.preventDefault();
  };
  return (
    <motion.div
    initial={{opacity:0,scale:0}}
    whileInView={{opacity:1,scale:1}}
    duration={{duration:2,delay:0.4}}
    className="bg-black shadow-2xl m-2 shadow-gray-500  rounded-2xl md:h-[75vh] md:w-[420px] px-6 py-4">
      <form
        onSubmit={handleSubmit}
        className="px-4 py-2 flex flex-col gap-5 items-center"
      >
        <h1 className="text-red-500 font-semibold text-2xl md:text-4xl text-center">
          Breakup Settlement Calculator 💔
        </h1>

        <div className="w-full">
          <label className="text-white" htmlFor="first">
            Relation Duration (in Months)
          </label>
          <input
            placeholder="Enter Relation Duration"
            name="first"
            type="number"
            required
            value={duration}
            onChange={(e) => setduration(e.target.value)}
          />
        </div>

        <div className="w-full">
          <label className="text-white" htmlFor="second">
            Kharcha kitna kiya..??
          </label>
          <input
            placeholder="Enter Kharcha"
            value={stipend}
            onChange={(e) => setstipend(e.target.value)}
            name="second"
            type="number"
            required
          />
        </div>

        <div className="w-full">
          <label className="text-white" htmlFor="reason">
            Reason for breakup
          </label>
          <select
            className="border-1 rounded px-4 py-1 outline-none border-none w-full text-white bg-[#494848]"
            name="reason"
            id="reason"
            required
            value={reason}
            onChange={(e) => setreason(e.target.value)}
          >
            <option value="select" hidden>
              Select
            </option>
            <option value="Shaadi Pressure 💍">Shaadi Pressure 💍</option>
            <option value="Third Person 😡">Third Person 😡</option>
            <option value="Axxa insaan mil gya 😶">
              Axxa insaan mil gya 😶
            </option>
            <option value="On the Self Respect 😎">
              On the Self Respect 😎
            </option>
          </select>
        </div>

        <div className="w-full">
          <label className="text-white" htmlFor="third">
            Gifts
          </label>
          <input
            placeholder="Enter Gifts"
            value={gifts}
            onChange={(e) => setgifts(e.target.value)}
            name="third"
            type="number"
            required
          />
        </div>

        <div className="w-full">
          <label className="text-white" htmlFor="contact">
            Contact Information
          </label>
          <select
            className="border-1 rounded px-4 py-1 outline-none border-none w-full text-white bg-[#494848]"
            name="contact"
            id="contact"
            required
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
          >
            <option value="select" hidden>
              Select
            </option>
            <option value="Blocked 🚫">Blocked 🚫</option>
            <option value="Unblock and Not Answering 🙄">
              Unblock and Not Answering 🙄
            </option>
            <option value="No Contact 😔">No Contact 😔</option>
          </select>
        </div>
        <button
          type="sumbit"
          
          className="bg-red-700 px-4 py-2 text-lg text-white rounded cursor-pointer active:scale-75 transition-all duration-500"
        >
          Calculate
        </button>
      </form>
    </motion.div>
  );
};

export default Forms;
