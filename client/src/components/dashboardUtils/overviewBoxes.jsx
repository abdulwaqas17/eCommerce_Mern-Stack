import { FaMoneyBillWave, FaTruck, FaQrcode, FaShoppingBasket } from "react-icons/fa";

const stats = [
  {
    title: "Revenue",
    value: "$13,456.5",
    subtitle: "Shipping fees are not included",
    icon: <FaMoneyBillWave className="text-blue-600 text-lg" />,
    bg: "bg-blue-100",
  },
  {
    title: "Orders",
    value: "53.668",
    subtitle: "Excluding orders in transit",
    icon: <FaTruck className="text-green-600 text-lg" />,
    bg: "bg-green-100",
  },
  {
    title: "Products",
    value: "9.856",
    subtitle: "In 19 Categories",
    icon: <FaQrcode className="text-yellow-600 text-lg" />,
    bg: "bg-yellow-100",
  },
  {
    title: "Monthly Earning",
    value: "$6,982",
    subtitle: "Based in your local time.",
    icon: <FaShoppingBasket className="text-cyan-600 text-lg" />,
    bg: "bg-cyan-100",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-4">
          <div className="flex items-start gap-4">
            <div className={`p-2 rounded-full ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <h6 className="text-sm font-semibold text-gray-700">{stat.title}</h6>
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500">{stat.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
