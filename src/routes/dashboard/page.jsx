// import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// import { useTheme } from "@/hooks/use-theme";

// import { overviewData, recentSalesData, topProducts } from "@/constants";

// import { Footer } from "@/layouts/footer";

// import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from "lucide-react";

// const DashboardPage = () => {
//     const { theme } = useTheme();

//     return (
//         <div className="flex flex-col gap-y-4 max-w-6xl mx-auto px-2 bg-white dark:bg-slate-900">
//             <h1 className="title">Dashboard</h1>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 <div className="card">
//                     <div className="card-header">
//                         <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
//                             <Package size={26} />
//                         </div>
//                         <p className="card-title">Total Products</p>
//                     </div>
//                     <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
//                         <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,154</p>
//                         <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
//                             <TrendingUp size={18} />
//                             25%
//                         </span>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <div className="card-header">
//                         <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
//                             <DollarSign size={26} />
//                         </div>
//                         <p className="card-title">Total Paid Orders</p>
//                     </div>
//                     <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
//                         <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">$16,000</p>
//                         <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
//                             <TrendingUp size={18} />
//                             12%
//                         </span>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <div className="card-header">
//                         <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
//                             <Users size={26} />
//                         </div>
//                         <p className="card-title">Total Customers</p>
//                     </div>
//                     <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
//                         <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">15,400k</p>
//                         <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
//                             <TrendingUp size={18} />
//                             15%
//                         </span>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <div className="card-header">
//                         <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
//                             <CreditCard size={26} />
//                         </div>
//                         <p className="card-title">Sales</p>
//                     </div>
//                     <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
//                         <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">12,340</p>
//                         <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
//                             <TrendingUp size={18} />
//                             19%
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
//                 <div className="card col-span-1 md:col-span-2 lg:col-span-4">
//                     <div className="card-header">
//                         <p className="card-title">Overview</p>
//                     </div>
//                     <div className="card-body p-0">
//                         <ResponsiveContainer
//                             width="100%"
//                             height={300}
//                         >
//                             <AreaChart
//                                 data={overviewData}
//                                 margin={{
//                                     top: 0,
//                                     right: 0,
//                                     left: 0,
//                                     bottom: 0,
//                                 }}
//                             >
//                                 <defs>
//                                     <linearGradient
//                                         id="colorTotal"
//                                         x1="0"
//                                         y1="0"
//                                         x2="0"
//                                         y2="1"
//                                     >
//                                         <stop
//                                             offset="5%"
//                                             stopColor="#2563eb"
//                                             stopOpacity={0.8}
//                                         />
//                                         <stop
//                                             offset="95%"
//                                             stopColor="#2563eb"
//                                             stopOpacity={0}
//                                         />
//                                     </linearGradient>
//                                 </defs>
//                                 <Tooltip
//                                     cursor={false}
//                                     formatter={(value) => `$${value}`}
//                                 />

//                                 <XAxis
//                                     dataKey="name"
//                                     strokeWidth={0}
//                                     stroke={theme === "light" ? "#475569" : "#94a3b8"}
//                                     tickMargin={6}
//                                 />
//                                 <YAxis
//                                     dataKey="total"
//                                     strokeWidth={0}
//                                     stroke={theme === "light" ? "#475569" : "#94a3b8"}
//                                     tickFormatter={(value) => `$${value}`}
//                                     tickMargin={6}
//                                 />

