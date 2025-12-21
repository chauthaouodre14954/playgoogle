// import { Laptop } from "lucide-react"

// export function PlayOnPC() {
//   return (
//     <div className="mb-8 rounded-lg border border-[#dadce0] p-4 md:p-6">
//       <div className="mb-4 flex items-center gap-3">
//         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#174ea6] text-white flex-shrink-0">
//           <Laptop className="h-5 w-5" />
//         </div>
//         <h2 className="text-base md:text-lg font-medium text-[#202124]">Play on PC</h2>
//       </div>

//       <p className="mb-4 text-sm text-[#5f6368]">Play <strong>Chicken Road 2</strong> on your Windows PC with Google Play Games</p>

//       <div className="mb-4 rounded-lg bg-[#f8f9fa] p-3 md:p-4">
//         <h3 className="mb-2 text-xs font-medium text-[#202124]">Minimum requirements</h3>
//         <ul className="space-y-1 text-xs text-[#5f6368]">
//           <li>Windows 10 (v2004)</li>
//           <li>SSD with 2 GB available space</li>
//           <li>Intel UHD Graphics 630 GPU or comparable</li>
//           <li>2 CPU physical cores</li>
//           <li>2 GB RAM</li>
//           <li>Hardware virtualization enabled</li>
//         </ul>
//       </div>

//       <button className="text-sm font-medium text-[#01875f] hover:underline">Learn more</button>
//     </div>
//   )
// }



// import { Monitor, Maximize, TrendingUp, RefreshCw, Gift } from "lucide-react"

// export function PlayOnPC() {
//   return (
//     <div className="max-w-[220px] rounded-lg bg-[#2d2d2d] p-6 text-white">
//       <div className="mb-6 flex items-start gap-3">
//         <div className="flex h-6 w-6 items-center justify-center text-[#00d77f] flex-shrink-0">
//           <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M8 5v14l11-7z" />
//           </svg>
//         </div>
//         <div>
//           <h2 className="text-lg font-semibold">Play on PC</h2>
//         </div>
//       </div>

//       <p className="mb-4 text-sm text-gray-300 leading-relaxed">
//         Play this game on your Windows PC with Google Play Games
//       </p>

//       <a href="#" className="mb-6 inline-block text-sm text-gray-400 hover:text-gray-300">
//         Learn more
//       </a>

//       <div className="mb-6 border-t border-gray-700" />

//       <ul className="mb-6 space-y-3 text-sm">
//         <li className="flex items-start gap-3">
//           <Monitor className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
//           <span className="text-gray-300">Official Google experience</span>
//         </li>
//         <li className="flex items-start gap-3">
//           <Maximize className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
//           <span className="text-gray-300">Bigger screen</span>
//         </li>
//         <li className="flex items-start gap-3">
//           <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
//           <span className="text-gray-300">Level up with improved controls</span>
//         </li>
//         <li className="flex items-start gap-3">
//           <RefreshCw className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
//           <span className="text-gray-300">Seamless sync across devices*</span>
//         </li>
//         <li className="flex items-start gap-3">
//           <Gift className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
//           <span className="text-gray-300">Earn Google Play Points</span>
//         </li>
//       </ul>

//       <div className="mb-6 border-t border-gray-700" />

//       <div className="mb-6">
//         <h3 className="mb-4 text-base font-semibold">Minimum requirements</h3>
//         <ul className="space-y-2 text-sm text-gray-300">
//           <li>
//             <span className="font-medium text-white">OS:</span> Windows 10 (v2004)
//           </li>
//           <li>
//             <span className="font-medium text-white">Storage:</span> Solid state drive (SSD) with 10 GB of available
//             storage space
//           </li>
//           <li>
//             <span className="font-medium text-white">Graphics:</span> Intel® UHD Graphics 630 GPU or comparable
//           </li>
//           <li>
//             <span className="font-medium text-white">Processor:</span> 4 CPU physical cores
//           </li>
//           <li>
//             <span className="font-medium text-white">Memory:</span> 8 GB RAM
//           </li>
//           <li className="text-gray-400">Windows admin account</li>
//           <li className="text-gray-400">Hardware virtualization must be turned on</li>
//         </ul>
//       </div>

