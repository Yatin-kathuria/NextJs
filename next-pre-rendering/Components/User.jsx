function User({ user }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <hr />
    </div>
  );
}

export default User;
