import React from "react";
import { studentsData } from "../data/dummy";
import { useState } from "react";

const Employees = () => {
  const [posts, setPosts] = useState(studentsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);
  return (
    <div>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <div>
          <p className="text-lg text-gray-400">Page</p>
          <h3 className="text-3xl font-bold tracking-tight">Employees</h3>
        </div>
        <div>
          <div className="mt-10 overflow-y-auto w-full">
            <table className="table-auto border">
              <thead className="text-xs text-gray-500 border-b text-center ">
                <tr className=" ">
                  <th className="font-normal px-5 py-3 font-roboto">Name</th>
                  <th className="font-normal px-5 py-3 font-roboto">
                    Student Code
                  </th>
                  <th className="font-normal px-5 py-3 font-roboto">School</th>
                  <th className="font-normal px-5 py-3 font-roboto">Class</th>
                  <th className="font-normal px-5 py-3 font-roboto">
                    Registration Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((student, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 active:bg-gray-300 "
                  >
                    <td className="flex gap-1 items-center px-3 py-2 text-13 ">
                      <img
                        src={`${student.StudentImage}`}
                        alt="studentAvatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="pr-5">{student.Name}</p>
                    </td>
                    <td className="px-3 py-2 text-13 text-center">
                      {student.StudentID}
                    </td>
                    <td className="px-3 py-2 text-13 text-center">
                      {student.Title}
                    </td>
                    <td className="px-3 py-2 text-13 text-center">
                      {student.Country}
                    </td>
                    <td className="px-3 py-2 text-13 text-center">
                      {student.HireDate}
                    </td>
                    <td className="px-3 py-2 text-13 text-center"></td>
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
