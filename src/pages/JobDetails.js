import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../features/job/jobapi";

const JobDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const {data,isLoading,isError} = useGetJobByIdQuery(id)

  return (
    <div className='pt-14'>
      <h1>{data?.data?.position}</h1>
      <button className='border'>Apply</button>
    </div>
  );
};

export default JobDetails;
