export const Buildable = (health, maxHealth) => {
  return {
    health: health,
    repair(amount) {
      this.health += amount;
      if (health >= maxHealth) {
        health = maxHealth;
        onBuilt();
      }
    },
    onBuilt() {
      console.log("Buildable object has been built.");
    },
  };
};
