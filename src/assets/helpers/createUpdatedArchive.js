export const createUpdatedArchive = (archive, positionToHistory) => {
  const updatedArchive = [...archive];
  updatedArchive.push(positionToHistory);
  return updatedArchive;
};
