function whatToDoForLunch(hungry, availableTime) {
  if (hungry && availableTime < 20) {
    return "You are hungry and have less than 20 minutes. It's a good time to pick up a snack or grab something you have ready at home.";
  } else if (hungry && availableTime >= 20 && availableTime <= 30) {
    return "You are hungry and have between 20 and 30 minutes. You deserve a break! Take time to cook a tasty meal.";
  } else if (hungry && availableTime > 30) {
    return "You are hungry and have more than 30 minutes. This is an intense program, so you should probably reconsider your break and focus on your work.";
  } else if (!hungry && availableTime < 20) {
    return "You are not hungry, but you have less than 20 minutes. It's a good time to relax and take a short break.";
  } else if (!hungry && availableTime >= 20 && availableTime <= 30) {
    return "You are not hungry, but you have between 20 and 30 minutes. You can take a break and cook a quick and easy meal if you'd like.";
  } else {
    return "You are not hungry, and you have more than 30 minutes. It's a great time to focus on your work and make progress!";
  }
}
