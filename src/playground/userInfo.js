const user = {
  name: "Andrew",
  age: 17,
  location: "Salt Lake",
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
