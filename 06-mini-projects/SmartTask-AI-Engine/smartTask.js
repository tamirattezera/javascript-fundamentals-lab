function checkUserPlan(userPlan) {
  if (userPlan === "Free" || userPlan === "Pro" || userPlan === "Enterprise") {
    if (userPlan === "Free") {
      return "Limited AI Usage";
    } else if (userPlan === "Pro") {
      return "Advanced AI Usage";
    } else {
      return "Unlimited Access";
    }
  } else {
    return "Invalid plan. Please enter Free, Pro, or Enterprise.";
  }
}

console.log(checkUserPlan("Free"));
console.log(checkUserPlan("Pro"));
console.log(checkUserPlan("Enterprise"));
console.log(checkUserPlan("Basic"));

function analyzeTaskPriority(deadline, importance, hours) {
  if (deadline < 2 || importance === "high") {
    return "CRITICAL";
  } else if (importance === "medium" && hours <= 5) {
    return "NORMAL";
  } else if (importance === "medium" && hours > 5) {
    return "HIGH EFFORT TASK";
  } else {
    return "LOW PRIORITY";
  }
}

console.log(analyzeTaskPriority(1, "high", 3));
console.log(analyzeTaskPriority(5, "medium", 4));
console.log(analyzeTaskPriority(5, "medium", 10));
console.log(analyzeTaskPriority(10, "low", 2));





