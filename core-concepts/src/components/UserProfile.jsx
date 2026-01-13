export const UserProfile = () => {
  const userName = "Robin";
  const profile = "Web Developer";
  const yearsOfExperience = 8;
  const isAvailable = true;
  return (
    <>
      <h2>{userName}</h2>
      <p>
        {profile} with {yearsOfExperience} years of experience
      </p>
      <p>Started in : {2026 - yearsOfExperience}</p>
      <p>Status {isAvailable ? "Available for hire" : "Not available"}</p>
      <p>Contact : {userName.toLowerCase().replace(" ", ".")}@email.com</p>
    </>
  );
};
