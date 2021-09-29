export const validateCloseDate = (openDate, closeDate, setCloseDateError) => {
  if (closeDate < openDate) {
    setCloseDateError('Close date cannot be earlier than open date');
    return false;
  }
  return true;
};