//                                 <Area
//                                     type="monotone"
//                                     dataKey="total"
//                                     stroke="#2563eb"
//                                     fillOpacity={1}
//                                     fill="url(#colorTotal)"
//                                 />
//                             </AreaChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </div>
//                 <div className="card col-span-1 md:col-span-2 lg:col-span-3">
//                     <div className="card-header">
//                         <p className="card-title">Recent Sales</p>
//                     </div>
//                     <div className="card-body h-[300px] overflow-auto p-0">
//                         {recentSalesData.map((sale) => (
//                             <div
//                                 key={sale.id}
//                                 className="flex items-center justify-between gap-x-4 py-2 pr-2"
//                             >
//                                 <div className="flex items-center gap-x-4">
//                                     <img
//                                         src={sale.image}
//                                         alt={sale.name}
//                                         className="size-10 flex-shrink-0 rounded-full object-cover"
//                                     />
//                                     <div className="flex flex-col gap-y-2">
//                                         <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
//                                         <p className="text-sm text-slate-600 dark:text-slate-400">{sale.email}</p>
//                                     </div>
//                                 </div>
//                                 <p className="font-medium text-slate-900 dark:text-slate-50">${sale.total}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="card">
//                 <div className="card-header">
//                     <p className="card-title">Top Orders</p>
//                 </div>
//                 <div className="card-body p-0">
//                     <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
//                         <table className="table">
//                             <thead className="table-header">
//                                 <tr className="table-row">
//                                     <th className="table-head">#</th>
//                                     <th className="table-head">Product</th>
//                                     <th className="table-head">Price</th>
//                                     <th className="table-head">Status</th>
//                                     <th className="table-head">Rating</th>
//                                     <th className="table-head">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="table-body">
//                                 {topProducts.map((product) => (
//                                     <tr
//                                         key={product.number}
//                                         className="table-row"
//                                     >
//                                         <td className="table-cell">{product.number}</td>
//                                         <td className="table-cell">
//                                             <div className="flex w-max gap-x-4">
//                                                 <img
//                                                     src={product.image}
//                                                     alt={product.name}
//                                                     className="size-14 rounded-lg object-cover"
//                                                 />
//                                                 <div className="flex flex-col">
//                                                     <p>{product.name}</p>
//                                                     <p className="font-normal text-slate-600 dark:text-slate-400">{product.description}</p>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td className="table-cell">${product.price}</td>
//                                         <td className="table-cell">{product.status}</td>
//                                         <td className="table-cell">
//                                             <div className="flex items-center gap-x-2">
//                                                 <Star
//                                                     size={18}
//                                                     className="fill-yellow-600 stroke-yellow-600"
//                                                 />
//                                                 {product.rating}
//                                             </div>
//                                         </td>
//                                         <td className="table-cell">
//                                             <div className="flex items-center gap-x-4">
//                                                 <button className="text-blue-500 dark:text-blue-600">
//                                                     <PencilLine size={20} />
//                                                 </button>
//                                                 <button className="text-red-500">
//                                                     <Trash size={20} />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default DashboardPage;

// "use client"

// import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// import { useTheme } from "@/hooks/use-theme"

// import { overviewData } from "@/constants"

// import { Footer } from "@/layouts/footer"

// import { CreditCard, DollarSign, Package, TrendingUp, Users } from "lucide-react"

// // Sales by country data to match the first image
// const salesByCountryData = [
//   {
//     country: "United States",
//     flag: "🇺🇸",
//     sales: 9600,
//     value: "$756,600",
//   },
//   {
//     country: "Canada",
//     flag: "🇨🇦",
//     sales: 8340,
//     value: "$545,760",
//   },
//   {
//     country: "France",
//     flag: "🇫🇷",
//     sales: 6700,
//     value: "$487,560",
//   },
//   {
//     country: "Australia",
//     flag: "🇦🇺",
//     sales: 3900,
//     value: "$380,670",
//   },
//   {
//     country: "Italy",
//     flag: "🇮🇹",
//     sales: 2470,
//     value: "$230,900",
//   },
//   {
//     country: "India",
//     flag: "🇮🇳",
//     sales: 700,
//     value: "$47,480",
//   },
//   {
//     country: "Japan",
//     flag: "🇯🇵",
//     sales: 300,
//     value: "$7,200",
//   },
// ]

// const Page = () => {
//   const { theme } = useTheme()

