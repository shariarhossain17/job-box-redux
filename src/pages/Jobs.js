import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobQuery } from "../features/job/jobapi";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobQuery();
  return (
    <div className="pt-14">
      <h1>This is job page</h1>
      <div>
        {data?.data?.map((d) => {
          return (
            <>
              <p>{d.position}</p>
              <button onClick={() => navigate(`/job-details/${d._id}`)}>
                details
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
