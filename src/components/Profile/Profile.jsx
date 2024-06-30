export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  const stats = [
    { label: "Followers", value: followers },
    { label: "Views", value: views },
    { label: "Likes", value: likes },
  ];
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        {stats.map(({ label, value }) => {
          return (
            <li key={label}>
              <span>{label}</span>
              <span>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
