export default function Login() {
  return <form action="/auth/login" method="post">
    <label htmlFor="email">Email</label>
    <input value="test@gmail.com" name="email" />
    <label htmlFor="password">Password</label>
    <input value="testsix" type="password" name="password" />
    <button>Sign in</button>
  </form>;
}