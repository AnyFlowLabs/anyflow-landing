// import brazilFlag from '@/assets/brazil-flag.svg'
// import usFlag from '@/assets/us-flag.svg'

// import i18n from '@/locales/i18n'
// import { useState } from 'react';

// const LanguageChange = () => {
//     const [isOpen, setIsOpen] = useState(false)
//     const changeLanguage = (lng: string) => {
//         i18n.changeLanguage(lng)
//     }
//     const openDropdown = () => {
//         setIsOpen(!isOpen)
//     }
//     return (

//     <button className="absolute top-0 right-0 m-3 bg-zinc-900 text-slate-300 rounded-md py-4 px-3" onClick={openDropdown}>
//         Change Language
//         <div id="dropdown" className={(isOpen ? "show": "hidden")} >
//             <ul className="py-2 w-auto flex flex-col justify-items-center text-sm text-gray-700 dark:text-gray-200">
//                 <li className=" w-auto flex flex-col justify-items-center">
//                     <button onClick={() => i18n.changeLanguage('en')} className="py-2 block w-auto h-auto px-5 my-1 bg-zinc-900 text-slate-300 rounded-md"><div className="flex mx-1 gap-4 justify-center items-center"><img src={usFlag} height={30} width={30} alt="United States Flag" />English</div></button>
//                 </li>
//                 <li className="w-auto flex flex-col justify-items-center">
//                     <button onClick={() => i18n.changeLanguage('pt')} className="py-2 block w-auto h-auto px-5 my-1 bg-zinc-900 text-slate-300 rounded-md"><div className="flex mx-1 gap-4 justify-center items-center"><img src={brazilFlag} height={30} width={30} alt="Brazilian Flag" />Portugues</div></button>
//                 </li>
//             </ul>
//         </div>
//     </button>
//     );
// }
// export default LanguageChange
