import React, { useMemo } from 'react';

export const useFormatDate = (dateIn: string) => {
  
  const formatDate = useMemo(() => {
    const newDate = new Date(dateIn);
    return newDate.toLocaleDateString("ru-RU");
  }, [dateIn])

  return formatDate;
}