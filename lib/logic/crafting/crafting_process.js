export class CraftingProcess {
  startTime
  durationInMinutes
  outputMaterials

  constructor(startTime, durationInMinutes, outputMaterials) {
    this.startTime = startTime
    this.durationInMinutes = durationInMinutes
    this.outputMaterials = outputMaterials
  }

  getRemainingDuration = (currentTime) => {
    const passedTime = currentTime - this.startTime
    const remainingDur = this.durationInMinutes - passedTime

    return remainingDur
  }

  onFinish = () => {
    return this.outputMaterials
  }
}
