// page.js
"use client"; // to run this code on the client side
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  const formRef = useRef();

  return (
    <div className="w-2/3 mx-auto my-12">
      <form
        ref={formRef}
        action={(e) => {
          submitAction(e);
          formRef.current.reset(); // Clear the form after submission
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black" type="text" />
        </div>
        <div>
          <button type="submit" className="border border-white px-3">Submit</button>
        </div>
      </form>
    </div>
  );
}
