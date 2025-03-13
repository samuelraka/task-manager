import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 p-4">
        <h2 className="font-bold text-xl mb-4">Dashboard</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Latest Tasks</h3>
          {/* Display latest tasks here */}
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Projects/Categories</h3>
          {/* Display projects and their status here */}
        </div>
        <div>
          <input type="text" placeholder="Search Tasks/Projects" className="border rounded p-2 w-full" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <h1 className="text-2xl font-bold ml-2">Task Manager</h1>
          </div>
          <div>
            <Link to="/profile" className="mr-4">Profile</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </header>

        {/* Navigation Bar */}
        <nav className="mb-4">
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <Link to="/projects" className="mr-4">Projects</Link>
          <Link to="/tasks" className="mr-4">Tasks</Link>
          <Link to="/calendar" className="mr-4">Calendar</Link>
          <Link to="/reports" className="mr-4">Reports</Link>
          <Link to="/settings">Settings</Link>
        </nav>

        {/* Task Overview Section */}
        <section>
          <h2 className="font-semibold text-xl mb-2">Task Overview</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Task Statistics Summary</h3>
              {/* Display task statistics here */}
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">New Task Notifications</h3>
              {/* Display notifications here */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
