"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Data from "@/components/Data";

// Defining the type for the data received from the database
export interface DbData {
  _id: string;
  name: string;
  email: string;
  message: string;
};


function Page() {
  const [dbData, setDbData] = useState<DbData[]>([]);

  useEffect(() => {
    getDataFromServer();
    // Removed dbData from dependencies to avoid infinite loop
    // If you need to refetch data under certain conditions, consider adding those conditions to this array
  }, [dbData]);

  const getDataFromServer = async () => {
    const response = await fetch('/api/handlecontact');
    if (!response.ok) {
      console.error("An error occurred while fetching data");
      return; // Adding return to prevent further execution in case of an error
    }
    const data = await response.json();
    setDbData(data);
  };

 

  return (
    <div>
      {dbData.map((eachdata: DbData) => (
        <div key={eachdata._id}>
          <Data data={eachdata} />
        </div>
      ))}
     
    </div>
  );
};

export default Page;
