export type TeamMember = "Mudassir" | "Ali" | "Saqlain" | "Asad";
export type Phase = 0 | 1 | 2 | 3 | 4;
export type Priority = "P0" | "P1" | "P2";
export type TaskStatus = "not_started" | "in_progress" | "review" | "done";
export type ContentPillar = "Problem" | "Solution" | "Trust" | "ROI" | "Education" | "Comparison";
export type SalesFunnelStage = "awareness" | "outreach" | "demo" | "pilot" | "close";

export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: TeamMember;
  coOwner?: TeamMember;
  week: number;
  day?: string;
  hours: number;
  priority: Priority;
  status: TaskStatus;
  phase: Phase;
  category: string;
  salesConnection: string;
  deliverable: string;
  funnelStage?: SalesFunnelStage;
  pillar?: ContentPillar;
  dependsOn?: string[];
}

export interface WeekData {
  week: number;
  phase: Phase;
  phaseTitle: string;
  goal: string;
  tasks: Task[];
}

export interface Milestone {
  week: number;
  metric: string;
  target: string;
}

export interface BlogPlan {
  id: string;
  title: string;
  words: number;
  week: number;
  keyword: string;
  salesFunction: string;
  pillar: ContentPillar;
  funnelStage: SalesFunnelStage;
  repurposeTo: string[];
}

export interface SalesAsset {
  id: string;
  name: string;
  type: string;
  week: number;
  assignee: TeamMember;
  purpose: string;
  status: TaskStatus;
}

export interface OutreachMetrics {
  week: number;
  sent: number;
  conversations: number;
  demos: number;
  pilots: number;
  deals: number;
  pipelineValue: string;
}

export interface KeywordTarget {
  keyword: string;
  volume: string;
  competition: string;
  angle: string;
  action: string;
  tier: 1 | 2 | 3;
}

export interface CompetitorGap {
  gap: string;
  why: string;
}

export interface PlatformStrategy {
  platform: string;
  priority: string;
  canBringClients: string;
  weeklyHours: string;
  timeToResults: string;
  action: string;
}

export interface ToolSetup {
  tool: string;
  cost: string;
  purpose: string;
  owner: TeamMember;
  week: number;
}

export interface InfluencerTarget {
  name: string;
  platform: string;
  role: string;
  why: string;
}
