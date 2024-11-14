"use server"
import fs from "fs/promises";

export const submitAction = async (formData) => {
  // Access form data fields
  const name = formData.get("name");
  const address = formData.get("add");
  
  // Log data for server debugging
  console.log("Form Data Submitted:", name, address);
  
  // Write data to a file (for demonstration)
  await fs.writeFile("data.txt", `Name: ${name}, Address: ${address}\n`, { flag: "a" });

  return { success: true, message: "Data successfully written to file!" };
};