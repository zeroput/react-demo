import './BadgeNew.css'

// return each element by function 
function Avatar({name, imgUrl}) {
  return <img src={imgUrl} alt={name} />;
}

function Name( {name}) {
  return <h4>{name}</h4>;
}

function Handle({handle}) {
  return <p>@{handle}</p>;
}

function Badge({user, style, addFriend}) {
  return (
    <div style={style}>
      <Avatar name={user.name} 
      imgUrl={user.img} />
      <div>
        <Name name={user.name} />
        <Handle handle={user.handle} />
        <button onClick={addFriend}>Add Friend</button>
      </div>
    </div>
  );
}



export default function App() {
  return (
    <Badge
      user={{
        name: "Lynn Fisher",
        img: "https://avatars.githubusercontent.com/u/871315",
        handle: "hello world"
      }}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid var(--beige-10)",
        borderRadius: 8,
        backgroundColor: "grey",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center"
      }}
      addFriend={() => alert("Added!")}
    />
  );
}