//   return (
//     <div className="flex flex-col gap-y-4 max-w-6xl mx-auto px-2 bg-white dark:bg-slate-900">
//       {/* Top 4 Cards */}
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         <div className="card">
//           <div className="card-header">
//             <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
//               <Package size={26} />
//             </div>
//             <p className="card-title">Total Products</p>
//           </div>
//           <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
//             <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,154</p>
//             <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
//               <TrendingUp size={18} />
//               25%
//             </span>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header">
//             <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
//               <DollarSign size={26} />
//             </div>
//             <p className="card-title">Total Paid Orders</p>
//           </div>
//           <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
//             <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">$16,000</p>
//             <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
//               <TrendingUp size={18} />
//               12%
//             </span>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header">
//             <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
//               <Users size={26} />
//             </div>
//             <p className="card-title">Total Customers</p>
//           </div>
//           <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
//             <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">15,400k</p>
//             <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
//               <TrendingUp size={18} />
//               15%
//             </span>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header">
//             <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
//               <CreditCard size={26} />
//             </div>
//             <p className="card-title">Sales</p>
//           </div>
//           <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
//             <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">12,340</p>
//             <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
//               <TrendingUp size={18} />
//               19%
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Overview Chart and Sales by Country */}
//       <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//         {/* Overview Chart */}
//         <div className="card">
//           <div className="card-header">
//             <p className="card-title">Overview</p>
//           </div>
//           <div className="card-body p-0">
//             <ResponsiveContainer width="100%" height={350}>
//               <AreaChart
//                 data={overviewData}
//                 margin={{
//                   top: 0,
//                   right: 0,
//                   left: 0,
//                   bottom: 0,
//                 }}
//               >
//                 <defs>
//                   <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
//                     <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <Tooltip cursor={false} formatter={(value) => `$${value}`} />

//                 <XAxis
//                   dataKey="name"
//                   strokeWidth={0}
//                   stroke={theme === "light" ? "#475569" : "#94a3b8"}
//                   tickMargin={6}
//                 />
//                 <YAxis
//                   dataKey="total"
//                   strokeWidth={0}
//                   stroke={theme === "light" ? "#475569" : "#94a3b8"}
//                   tickFormatter={(value) => `$${value}`}
//                   tickMargin={6}
//                 />

//                 <Area type="monotone" dataKey="total" stroke="#2563eb" fillOpacity={1} fill="url(#colorTotal)" />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Sales by Country */}
//         <div className="card">
//           <div className="card-header flex items-center justify-between">
//             <p className="card-title">Sales by Country</p>
//             <button className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
//               View all
//             </button>
//           </div>
//           <div className="card-body">
//             <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">This is a list of latest country</p>

//             {/* Table Headers */}
//             <div className="grid grid-cols-3 gap-4 mb-4 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
//               <div>COUNTRY</div>
//               <div className="text-center">SALES</div>
//               <div className="text-right">VALUE</div>
//             </div>

//             {/* Country Data */}
//             <div className="space-y-4">
//               {salesByCountryData.map((item, index) => (
//                 <div key={index} className="grid grid-cols-3 gap-4 items-center py-2">
//                   <div className="flex items-center gap-3">
//                     <span className="text-lg">{item.flag}</span>
//                     <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.country}</span>
//                   </div>
//                   <div className="text-center text-sm font-medium text-slate-900 dark:text-slate-100">
//                     {item.sales.toLocaleString()}
//                   </div>
//                   <div className="text-right text-sm font-medium text-slate-900 dark:text-slate-100">{item.value}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Page

// "use client"

// import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// import { useTheme } from "@/hooks/use-theme"

// import { Footer } from "@/layouts/footer"

// import { DollarSign, Users, Clock, ArrowUp, ArrowDown, ShoppingCart } from "lucide-react"

// // Bar chart data for the week
// const weeklyData = [
//   { day: "Mon", value: 2000 },
//   { day: "Tue", value: 3500 },
//   { day: "Wed", value: 4200 },
//   { day: "Thu", value: 2800 },
//   { day: "Fri", value: 4800 },
//   { day: "Sat", value: 3200 },
//   { day: "Sun", value: 3800 },
// ]

