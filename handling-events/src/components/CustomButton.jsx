export const CustomButton = ({ text }) => {
  const name = "User";

  const handleClick = (e) => {
    console.log(`Hey ${name}, you hit ${text}`);
    console.log("Clicked element", e.target);
    console.log("Clicked coordinates", e.clientX, e.clientY);
    console.log("Which mouse button", e.button);
    alert("Thanks for liking");
  };
  return <button onClick={handleClick}>{text}</button>;

  // return <button onClick={() => alert("Thanks for liking")}>Like</button>;
};
