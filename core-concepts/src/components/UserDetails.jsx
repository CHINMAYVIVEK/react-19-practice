export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNewUser,
  role,
}) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  let roleBadge = null;
  if (role === "admin") {
    roleBadge = <span>Admin</span>;
  } else if (role === "moderator") {
    roleBadge = <span>Moderator</span>;
  } else if (role === "vip") {
    roleBadge = <span>VIP</span>;
  }

  // if (isOnline) {
  //   return (
  //     <div>
  //       <h3>{name}</h3>
  //       <span>Online </span>
  //       <p>Available for chat</p>
  //       <button>Send Message</button>
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     <h3>{name}</h3>
  //     <span>Offnline </span>
  //     <p>Not Available</p>
  //     <small>Check back later</small>
  //   </div>
  // );
  //
  return (
    <div>
      <h3>
        {name}
        {isPremium && <span> ⭐ </span>}
        {isNewUser && <span> 🎉 </span>}
        {roleBadge}
      </h3>
      <span>{isOnline ? "🟢 Online" : "Offnline"} </span>
      <p>{isOnline ? "✉️ Available for chat" : "Not Available"}</p>
      {isOnline ? (
        <button>Send Message</button>
      ) : (
        <small>Check back later</small>
      )}
    </div>
  );
};
