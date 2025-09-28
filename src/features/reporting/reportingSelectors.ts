// import { createSelector } from '@reduxjs/toolkit';
// import { RootState } from '@/app/store';

// const selectParticipants = (state: RootState) => state.reporting.currentReport?.participants ||;

// export const selectHighPerformingParticipants = createSelector(
//   [selectParticipants],
//   (participants) => participants.filter(p => p.accuracy > 90)
// );

// export const selectAverageAccuracy = createSelector(
//   [selectParticipants],
//   (participants) => {
//     if (participants.length === 0) return 0;
//     const totalAccuracy = participants.reduce((sum, p) => sum + p.accuracy, 0);
//     return totalAccuracy / participants.length;
//   }
// );