// // Sales by country data
// const salesByCountryData = [
//   {
//     country: "United States",
//     flag: "🇺🇸",
//     sales: 9600,
//     value: "$756,600",
//   },
//   {
//     country: "Canada",
//     flag: "🇨🇦",
//     sales: 8340,
//     value: "$545,760",
//   },
//   {
//     country: "France",
//     flag: "🇫🇷",
//     sales: 6700,
//     value: "$487,560",
//   },
//   {
//     country: "Australia",
//     flag: "🇦🇺",
//     sales: 3900,
//     value: "$380,670",
//   },
//   {
//     country: "Italy",
//     flag: "🇮🇹",
//     sales: 2470,
//     value: "$230,900",
//   },
//   {
//     country: "India",
//     flag: "🇮🇳",
//     sales: 700,
//     value: "$47,480",
//   },
//   {
//     country: "Japan",
//     flag: "🇯🇵",
//     sales: 300,
//     value: "$7,200",
//   },
// ]

// const Page = () => {
//   const { theme } = useTheme()

//   return (
//     <div className="flex flex-col -mt-8 gap-y-6 max-w-[1600px] ml-8 mx-auto px-4 bg-white dark:bg-slate-900 min-h-screen py-6">
//       {/* Top 4 Cards with Pink/Magenta Theme */}

//       <div className="flex flex-col gap-6 md:flex-row md:gap-6">
//         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
//           <div className="flex items-center justify-between mb-4">
//             <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center">
//               <DollarSign size={24} className="text-white" />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <p className="text-2xl font-bold text-gray-900">$3,600</p>
//             <p className="text-sm text-gray-500">Today's Money</p>
//             <div className="flex items-center gap-1">
//               <ArrowUp size={16} className="text-green-500" />
//               <span className="text-sm font-medium text-green-500">+16%</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
//           <div className="flex items-center justify-between mb-4">
//             <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center">
//               <Clock size={24} className="text-white" />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <p className="text-2xl font-bold text-gray-900">2,300</p>
//             <p className="text-sm text-gray-500">Today's Users</p>
//             <div className="flex items-center gap-1">
//               <ArrowUp size={16} className="text-green-500" />
//               <span className="text-sm font-medium text-green-500">+3%</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
//           <div className="flex items-center justify-between mb-4">
//             <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center">
//               <Users size={24} className="text-white" />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <p className="text-2xl font-bold text-gray-900">+3,462</p>
//             <p className="text-sm text-gray-500">New Clients</p>
//             <div className="flex items-center gap-1">
//               <ArrowDown size={16} className="text-red-500" />
//               <span className="text-sm font-medium text-red-500">-2%</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
//           <div className="flex items-center justify-between mb-4">
//             <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center">
//               <ShoppingCart size={24} className="text-white" />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <p className="text-2xl font-bold text-gray-900">$83,430</p>
//             <p className="text-sm text-gray-500">Sales</p>
//             <div className="flex items-center gap-1">
//               <ArrowUp size={16} className="text-green-500" />
//               <span className="text-sm font-medium text-green-500">+5.34%</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         html, body {
//           scrollbar-width: none !important;
//           -ms-overflow-style: none !important;
//         }
//         ::-webkit-scrollbar {
//           display: none !important;
//         }
//       `}</style>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Bar Chart Section - Dark Background */}
//         <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-6 text-white">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h2 className="text-3xl font-bold text-white">$45,385</h2>
//               <p className="text-slate-300 text-sm">Sales this week</p>
//             </div>
//             <div className="flex items-center gap-1">
//               <ArrowUp size={16} className="text-green-400" />
//               <span className="text-green-400 font-medium">12.5%</span>
//             </div>
//           </div>

//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                 <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
//                 <YAxis hide />
//                 <Tooltip
//                   cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
//                   contentStyle={{
//                     backgroundColor: "#1e293b",
//                     border: "none",
//                     borderRadius: "8px",
//                     color: "white",
//                   }}
//                 />
//                 <Bar dataKey="value" fill="#ec4899" radius={[4, 4, 0, 0]} maxBarSize={40} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Sales by Country Section */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold text-gray-900">Sales by Country</h3>
//             <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all</button>
//           </div>
//           <p className="text-sm text-gray-500 mb-6">This is a list of latest country</p>

//           {/* Table Headers */}
//           <div className="grid grid-cols-3 gap-4 mb-4 pb-2 border-b border-gray-100">
//             <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">COUNTRY</div>
//             <div className="text-xs font-medium text-gray-400 uppercase tracking-wider text-center">SALES</div>
//             <div className="text-xs font-medium text-gray-400 uppercase tracking-wider text-right">VALUE</div>
//           </div>

