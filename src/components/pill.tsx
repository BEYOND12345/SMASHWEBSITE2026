import React from 'react';
import { JobStatus } from '../../types';

interface PillProps {
  status: JobStatus;
}

export const Pill: React.FC<PillProps> = ({ status }) => {
  const styles = {
    [JobStatus.DRAFT]: "bg-gray-100 text-gray-500",
    [JobStatus.SENT]: "bg-blue-50 text-blue-600",
    [JobStatus.APPROVED]: "bg-white border border-accent text-accentText",
    [JobStatus.PAID]: "bg-violet-50 text-violet-600",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${styles[status] || styles[JobStatus.DRAFT]}`}>
      {status}
    </span>
  );
};