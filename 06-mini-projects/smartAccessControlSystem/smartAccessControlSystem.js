// let isLoggedIn = true;
// let isBlocked = false;
// let isAdmin = true;
// let hasSubscription = true;
// let isVerified = true;

// let accessAllowed =
//   isLoggedIn && !isBlocked && isVerified && (hasSubscription || isAdmin);
// console.log(accessAllowed);

function canAccessSystem(user) {
  return (
    user.isLoggedIn &&
    !user.isBlocked &&
    user.isVerified &&
    (user.hasSubscription || user.isAdmin)
  );
}

const user1 = {
  isLoggedIn: true,
  isBlocked: false,
  isAdmin: false,
  hasSubscription: true,
  isVerified: true,
};

console.log(canAccessSystem(user1));