//       <p className="mb-4 text-xs text-gray-400 leading-relaxed">
//         To learn more about these requirements,{" "}
//         <a href="#" className="text-[#00d77f] hover:underline">
//           visit the Help Center
//         </a>
//       </p>

//       <p className="text-[10px] text-gray-500 leading-relaxed">
//         Google Play and the Google Play logo are trademarks of Intel Corporation or its subsidiaries. Windows is a
//         trademark of the Microsoft group of companies.
//       </p>

//       <p className="mt-2 text-[10px] text-gray-500">*Might not be available for this game</p>
//     </div>
//   )
// }





import { Monitor, Maximize, TrendingUp, RefreshCw, Gift } from "lucide-react"

export function PlayOnPC() {
  return (
    <div className="w-full rounded-lg bg-[#2d2d2d] p-8 text-white">
      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-6 w-6 items-center justify-center text-[#00d77f] flex-shrink-0">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Play on PC</h2>
        </div>
      </div>

      <p className="mb-4 text-sm text-gray-200 leading-relaxed"> {/* Изменено с gray-300 на gray-200 */}
        Play this game on your Windows PC with Google Play Games
      </p>

      <a 
        href="#" 
        className="mb-6 inline-block text-sm text-[#00d77f] hover:text-[#00d77f]/90 font-medium" /* Добавлен font-medium */
      >
        Learn more
      </a>

      <div className="mb-6 border-t border-gray-600" /> {/* Изменено с gray-700 на gray-600 */}

      <ul className="mb-6 space-y-3 text-sm">
        <li className="flex items-start gap-3">
          <Monitor className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" /> {/* Изменено с gray-400 на gray-300 */}
          <span className="text-gray-200">Official Google experience</span> {/* Изменено с gray-300 на gray-200 */}
        </li>
        <li className="flex items-start gap-3">
          <Maximize className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
          <span className="text-gray-200">Bigger screen</span>
        </li>
        <li className="flex items-start gap-3">
          <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
          <span className="text-gray-200">Level up with improved controls</span>
        </li>
        <li className="flex items-start gap-3">
          <RefreshCw className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
          <span className="text-gray-200">Seamless sync across devices*</span>
        </li>
        <li className="flex items-start gap-3">
          <Gift className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
          <span className="text-gray-200">Earn Google Play Points</span>
        </li>
      </ul>

      <div className="mb-6 border-t border-gray-600" /> {/* Изменено с gray-700 на gray-600 */}

      <div className="mb-6">
        <h3 className="mb-4 text-base font-semibold">Minimum requirements</h3>
        <ul className="space-y-2 text-sm text-gray-200"> {/* Изменено с gray-300 на gray-200 */}
          <li>
            <span className="font-medium text-white">OS:</span> Windows 10 (v2004)
          </li>
          <li>
            <span className="font-medium text-white">Storage:</span> Solid state drive (SSD) with 10 GB of available
            storage space
          </li>
          <li>
            <span className="font-medium text-white">Graphics:</span> Intel® UHD Graphics 630 GPU or comparable
          </li>
          <li>
            <span className="font-medium text-white">Processor:</span> 4 CPU physical cores
          </li>
          <li>
            <span className="font-medium text-white">Memory:</span> 8 GB RAM
          </li>
          <li className="text-gray-300">Windows admin account</li> {/* Изменено с gray-400 на gray-300 */}
          <li className="text-gray-300">Hardware virtualization must be turned on</li> {/* Изменено с gray-400 на gray-300 */}
        </ul>
      </div>

      <p className="mb-4 text-xs text-gray-300 leading-relaxed"> {/* Изменено с gray-400 на gray-300 */}
        To learn more about these requirements,{" "}
        <a href="#" className="text-[#00d77f] hover:underline font-medium"> {/* Добавлен font-medium */}
          visit the Help Center
        </a>
      </p>

      <p className="mt-2 text-xs text-gray-400 leading-relaxed"> {/* Изменено с [10px] и gray-500 на text-xs и gray-400 */}
        Google Play and the Google Play logo are trademarks of Intel Corporation or its subsidiaries. Windows is a
        trademark of the Microsoft group of companies.
      </p>

      <p className="mt-2 text-xs text-gray-400">*Might not be available for this game</p> {/* Изменено с [10px] и gray-500 на text-xs и gray-400 */}
    </div>
  )
}