import { FaMoneyBillWave, FaTruck, FaQrcode, FaShoppingBasket } from "react-icons/fa";
import { useMemo } from "react"; // useMemo ko import karna zaroori hai
import useOrders from "../../utils/useOrders";
import useProducts from "../../utils/useProducts"; // useProducts hook ko import kiya


export default function DashboardCards() {

    const { orders, loading: ordersLoading, error: ordersError } = useOrders(); // useOrders se data
    const { products, loading: productsLoading, error: productsError } = useProducts(); // useProducts se data, error variable ka naam change kiya

    const companyMetrics = useMemo(() => {
        let totalCompanyRevenue = 0;
        let numberOfOrders = 0;

        if (orders && Array.isArray(orders)) {
            numberOfOrders = orders.length;

            orders.forEach(order => {
                if (typeof order.total === 'number') {
                    totalCompanyRevenue += order.total;
                }
            });
        }

        return { totalCompanyRevenue, numberOfOrders };
    }, [orders]); // orders array badalne par recalculate hoga

    const totalProducts = useMemo(() => {
        return products && Array.isArray(products) ? products.length : 0; // Products array ki length count karega
    }, [products]); // products array badalne par recalculate hoga

    const stats = [
        {
            title: "Revenue",
            // Loading state aur formatting ke saath
            value: ordersLoading ? "Loading..." : `$${companyMetrics.totalCompanyRevenue.toLocaleString()}`,
            subtitle: "Shipping fees are not included",
            icon: <FaMoneyBillWave className="text-blue-600 text-lg" />,
            bg: "bg-blue-100",
        },
        {
            title: "Orders",
            // Loading state ke saath
            value: ordersLoading ? "Loading..." : companyMetrics.numberOfOrders.toLocaleString(),
            subtitle: "Excluding orders in transit",
            icon: <FaTruck className="text-green-600 text-lg" />,
            bg: "bg-green-100",
        },
        {
            title: "Products",
            // Loading state ke saath
            value: productsLoading ? "Loading..." : totalProducts.toLocaleString(),
            subtitle: "In 4 Categories",
            icon: <FaQrcode className="text-yellow-600 text-lg" />,
            bg: "bg-yellow-100",
        },
        {
            title: "Monthly Earning",
            // Ye value abhi bhi hardcoded hai, agar aap isko bhi calculate karna chahte hain toh logic provide karein
            value: "$6,982",
            subtitle: "Based in your local time.",
            icon: <FaShoppingBasket className="text-cyan-600 text-lg" />,
            bg: "bg-cyan-100",
        },
    ];

    // Optional: Agar koi error ho toh dikhane ke liye
    if (ordersError || productsError) {
      return <div className="text-red-500 text-center py-6">Error loading data.</div>;
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
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