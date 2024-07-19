export class CraftingProcess {
  startTime;
  duration;
  outputMaterials;

  constructor(startTime, duration, outputMaterials) {
    this.startTime = startTime;
    this.duration = duration;
    this.outputMaterials = outputMaterials;
  }

  getRemainingDuration = (currentTime) => {
    const passedTime = currentTime - this.startTime;
    const remainingDur = this.duration - passedTime;
    
    return remainingDur;
  };

  onFinish = () => {
    return this.outputMaterials;
  };
}
