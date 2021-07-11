import User from "../Components/User";

function users({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}

export default users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { props: { users } };
}
