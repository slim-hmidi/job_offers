export const snakeToCamel = (str: string): string => str.replace(/([-_]\w)/g, word => word[1].toUpperCase());
export const camelToSnake = (str: string): string => str.split(/(?=[A-Z])/).join('_').toLowerCase();

export const timeDifference = (date: Date): string => { 
  const current = new Date();
  const msMin = 60 * 1000;
  const msHour = msMin * 60; 
  const msDay = msHour * 24;
  const msMon = msDay * 30; 
  const msYr = msDay * 365; 
  const diff = current.getTime() - date.getTime(); 

  if (diff < msMin) { 
      return 'about ' + Math.round(diff / 1000) + ' seconds ago'; 
  } else if (diff < msHour) { 
      return 'about ' + Math.round(diff / msMin) + ' minutes ago'; 
  } else if (diff < msDay) { 
      return 'about ' + Math.round(diff / msHour) + ' hours ago'; 
  } else if (diff < msMon) { 
      const value = Math.round(diff / msDay);
      return value > 1 ? value + ' days ago' : value + ' day ago'; 
  } else if (diff < msYr) { 
    const value = Math.round(diff / msMon);
      return value > 1 ? value + ' months ago' : value + ' month ago'; 
  } else { 
    const value = Math.round(diff / msYr);
      return value > 1 ? value + ' years ago' : value +  ' year ago'; 
  } 
}

export const isValidUrl = (s: string): boolean => {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
  return regexp.test(s);
}