//           {/* Country Data */}
//           <div className="space-y-4">
//             {salesByCountryData.map((item, index) => (
//               <div key={index} className="grid grid-cols-3 gap-4 items-center py-2">
//                 <div className="flex items-center gap-3">
//                   <span className="text-lg">{item.flag}</span>
//                   <span className="text-sm font-medium text-gray-900">{item.country}</span>
//                 </div>
//                 <div className="text-center text-sm font-semibold text-gray-900">{item.sales.toLocaleString()}</div>
//                 <div className="text-right text-sm font-semibold text-gray-900">{item.value}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Page

// "use client";

// import {
//   Bar,
//   BarChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import {
//   DollarSign,
//   Users,
//   Clock,
//   ArrowUp,
//   ArrowDown,
//   ShoppingCart,
//   Earth,
//   User,
// } from "lucide-react";

// import flag1 from "@/assets/3.png"
// import flag2 from "@/assets/7.png"
// import flag3 from "@/assets/8.png"
// import flag4 from "@/assets/9.png"
// import flag5 from "@/assets/5.png"
// import flag6 from "@/assets/11.png"
// import flag7 from "@/assets/12.png"

// // Bar chart data for the week with background values
// const weeklyData = [
//   { day: "01", value: 2000, background: 5000 },
//   { day: "02", value: 3500, background: 5000 },
//   { day: "03", value: 4200, background: 5000 },
//   { day: "04", value: 2800, background: 5000 },
//   { day: "05", value: 4800, background: 5000 },
//   { day: "06", value: 3200, background: 5000 },
//   { day: "07", value: 3800, background: 5000 },
// ];

// // Sales by country data with flag images
// const salesByCountryData = [
//   {
//     country: "United States",
//     flag: flag1,
//     sales: 9600,
//     value: "$756,600",
//   },
//   {
//     country: "Canada",
//     flag: flag2,
//     sales: 8340,
//     value: "$545,760",
//   },
//   {
//     country: "France",
//     flag: flag3,
//     sales: 6700,
//     value: "$487,560",
//   },
//   {
//     country: "Australia",
//     flag: flag4,
//     sales: 3900,
//     value: "$380,670",
//   },
//   {
//     country: "Italy",
//     flag: flag5,
//     sales: 2470,
//     value: "$230,900",
//   },
//   {
//     country: "India",
//     flag: flag6,
//     sales: 700,
//     value: "$47,480",
//   },
//   {
//     country: "Japan",
//     flag: flag7,
//     sales: 300,
//     value: "$7,200",
//   },
// ];

// export default function Component() {
//   return (
//     <div className="flex flex-col gap-y-6 -mt-9 max-w-[2000px] ml-7 mx-auto px-4 bg-white min-h-screen py-6">
//       {/* Top 4 Cards with New Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
//         {/* Today's Money Card */}
//         <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
//               <DollarSign size={24} className="text-white" />
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-0">
//                 <p className="text-2xl font-bold text-gray-900">$3,600</p>
//                 <div className="flex items-center gap-0 ml-9 mt-1">
//                   <ArrowUp size={20} className="text-green-500" />
//                   <span className="text-xl font-medium text-green-500">
//                     +16%
//                   </span>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-500 ">Today's Money</p>
//             </div>
//           </div>
//         </div>

//         {/* Hide scrollbar globally */}
//         <style jsx global>{`
//           html,
//           body {
//             scrollbar-width: none !important;
//             -ms-overflow-style: none !important;
//           }
//           ::-webkit-scrollbar {
//             display: none !important;
//           }
//         `}</style>

//         {/* Today's Users Card */}
//          <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
//               <Earth size={24} className="text-white" />
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-0">
//                 <p className="text-2xl font-bold text-gray-900">2,300</p>
//                 <div className="flex items-center gap-0 ml-9 mt-1">
//                   <ArrowUp size={20} className="text-green-500" />
//                   <span className="text-xl font-medium text-green-500">
//                     +3%
//                   </span>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-500">Today's Users</p>
//             </div>
//           </div>
//         </div>

