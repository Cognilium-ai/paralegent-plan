// ============================================================
// DAILY TASK PLAN — Saqlain + Asad — Day by Day
// Starting Monday April 6, 2026
// Each person works 9 hours/day
// TO BE REDESIGNED
// ============================================================

export interface DayTask {
  id: string;
  title: string;
  description: string;
  hours: number;
  category: string;
  deliverable: string;
  dependsOn?: string;
}

export interface DayPlan {
  date: string;
  dayLabel: string;
  week: number;
  saqlain: DayTask[];
  asad: DayTask[];
}

export const dailyPlan: DayPlan[] = [];
