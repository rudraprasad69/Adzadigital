"use client"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const weeklyData = [
  { week: "W1", bookings: 42, revenue: 820, ads: 310 },
  { week: "W2", bookings: 58, revenue: 1120, ads: 420 },
  { week: "W3", bookings: 71, revenue: 1410, ads: 510 },
  { week: "W4", bookings: 65, revenue: 1320, ads: 475 },
]

const channelData = [
  { name: "Instagram", value: 38 },
  { name: "Google Ads", value: 27 },
  { name: "TikTok", value: 19 },
  { name: "Referrals", value: 16 },
]

const COLORS = ["hsl(var(--brand-1))", "hsl(var(--brand-2))", "hsl(var(--accent-1))", "hsl(var(--accent-2))"]

export default function DashboardCharts() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-4 bg-card shadow-md ring-1 ring-white/10 interactive">
        <h3 className="font-semibold mb-3">Bookings & Revenue</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bookings" stroke="hsl(var(--brand-1))" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--accent-2))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl p-4 bg-card shadow-md ring-1 ring-white/10 interactive">
          <h3 className="font-semibold mb-3">Ad Performance</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ads" fill="hsl(var(--brand-2))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl p-4 bg-card shadow-md ring-1 ring-white/10 interactive">
          <h3 className="font-semibold mb-3">Channel Split</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={channelData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {channelData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
