import s from "./Profile.module.css";

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
    <div className={s.profile}>
      <div className={s.data}>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.userInfo}>@{tag}</p>
        <p className={s.userInfo}>{location}</p>
      </div>

      <ul className={s.list}>
        {stats.map(({ label, value }) => {
          return (
            <li key={label} className={s.item}>
              <span className={s.label}>{label}</span>
              <span className={s.span}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
