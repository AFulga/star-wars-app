function createSlug(str) {
  return str.trim().toLowerCase().replace(/\s/g, '-');
}

export { createSlug };

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
