# Next.js Server Actions

Server Actions in Next.js allow you to run server-side code directly in your application without needing an external API route. This feature simplifies backend tasks, letting you handle form submissions, interact with databases, and run sensitive server-side code securely.

---

## Table of Contents

1. [What are Server Actions?](#what-are-server-actions)
2. [Setting Up a Server Action](#setting-up-a-server-action)
3. [Example Server Action: Handling a Form Submission](#example-server-action-handling-a-form-submission)
4. [Integrating Server Actions with Client Components](#integrating-server-actions-with-client-components)

---

## What are Server Actions?

Server Actions in Next.js provide a way to execute server-side code directly from your components without setting up API routes. This approach is ideal for:

1. **Form Submissions**: Easily handle form data submission without creating separate API routes.
2. **Database Interactions**: Perform operations such as adding, reading, or updating records.
3. **Sensitive Logic**: Keep server-only logic (e.g., secret keys, sensitive data processing) hidden from the client.

With Server Actions, you can build, import, and use server-side functions wherever needed in your components.

---

## Setting Up a Server Action

In Next.js, Server Actions can be created by defining functions in server components (or files using `"use server"`), which ensures they only run on the server. You can then call these actions directly from your client components.

### Key Points:

- **Server-Only Code**: Functions in a server action run exclusively on the server.
- **Direct Client Interaction**: Server actions are called directly from client components without needing an API route.

---

## Example: Handling a Form Submission with Server Actions

In this example, we’ll create a server action to handle a form submission. The form will collect user data (name and address) and send it to a server action that logs the information and writes it to a file.

### File Structure

1. **Server Action**: Define the server action in `form.js`.
2. **Client Component**: Use the server action in a form component in `page.js`.

---

### Step 1: Define the Server Action (`form.js`)

```javascript
// form.js
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
```

### Explanation:

- Data Handling: The` submitAction` function accepts `formData` and retrieves `name` and `address` fields.

- File Writing: It writes the form data to `data.txt` using `fs.writeFile` with an append flag `({ flag: "a" })` to add data without overwriting.

- Return Response: Returns a success message after completing the operation.

### Step 2: USe the Server Action in a Client Component (`page.js`)

```javascript
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
```

## Explanation:

- Client-Side Action: This form uses a client-side action (`submitAction`) upon submission.

- Form Reset: After submission, `formRef.current.reset()` clears the form fields.

- Form Data Submission: When the submit button is clicked, `submitAction` sends form data (`name` and `address`) to be handled on the server.

## How it works - 

- User Fills Form: The user enters their name and address.

- Form Submission: On form submission, `submitAction`is called, and form data is sent to the server for processing.

- Server Logs Data: The server action logs the data and appends it to `data.txt`.

- Form Reset: The form is reset on the client side after submission.


## Summary: 

- Using Server Actions in Next.js allows you to handle backend tasks without creating API routes, making it easier to handle sensitive data and form submissions directly from client components.

- This example demonstrates:

1. How to define a server action in `form.js`.

2. How to call the server action from a client component in `page.js`.

3. How to handle form data securely and write it to a file on the server