//         {/* New Clients Card */}
//           <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
//               <User size={24} className="text-white" />
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-0">
//                 <p className="text-2xl font-bold text-gray-900">+3,462</p>
//                 <div className="flex items-center gap-0 ml-9 mt-1">
//                   <ArrowDown size={20} className="text-red-500" />
//                   <span className="text-xl font-medium text-red-500">-2%</span>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-500">New Clients</p>
//             </div>
//           </div>
//         </div>

//         {/* Sales Card */}
//           <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
//               <ShoppingCart size={24} className="text-white" />
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-0">
//                 <p className="text-2xl font-bold text-gray-900">$83,430</p>
//                 <div className="flex items-center gap-0 ml-2 mt-1">
//                   <ArrowUp size={20} className="text-green-500" />
//                   <span className="text-xl font-medium text-green-500">
//                     +5.34%
//                   </span>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-500">Sales</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Bar Chart Section - Two-toned bars */}
//         <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-6 mb-36 text-white">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h2 className="text-3xl font-bold text-white">$45,385</h2>
//               <p className="text-slate-300 text-sm">Sales this week</p>
//             </div>
//             <div className="flex items-center gap-1 -mt-5">
//               <ArrowUp size={22} className="text-green-400" />
//               <span className="text-green-400 text-xl">12.5%</span>
//             </div>
//           </div>

//           <div className="h-4/5 mb-6 -mt-10 relative">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart
//                 data={weeklyData}
//                 margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//               >
//                 <XAxis
//                   dataKey="day"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={true}
//                 />
//                 <YAxis hide />
//                 <Tooltip
//                   cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
//                   contentStyle={{
//                     backgroundColor: "#1e293b",
//                     border: "none",
//                     borderRadius: "8px",
//                     color: "white",
//                   }}
//                   formatter={(value, name) => [value, "Users"]}
//                   labelFormatter={(label) => `${label} Feb`}
//                 />
//                 {/* Background bars (gray) */}
//                 <Bar
//                   dataKey="background"
//                   fill="#64748b"
//                   radius={[6, 6, 6, 6]}
//                   maxBarSize={18}
//                 />
//                 {/* Foreground bars (pink) */}
//                 <Bar
//                   dataKey="value"
//                   fill="#C400A3"
//                   radius={[8, 8, 8, 8]}
//                   maxBarSize={18}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Bottom section */}
//           <div className="flex items-center justify-between pt-4 border-t border-slate-600">
//             <div className="flex items-center gap-2 mt-2 text-slate-300">
//               <span className="text-sm">Last 7 days</span>
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>
//             <div className="flex items-center gap-2 text-white hover:bg-slate-700 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
//               <span className="text-sm font-medium">SALES REPORT</span>
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Sales by Country Section */}
//         <div className="bg-white rounded-2xl p-6 mb-36 shadow-sm border border-gray-100">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-xl -mt-2 -mb-3 font-semibold text-gray-900">
//               Sales by Country
//             </h3>
//             <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
//               View all
//             </button>
//           </div>
//           <p className="text-sm font-semibold text-gray-500 mb-10">
//             This is a list of latest country
//           </p>

//           {/* Table Headers */}
//           <div className="grid grid-cols-3 gap-4 mb-4 pb-2 border-b border-gray-100">
//             <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
//               COUNTRY
//             </div>
//             <div className="text-xs font-medium text-gray-400 uppercase tracking-wider text-center">
//               SALES
//             </div>
//             <div className="text-xs font-medium text-gray-400 uppercase tracking-wider text-right">
//               VALUE
//             </div>
//           </div>

//           {/* Country Data */}
//           <div className="space-y-0">
//             {salesByCountryData.map((item, index) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-3 gap-4 items-center py-3 border-b border-gray-200 last:border-b-0"
//               >
//                 <div className="flex items-center">
//                   <div className="w-10 h-10  overflow-hidden flex items-center justify-center bg-white-50  border-gray-100">
//                     <img
//                       src={item.flag || "/placeholder.svg"}
//                       alt={item.country}
//                       className="w-6 h-4 object-cover "
//                       crossOrigin="anonymous"
//                     />
                   
