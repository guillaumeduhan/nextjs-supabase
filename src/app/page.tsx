import { permit } from "@/lib/permit";

export const dynamic = 'force-dynamic';

const getUsers = async () => {
  const result = await permit.api.listUsers()
  return result
}

export default async function Home() {
  const users = await getUsers();

  return <div className="container grid gap-6 my-12 mx-auto max-w-[1000px]">
    <header className="grid gap-2">
      <h1>List of users</h1>
      <p>Here is a list of users coming from Permit.</p>
    </header>
    <div>
      <ul>
        {users?.map((user: any, key: number) => <li className="flex gap-2" key={key}>
          <span>{user.email}</span>
          <div>
            {user.roles?.map((obj: any, roleKey: number) =>
              <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full" key={roleKey}>{obj.role}</span>
            )}
          </div>
        </li>)}
      </ul>
    </div>
    <footer>
      <button>+ Add a new user</button>
    </footer>
  </div>
}
