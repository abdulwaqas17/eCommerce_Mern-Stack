// // import React from "react";
// // import { useTranslation } from "react-i18next";

// // const languages = [
// //   {
// //     code: "en",
// //     label: "English",
// //   },
// //   {
// //     code: "ur",
// //     label: "اردو",
// //   },
// // ];

// // const LanguageSelector = () => {
// //   const { i18n } = useTranslation();

// //   const handleLanguageChange = (e) => {
// //     i18n.changeLanguage(e.target.value);
// //   };

// //   return (
// //     <div className="w-32">
// //       <select
// //         value={i18n.language}
// //         onChange={handleLanguageChange}
// //         className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
// //       >
// //         {languages.map((lang) => (
// //           <option key={lang.code} value={lang.code}>
// //             {lang.label}
// //           </option>
// //         ))}
// //       </select>
// //     </div>
// //   );
// // };

// // export default LanguageSelector;
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { GlobeIcon } from "lucide-react";

// const languages = [
//   {
//     code: "en",
//     label: "ENG",
//     flag: "https://flagcdn.com/w40/us.png",
//   },
//   {
//     code: "ur",
//     label: "اردو",
//     flag: "https://flagcdn.com/w40/pk.png",
//   },
// ];

// const LanguageSelector = () => {
//   const { i18n } = useTranslation();

//   const handleLanguageChange = (e) => {
//     i18n.changeLanguage(e.target.value);
//   };

//   const currentLang = languages.find((l) => l.code === i18n.language);

//   return (
//     <div className="w-full flex max-w-xs md:max-w-[180px] text-sm gap-2">
//       <label
//         htmlFor="language-select"
//         className="mb-1 text-gray-700 font-medium flex items-center gap-2"
//       >
//         <GlobeIcon className="w-4 h-4 text-gray-500" />
//         <span>Language</span>
//       </label>

//       <div className="relative">
//         <select
//           id="language-select"
//           value={i18n.language}
//           onChange={handleLanguageChange}
//           className="w-[100px] appearance-none border border-gray-300 rounded-lg bg-white py-2 pl-10 pr-8 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
//         >
//           {languages.map((lang) => (
//             <option key={lang.code} value={lang.code}>
//               {lang.label}
//             </option>
//           ))}
//         </select>

//         {/* Flag inside select box */}
//         <div className="absolute left-2 top-[9px]">
//           <img
//             src={currentLang?.flag}
//             alt={currentLang?.label}
//             className="w-5 h-5 rounded-full"
//           />
//         </div>

//         {/* Dropdown arrow */}
//         <div className="absolute right-2 top-[10px] pointer-events-none text-gray-400">
//           ▼
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LanguageSelector;
import React from "react";
import { useTranslation } from "react-i18next";
import { GlobeIcon } from "lucide-react";

const languages = [
  {
    code: "en",
    label: "ENG",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    code: "ur",
    label: "اردو",
    flag: "https://flagcdn.com/w40/pk.png",
  },
  {
    code: "zh",
    label: "中文",
    flag: "https://flagcdn.com/w40/cn.png",
  },
  {
    code: "ar",
    label: "عربي",
    flag: "https://flagcdn.com/w40/sa.png",
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="w-full flex max-w-xs md:max-w-[200px] text-sm gap-2">
      <label
        htmlFor="language-select"
        className="mb-1 text-gray-700 font-medium flex items-center gap-2"
      >
        <GlobeIcon className="w-4 h-4 text-gray-500" />
        <span className="hidden md:inline">Language</span>
      </label>

      <div className="relative w-full">
        <select
          id="language-select"
          value={i18n.language}
          onChange={handleLanguageChange}
          className="w-full appearance-none border border-gray-300 rounded-lg bg-white py-2 pl-10 pr-8 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>

        {/* Flag */}
        <div className="absolute left-2 top-[9px]">
          <img
            src={currentLang.flag}
            alt={currentLang.label}
            className="w-5 h-5 rounded-full"
          />
        </div>

        {/* Arrow */}
        <div className="absolute right-2 top-[10px] pointer-events-none text-gray-400">
          ▼
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