//                   </div>
//                    <div className="text-center text-sm  text-gray-900">
//                       {item.country}
//                     </div>
//                 </div>
//                 <div className="text-center text-sm font-bold text-gray-900">
//                   {item.sales.toLocaleString()}
//                 </div>
//                 <div className="text-right text-sm font-bold text-gray-900">
//                   {item.value}
//                 </div>
                
//               </div>
              
//             ))}
//           </div>
//               <div className="flex items-center justify-between pt-4 border-t border-slate-700">
//             <div className="flex items-center gap-2 mt-2 text-slate-600 cursor-pointer">
//               <span className="text-sm">Last 7 days</span>
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>
//             <div className="flex items-center gap-2 text-black hover:bg-slate-100 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
//               <span className="text-sm font-medium">SALES REPORT</span>
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import { useState, useRef, useEffect } from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { DollarSign, ArrowUp, ArrowDown, ShoppingCart, Earth, User, ChevronDown, ChevronRight } from "lucide-react"

import flag1 from "@/assets/3.png"
import flag2 from "@/assets/7.png"
import flag3 from "@/assets/8.png"
import flag4 from "@/assets/9.png"
import flag5 from "@/assets/5.png"
import flag6 from "@/assets/11.png"
import flag7 from "@/assets/12.png"

// Bar chart data for the week with background values
const weeklyData = [
  { day: "01", value: 2000, background: 5000 },
  { day: "02", value: 3500, background: 5000 },
  { day: "03", value: 4200, background: 5000 },
  { day: "04", value: 2800, background: 5000 },
  { day: "05", value: 4800, background: 5000 },
  { day: "06", value: 3200, background: 5000 },
  { day: "07", value: 3800, background: 5000 },
]

// Sales by country data with flag images
const salesByCountryData = [
  {
    country: "United States",
    flag: flag1,
    sales: 9600,
    value: "$756,600",
  },
  {
    country: "Canada",
    flag: flag2,
    sales: 8340,
    value: "$545,760",
  },
  {
    country: "France",
    flag: flag3,
    sales: 6700,
    value: "$487,560",
  },
  {
    country: "Australia",
    flag: flag4,
    sales: 3900,
    value: "$380,670",
  },
  {
    country: "Italy",
    flag: flag5,
    sales: 2470,
    value: "$230,900",
  },
  {
    country: "India",
    flag: flag6,
    sales: 700,
    value: "$47,480",
  },
  {
    country: "Japan",
    flag: flag7,
    sales: 300,
    value: "$7,200",
  },
]

// Time period options for dropdown
const timePeriodOptions = ["Yesterday", "Today", "Last 7 days", "Last 30 days", "Last 90 days", "Custom..."]

