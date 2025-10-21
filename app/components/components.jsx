import { Receipt } from "lucide-react";
import { useState } from "react";

export function Overview({ title, amount }) {
  let [isHovered, setIsHovered] = useState(false);

  let commonClasses =
    "my-3  rounded-lg transition-all duration-200 border-2 p-3 md:w-50 md:text-center ";
  let activeClasses = isHovered
    ? "bg-black text-white"
    : "bg-gray-200 text-gray-900";
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={`${commonClasses} ${activeClasses}`}
    >
      <h2 className="text-sm md:text-md font-semibold">{title}</h2>
      <p className="text-lg font-bold md:text-2xl">${amount}</p>
    </div>
  );
}

export function Pots({ h2, amount }) {
  return (
    <main>
      <article className="border-l-4 border-green-900 p-2 my-3">
        <h2 className="text-sm text-gray-500">{h2}</h2>
        <p className="font-bold tx-lg">${amount}</p>
      </article>
    </main>
  );
}

export function PotsDollar() {
  return (
    <div className=" flex">
      <Receipt />
      <article className="border-l-4 border-green-900 p-2 my-3">
        <h2 className="text-sm text-gray-500">Total Saved</h2>
        <p className="font-bold tx-lg">$ 850</p>
      </article>
    </div>
  );
}

export function Transactions({ src, name, date, amount }) {
  // determine color based on amount
  let amountColor = amount < 0 ? "text-red-600" : "text-green-600";
  let formattedAmount = amount.toLocaleString("en-KE", {
    style: "currency",
    currency: "kes",
    minimumFractionDigits: 2,
  });
  return (
    <main>
      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm my-2">
        <div className="flex items-center space-x-3">
          <img
            src={src}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-gray-800">{name}</p>
          </div>
        </div>
        <div>
          <p className={`font-bold ${amountColor}`}>
            {amount > 0 ? "+" : ""}
            {formattedAmount}
          </p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </main>
  );
}

export function Bills({ h2, amount }) {
  return (
    <main>
      <article className="border-l-4 border-green-900 p-2 rounded-lg my-2 shadow-2xl">
        <h2 className="text-sm text-gray-500">{h2}</h2>
        <p className="font-bold  text-black text-sm">${amount}</p>
      </article>
    </main>
  );
}

export function Navigation({ img, name }) {
  return (
    <div>
      <a
        href={`#${name}`}
        className="flex flex-col  text-center space-y-1 p-2 items-center hover:text-blue-400 cursor-pointer"
      >
        {img}
        <p className="hidden md:block text-xs ">{name}</p>
      </a>
    </div>
  );
}
