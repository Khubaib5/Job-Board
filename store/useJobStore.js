import { create } from "zustand";

const useJobStore = create((set) => ({
  filteredJobs: [],
  setFilteredJobs: (jobs) => set({ filteredJobs: jobs }),
}));

export default useJobStore;