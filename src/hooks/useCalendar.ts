'use client';
import { generateCalendarWeeks } from '@/utils/generateCalendarWeeks';
import { useState } from 'react';

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const weeks = generateCalendarWeeks(year, month);

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return { year, month, weeks, goToPrevMonth, goToNextMonth, setCurrentDate };
};
