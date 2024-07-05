const truncateInstructions = (instructions: string, maxLength = 200) => {
  return instructions.length > maxLength ? `${instructions.slice(0, maxLength)}...` : instructions
}

export default truncateInstructions
