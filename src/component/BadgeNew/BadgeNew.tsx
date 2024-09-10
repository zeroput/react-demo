import './BadgeNew.css'
function Badge({ name, handle, img }) {
  return (
    <div className="badge">
      <img alt={name} src={img} />
      <div>
        <h4>{name}</h4>
        <p>{handle}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      name="Tom Jerry"
      handle="What time is it now?"
      img = "https://halo-gemini.oss-cn-hangzhou.aliyuncs.com/blog/time-watch.jpg"
    />
  );
}
