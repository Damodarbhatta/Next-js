"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { DbData } from "@/app/dashboard/page";
interface formType {
  data: DbData;
}
function Data({ data }: formType) {
  const [myData, setData] = useState(data);
  const [isEditable, setIsEditable] = useState(false)
   const handleInputChange =(field : keyof DbData,  value : string) => {
    setData({...myData, [field] : value})
   }
   const handleEditToggle = () => {
    setIsEditable(!isEditable )
   }
   const handleSave  = async () => {
        await fetch("/api/handlecontact",{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(myData)
        })
        handleEditToggle();
   }
   const handleDelete = async () => {
    const response = await fetch("/api/handlecontact",{
      method : "DELETE",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(myData)
    })
  };

  return (
    <div>
      <div className="my-2 border-2 ">
        <label htmlFor="">Name : </label>
        <Input
          className=""
          value={myData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          readOnly={!isEditable}
        />
        <label htmlFor="">Email : </label>
        <Input
          className=""
          type="email"
          value={myData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          readOnly={!isEditable}
        />
        <label htmlFor="">Message : </label>
        <Input
          className=""
          value={myData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          readOnly={!isEditable}
        />
        <Button
          onClick={() => {
            if (isEditable) {
              handleSave();
            } else {
              handleEditToggle();
            }
          }}
        >
          {isEditable ? "Save" : "Edit"}
        </Button>
        <Button
        className="active: bg-green-600"
          onClick={() => handleDelete()}
          >
          Delete
        </Button>
       
      </div>
    </div>
  );
}

export default Data;
