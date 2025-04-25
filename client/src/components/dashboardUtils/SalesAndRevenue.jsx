import React from "react";

const SalesAndRevenue = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      {/* Left Column (XL: span 2) */}
      <div className="xl:col-span-2 space-y-4">
        {/* Sale Statistics */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h5 className="text-xl font-semibold mb-4">Sale statistics</h5>
          <canvas id="myChart" height="265" className="w-full h-[265px]" />
        </div>

        {/* New Members & Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* New Members */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <h5 className="text-xl font-semibold mb-4">New Members</h5>
            {["Patric Adams", "Dilan Specter", "Tomas Baker"].map((name, idx) => (
              <div key={idx} className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src={`assets/imgs/people/avatar${idx + 2}.jpg`} alt="" className="w-12 h-12 rounded-full" />
                  <div>
                    <h6 className="font-medium">{name}</h6>
                    <p className="text-gray-500 text-sm">Sanfrancisco</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:underline text-sm">+ Add</button>
              </div>
            ))}
          </div>

          {/* Recent Activities */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <h5 className="text-xl font-semibold mb-4">Recent activities</h5>
            <ul className="space-y-4 text-sm">
              {[
                { date: "Today", text: "Lorem ipsum dolor sit amet consectetur" },
                { date: "17 May", text: "Debitis nesciunt voluptatum dicta reprehenderit", active: true },
                { date: "13 May", text: "Accusamus voluptatibus voluptas." },
                { date: "05 April", text: "At vero eos et accusamus et iusto odio dignissi" },
                { date: "26 Mar", text: "Responded to need “Volunteer Activities" },
              ].map((item, index) => (
                <li key={index} className={`flex items-start gap-4 ${item.active ? "font-bold text-brand" : ""}`}>
                  <span className="text-2xl text-blue-500">▶️</span>
                  <div>
                    <h6 className="font-semibold">{item.date}</h6>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {/* Revenue Chart */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h5 className="text-xl font-semibold mb-4">Revenue Base on Area</h5>
          <canvas id="myChart2" height="215" className="w-full h-[215px]" />
        </div>

        {/* Marketing Channel */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h5 className="text-xl font-semibold mb-4">Marketing Chanel</h5>
          {[
            { name: "Facebook", percent: 15 },
            { name: "Instagram", percent: 65 },
            { name: "Google", percent: 51 },
            { name: "Twitter", percent: 80 },
            { name: "Other", percent: 80 },
          ].map((item, i) => (
            <div key={i} className="mb-3">
              <span className="text-gray-500 text-sm">{item.name}</span>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
              <p className="text-right text-sm text-gray-600">{item.percent}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesAndRevenue;
