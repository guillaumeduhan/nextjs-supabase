import { permit } from "@/lib/permit";

export default async function AddNewUser() {
  async function create(formData: any) {
    'use server';
    const { email } = Object.fromEntries(formData.entries());

    // Create a new user
    const response = await permit.api.createUser({
      key: email,
      email,
    })

    return response;
  }

  return <div className="container grid gap-6 my-12 mx-auto max-w-[1000px]">
    <header className="grid gap-2">
      <h1>Add a new user to Permit.io.</h1>
      <p>Here is a a form to add a new user to Permit.</p>
    </header>
    <form action={create} className="grid gap-4">
      <input type="email" name="email" />
      <div>
        <button type="submit">Save new user</button>
      </div>
    </form>
  </div>
}
