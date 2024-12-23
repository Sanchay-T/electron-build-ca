import React, { useState } from 'react';
import { LayoutDashboard, Files, Bell, Search, Sun, Moon } from 'lucide-react';
import ReportGenerator from "./report";
import { cn } from "../lib/utils";
import logo from "../data/assets/logo.png";
import Graph, { ReportChart } from "../components/Elements/chartComponent";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [chartViewType, setChartViewType] = useState("daily");
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [recentReports, setRecentReports] = useState([
    { id: 1, date: '13-12-2024', caseId: 'ATS_unit_1_00008', reportName: 'Report_ATS_unit_1_00008', status: 'Completed' },
    { id: 2, date: '13-12-2024', caseId: 'ATS_unit_1_00007', reportName: 'Report_ATS_unit_1_00007', status: 'In Progress' },
    { id: 3, date: '12-12-2024', caseId: 'ATS_unit_1_00003', reportName: 'Report_ATS_unit_1_00003', status: 'Completed' },
    { id: 4, date: '12-12-2024', caseId: 'ATS_unit_1_00002', reportName: 'Report_ATS_unit_1_00002', status: 'Under Review' },
    { id: 5, date: '12-12-2024', caseId: 'ATS_unit_1_00001', reportName: 'Report_ATS_unit_1_00001', status: 'Completed' }
  ]);

  const dummyChartData = {
    daily: [
      { label: "Mon", value: 10 },
      { label: "Tue", value: 15 },
      { label: "Wed", value: 8 },
      { label: "Thu", value: 12 },
      { label: "Fri", value: 20 },
    ],
    monthly: [
      { label: "Jan", value: 45 },
      { label: "Feb", value: 52 },
      { label: "Mar", value: 38 },
      { label: "Apr", value: 42 },
      { label: "May", value: 55 },
    ]
  };

  const stats = {
    totalReports: 1234,
    monthlyReports: 156,
    totalStatements: 5678
  };

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, id: 'Dashboard' },
    { name: 'Generate Report', icon: Files, id: 'report' }
  ];

  const handleAddReport = (id) => {
    console.log('Adding report:', id);
  };

  const handleDeleteReport = (id) => {
    setRecentReports(recentReports.filter(report => report.id !== id));
  };

  const StatusBadge = ({ status }) => {
    const colors = {
      'Completed': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
      'In Progress': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
      'Under Review': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[status]}`}>
        {status}
      </span>
    );
  };

  const StatsCard = ({ title, value, icon: Icon }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</p>
          <h3 className="text-2xl font-bold dark:text-white">{value.toLocaleString()}</h3>
        </div>
        <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900 flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-500 dark:text-blue-300" />
        </div>
      </div>
    </div>
  );

  const notifications = [
    { id: 1, message: 'You have a new message.' },
    { id: 2, message: 'Your report is ready to download.' },
    { id: 3, message: 'New comment on your post.' },
  ];

  const DashboardContent = () => (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Dashboard Overview
        </h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search reports..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                     text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                     text-gray-600 dark:text-gray-300"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-14 mt-48 w-64 bg-white dark:bg-gray-800 
                          border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
              <ul className="max-h-60 overflow-y-auto p-2 space-y-2">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 
                             dark:hover:bg-gray-700 rounded-lg"
                  >
                    {notification.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Reports" value={stats.totalReports} icon={Files} />
        <StatsCard title="Monthly Reports" value={stats.monthlyReports} icon={LayoutDashboard} />
        <StatsCard title="Total Statements" value={stats.totalStatements} icon={Files} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Recent Reports</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b dark:border-gray-700">
                <th className="pb-4">Date</th>
                <th className="pb-4">Case ID</th>
                <th className="pb-4">Report Name</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.id} className="border-b dark:border-gray-700 last:border-b-0">
                  <td className="py-4 dark:text-gray-300">{report.date}</td>
                  <td className="py-4 dark:text-gray-300">{report.caseId}</td>
                  <td className="py-4 dark:text-gray-300">{report.reportName}</td>
                  <td className="py-4">
                    <StatusBadge status={report.status} />
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAddReport(report.id)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDeleteReport(report.id)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ReportChart chartData={dummyChartData} viewType={chartViewType} />
    </div>
  );

  return (
    <div className={cn(
      "flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100",
      darkMode && "dark"
    )}>
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="h-16 flex items-center px-6 border-b dark:border-gray-700">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors",
                activeTab === item.id
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
          {activeTab === 'Dashboard' ? <DashboardContent /> : <ReportGenerator />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;