export default function Component() {
  const [chartTimeframe, setChartTimeframe] = useState("Last 7 days")
  const [countryTimeframe, setCountryTimeframe] = useState("Last 7 days")
  const [isChartDropdownOpen, setIsChartDropdownOpen] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const chartDropdownRef = useRef(null)
  const countryDropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (chartDropdownRef.current && !chartDropdownRef.current.contains(event.target)) {
        setIsChartDropdownOpen(false)
      }
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="flex flex-col gap-y-6 -mt-9 max-w-[2000px] ml-7 mx-auto px-4 bg-white min-h-screen py-6">
      {/* Top 4 Cards with New Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {/* Today's Money Card */}
        <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <DollarSign size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0">
                <p className="text-2xl font-bold text-gray-900">$3,600</p>
                <div className="flex items-center gap-0 ml-9 mt-1">
                  <ArrowUp size={20} className="text-green-500" />
                  <span className="text-xl font-medium text-green-500">+16%</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 ">Today's Money</p>
            </div>
          </div>
        </div>

        {/* Hide scrollbar globally */}
        <style jsx global>{`
          html,
          body {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          ::-webkit-scrollbar {
            display: none !important;
          }
        `}</style>

        {/* Today's Users Card */}
        <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Earth size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0">
                <p className="text-2xl font-bold text-gray-900">2,300</p>
                <div className="flex items-center gap-0 ml-9 mt-1">
                  <ArrowUp size={20} className="text-green-500" />
                  <span className="text-xl font-medium text-green-500">+3%</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">Today's Users</p>
            </div>
          </div>
        </div>

        {/* New Clients Card */}
        <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <User size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0">
                <p className="text-2xl font-bold text-gray-900">+3,462</p>
                <div className="flex items-center gap-0 ml-9 mt-1">
                  <ArrowDown size={20} className="text-red-500" />
                  <span className="text-xl font-medium text-red-500">-2%</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">New Clients</p>
            </div>
          </div>
        </div>

        {/* Sales Card */}
        <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <ShoppingCart size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0">
                <p className="text-2xl font-bold text-gray-900">$83,430</p>
                <div className="flex items-center gap-0 ml-2 mt-1">
                  <ArrowUp size={20} className="text-green-500" />
                  <span className="text-xl font-medium text-green-500">+5.34%</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">Sales</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart Section - Two-toned bars */}
        <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-6 mb-36 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">$45,385</h2>
              <p className="text-slate-300 text-sm">Sales this week</p>
            </div>
            <div className="flex items-center gap-1 -mt-5">
              <ArrowUp size={22} className="text-green-400" />
              <span className="text-green-400 text-xl">12.5%</span>
            </div>
          </div>

          <div className="h-4/5 mb-6 -mt-10 relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={true} />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                  }}
                  formatter={(value, name) => [value, "Users"]}
                  labelFormatter={(label) => `${label} Feb`}
                />
                {/* Background bars (gray) */}
                <Bar dataKey="background" fill="#64748b" radius={[6, 6, 6, 6]} maxBarSize={18} />
                {/* Foreground bars (pink) */}
                <Bar dataKey="value" fill="#C400A3" radius={[8, 8, 8, 8]} maxBarSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Bottom section with dropdown */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-600">
            <div className="relative" ref={chartDropdownRef}>
              <button
                onClick={() => setIsChartDropdownOpen(!isChartDropdownOpen)}
                className="flex items-center gap-2 mt-2 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <span className="text-sm mb-1">{chartTimeframe}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isChartDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-slate-700 rounded-lg shadow-lg py-1 z-10 w-40">
                  {timePeriodOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-600 hover:text-white cursor-pointer transition-colors duration-150"
                      onClick={() => {
                        setChartTimeframe(option)
                        setIsChartDropdownOpen(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-white hover:bg-slate-700 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
              <span className="text-sm font-medium">SALES REPORT</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Sales by Country Section */}
        <div className="bg-white rounded-2xl p-6 mb-36 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl -mt-2 -mb-3 font-semibold text-gray-900">Sales by Country</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all</button>
          </div>
          <p className="text-sm font-semibold text-gray-500 mb-10">This is a list of latest country</p>

          {/* Table Headers */}
          <div className="grid grid-cols-3 gap-7 mb-1 pb-4 border-b border-gray-200">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">COUNTRY</div>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider text-center">SALES</div>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider text-right">VALUE</div>
          </div>

          {/* Country Data */}
          <div className="space-y-0">
            {salesByCountryData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center py-3 border-b mb-3 border-gray-200 last:border-b-0"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-6 overflow-hidden flex items-center justify-center bg-white-50 border-gray-100">
                    <img
                      src={item.flag || "/placeholder.svg"}
                      alt={item.country}
                      className="w-6 h-4 object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="text-sm text-gray-900">{item.country}</div>
                </div>
                <div className="text-center text-sm font-bold text-gray-900">{item.sales.toLocaleString()}</div>
                <div className="text-right text-sm font-bold text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Bottom section with dropdown */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-2">
            <div className="relative" ref={countryDropdownRef}>
              <button
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="flex items-center gap-2 mt-2 text-slate-600 hover:text-slate-800 transition-colors duration-200"
              >
                <span className="text-sm">{countryTimeframe}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isCountryDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10 w-40">
                  {timePeriodOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                      onClick={() => {
                        setCountryTimeframe(option)
                        setIsCountryDropdownOpen(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-black hover:bg-slate-100 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
              <span className="text-sm font-medium">SALES REPORT</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


