export const Damageable = (health) => {
  return {
    health: health,
    takeDamage(amount) {
      this.health -= amount;
      if (this.health <= 0) {
        this.health = 0;
        this.onDeath();
      }
    },
    onDeath() {
      console.log("Damageable object has died.");
    },
  };
};
