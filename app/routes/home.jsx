import {
  Bills,
  Navigation,
  Overview,
  Pots,
  Transactions,
} from "../components/components";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  House,
  ArrowDownUp,
  ReceiptText,
  Receipt,
  CirclePlus,
} from "lucide-react";

export function meta() {
  return [
    { title: "Personal-Dashboard" },
    { name: "Dashboard", content: "Welcome to Personal-Dashboard" },
  ];
}

export default function Home() {
  return (
    <div className="flex bg-amber-50 min-h-screen">
      {/* Sidebar / Nav */}
      <nav
        className="fixed lg:static bottom-0 mt-10 w-full lg:w-56 lg:h-screen  border-2 border-amber-600
                     bg-gray-900 text-gray-100 flex lg:flex-col  justify-around 
                     lg:justify-start gap-10 p-3 rounded-t-lg z-20 shadow-lg lg:mt-0
                     backdrop-blur bg-opacity-90"
      >
        <p className="hidden lg:block text-2xl font-bold mb-4 text-blue-300">
          Finance
        </p>
        {details.map((item, index) => (
          <Navigation key={index} img={item.img} name={item.name} />
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-5 space-y-6">
        <section>
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {finances.map((item) => (
              <Overview
                key={item.title}
                title={item.title}
                amount={item.amount}
              />
            ))}
          </div>
        </section>
        {/* lg layout */}
        <article className="flex flex-col lg:flex-row gap-3">
          {/* Left Column */}
          <div className="flex flex-col gap-3 ">
            {/* Pots Section */}
            <section className="p-3 bg-gray-50 text-sm rounded-lg shadow">
              <div className="flex p-2 justify-between items-center">
                <h2 className="font-bold">Pots</h2>
                <p className="text-blue-500 hover:underline cursor-pointer">
                  See Details
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex bg-amber-500 p-3 gap-3 md:w-1/2 items-center rounded-lg shadow">
                  <Receipt className="text-green-600 w-10 h-10" />
                  <div>
                    <h2>Total Saved</h2>
                    <p className="font-bold text-xl">$850</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:w-1/2 gap-3">
                  {pots.map((item) => (
                    <Pots
                      key={item.title}
                      h2={item.title}
                      amount={item.amount}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Transactions Section */}
            <section className="p-3 bg-gray-50 text-sm rounded-lg shadow">
              <div className="flex justify-between p-2 mt-4">
                <h2 className="font-bold">Transactions</h2>
                <p className="text-blue-500 hover:underline cursor-pointer">
                  View All
                </p>
              </div>
              {transactions.map((item, index) => (
                <Transactions
                  key={index}
                  date={item.date}
                  amount={item.amount}
                  src="/images/img.jpg"
                  name={item.name}
                />
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 border-2 lg:w-1/2 ">
            {/* Budget Section */}
            <section className="p-5 bg-gray-50 text-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg text-gray-800">Budget</h2>
                <p className="text-blue-500 hover:underline cursor-pointer">
                  See Details
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Pie Chart Area */}
                <div className="flex-1 flex justify-center items-center bg-white rounded-lg shadow-inner p-4">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={budgets}
                        dataKey="amount"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        innerRadius={20}
                        // deffine outer size of outer &inner circle
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                        // labels inside the circle
                      >
                        {budgets.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      {/* <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(255,255,255,0.9)",
                          borderRadius: "8px",
                        }}
                      /> */}
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Budget Breakdown Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3 w-full lg:w-1/3">
                  {budgets.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-all"
                    >
                      <h3 className="text-gray-700 font-semibold">
                        {item.name}
                      </h3>
                      <p className="text-lg font-bold text-gray-900">
                        ${item.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Recurring Bills */}
            <section className="p-3 bg-gray-50 text-sm rounded-lg shadow mb-10">
              <div className="flex justify-between p-2 mt-4">
                <h2 className="font-bold">Recurring Bills</h2>
                <p className="text-blue-500 hover:underline cursor-pointer">
                  See Details
                </p>
              </div>
              {bills.map((items, index) => (
                <Bills key={index} h2={items.name} amount={items.amount} />
              ))}
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}

let finances = [
  { title: "Current Balance", amount: 4836.25 },
  { title: "Income", amount: 3814.25 },
  { title: "Expense", amount: 1700.5 },
];

let pots = [
  { title: "Savings", amount: 159 },
  { title: "Gift", amount: 40 },
  { title: "Concert Ticket", amount: 110 },
  { title: "New Laptop", amount: 10 },
];

let transactions = [
  { name: "Emma Richardson", date: "19 Aug 2024", amount: +75.5 },
  { name: "Savory Bites Bistro", date: "19 Aug 2024", amount: -55.5 },
  { name: "Daniel Carter", date: "19 Aug 2024", amount: -42.5 },
  { name: "Sun Park", date: "19 Aug 2024", amount: +120.0 },
  { name: "Urban Services Hub", date: "19 Aug 2024", amount: -65.5 },
];

let budgets = [
  { name: "Entertainment", amount: 50.0 },
  { name: "Bills", amount: 750.0 },
  { name: "Dining Out", amount: 75.0 },
  { name: "Personal Care", amount: 100.0 },
];

let bills = [
  { name: "Paid bills", amount: 190.0 },
  { name: "Total Upcoming", amount: 194.98 },
  { name: "Due Soon", amount: 59.98 },
];

let details = [
  { img: <House />, name: "Overview" },
  { img: <ArrowDownUp />, name: "Transactions" },
  { img: <CirclePlus />, name: "Budget" },
  { img: <Receipt />, name: "Pots" },
  { img: <ReceiptText />, name: "Recurring Bills" },
];
let COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
