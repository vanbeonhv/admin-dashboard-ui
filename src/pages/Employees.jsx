import React from "react";
import { studentsData } from "../data/dummy";
const Employees = () => {
  return (
    <div>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <div>
          <p className="text-lg text-gray-400">Page</p>
          <h3 className="text-3xl font-bold tracking-tight">Employees</h3>
        </div>
        <div>
          <div className="mt-10">
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Test</th>
                  <th>Test</th>
                  <th>Test</th>
                </tr>
              </thead>
              <tbody>
                {studentsData.map((student, index) => (
                  <tr key={index}>
                    <td>{student.StudentID}</td>
                    <td className="flex gap-1 items-center">
                      <img
                        src={`${student.StudentImage}`}
                        alt="studentAvatar"
                        className="w-10 h-10 rounded-full"
                      />
                      {student.Name}
                    </td>
                    <td>{student.Title}</td>
                    <td>{student.HireDate}</td>
                    <td>{student.Country}</td>
                    <td>{student.ReportsTo}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
