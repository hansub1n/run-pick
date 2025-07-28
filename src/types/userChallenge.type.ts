export type UserChallnege = {
  challenge_id: number;
  start_date: string;
  end_date: string;
  status: Status;
  progress_km: number;
  run_count: number;
  completed_at: null | string;
};

export type Status = 'in_progress' | 'completed' | 'expired';
