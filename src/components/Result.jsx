import React from "react";
import { useForm } from "../contexts/FormContext";
import { motion } from "motion/react";

const Result = () => {
  const {
    duration,
    gifts,
    stipend,
    reason,
    contact,
    setcheck,
    check,
    setduration,
    setcontact,
    setgifts,
    setreason,
    setstipend,
  } = useForm();

  const textSelector = (duration, gifts, stipend, reason, contact) => {
    if (
      duration <= 12 &&
      stipend <= 5000 &&
      gifts <= 7 &&
      contact === "Blocked 🚫" &&
      (reason === "Third Person 😡" || "Axxa insaan mil gya 😶")
    ) {
      return (
        <p>
          Chaar din ki chandni fir andheri raat , open kar phone search kar gulu gulu and use kar apna hath 💀💀
          <h1 className="font-bold text-xl text-blue-700">Serious ni lena koi ..</h1>
        </p>
      );
    } else if (
    (duration >12 && duration <=36) &&
      stipend <= 25000 &&
      gifts <= 20 &&
      contact === "Blocked 🚫" &&
      (reason === "Third Person 😡" || "Axxa insaan mil gya 😶")
    ) {
      return (
        <p>
         Mere baabu ne thana thaya se lekar kese ho tak sab natak tha pyaar ni, 
         Chord kar chali gyi to kya hua dil tuta h ...
         (____)  nahi..... 💀💀
         <h1 className="font-bold text-xl text-gray-700">Serious ni lena koi ..</h1>
        </p>
      );
    } else if (
      duration >= 36 &&
      gifts >= 25 &&
      stipend >= 25000 &&
      contact === "Blocked 🚫" &&
      (reason === "Third Person 😡" || "Axxa insaan mil gya 😶")
    ) {
      return (
        <p>
          Mana le yrr....jaake .........kya pta kuch misunderstanding ho gyi ho.
        </p>
      );
    } else if (duration >= 36 && reason === "On the Self Respect 😎" && (contact === "Blocked 🚫" || contact === "Unblock and Not Answering 🙄" )) {
      return (
        <p>
          Self respect pe aa gyi ........chord de esa ni bolunga .....mahino se
          sath h ye dekh....last time mana le....
        </p>
      );
    } else if (reason === "On the Self Respect 😎" && duration < 36) {
      return <p>Self respect pe aa gyi ....bhaad me jaane de .......</p>;
    } else if (contact === "UnBlock and Not Answering 🙄" && duration >= 36) {
      return <p>Time de yrr........saamne wale ko ....</p>;
    } else if (contact === "UnBlock and Not Answering 🙄" && duration < 36) {
      return (
        <p>
          Dosto se pta karwa kya scene h........kya pta .......gulu gulu...ho
          rahi ho kahi .....😶😶
        </p>
      );
    } else if (contact === "No Contact 😔" && (duration>=8 && duration<12)) {
      return <p>Nashe me h kya .....Breakup chord tera shuru kab hua tha......</p>;
    } else if (contact === "No Contact 😔" && duration <= 8) {
      return (
        <p>
          tere bss ki ni ......ye chhichora gardi krna....jaake padhai
          kr..........
        </p>
      );
    } else if (contact === "No Contact 😔" && duration > 36) {
      return <p>NOT POSSIBLE... IMPOSSIBLE.. ANARTH .. NEVER ...Contact No. na ho NOT POSSIBLE 
        Be Busy....
      </p>;
    } else if (contact === "No Contact 😔" && duration > 12 && duration <= 36) {
      return (
        <p>
          Ab tak Contact ni h .... NOT POSSIBLE...Kisi or banaiyo .....yrr......
          Listen music, make friends...
        </p>
      );
    } else if (
      contact === "Blocked 🚫" &&
      duration >12 <= 36 &&
      reason === "Shaadi Pressure 💍" 

    ) {
      return (
        <p>
          Dekh le jaake kahi bacche na.......ghum rahe ho gali me .
          aaye bade...  shaadi ka pressure.......wale......kat gya h tera accept kar...
        </p>
      );
    } 
    else if (duration <= 12 && reason === "Shaadi Pressure 💍"  && (contact === "Blocked 🚫" || contact === "Unblock and Not Answering 🙄") ) {
      return (
        <p>
          Nibbe ...ho ...tum ..babu shona......or kar lo certificate mil
          jaayega..... ..nibbe samaaj se......
        </p>
      );
    }
    else if (
      duration > 12 <= 24 &&
      stipend <= 15000 &&
      gifts <= 14 &&
      contact === "Blocked 🚫" &&
      (reason === "Third Person 😡" || "Axxa insaan mil gya 😶")
    ) {
      return <p>Kat gaya tumhara ......😜. Jaha mile wahi jalao .......😏</p>;
    } 
  };

  return (
    <motion.div 
    initial={{scale:0,opacity:0}}
   whileInView={{scale:1,opacity:1}}
   transition={{duration:0.5,delay:0.2}}
    className="w-64 min-h-32 rounded shadow-xl shadow-gray-500 bg-black text-white flex flex-col items-center px-4 py-2 gap-5">
      <h1 className="text-xl text-red-500 underline font-semibold">
        Break-up Report 💔
      </h1>
      <div> {textSelector(duration, gifts, stipend, reason, contact)} </div>
      <button
        onClick={() => {
          setcheck((prev) => !prev);
          setcontact("");
          setduration("");
          setgifts("");
          setreason("");
          setstipend("");
        }}
        className="px-8 py-1 text-white text-xl bg-red-700 rounded-xl cursor-pointer active:scale-75 transition-all duration-500"
      >
        Close
      </button>
    </motion.div>
  );
};

export default Result;
