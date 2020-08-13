const formatDate = (date: Date): string => {
  const parsedDate = date.toString();

  const splitedDate = parsedDate.split(' ');

  const month = splitedDate[1];
  const day = splitedDate[2];

  let translatedMonth;

  switch (month) {
    case 'Jan':
      translatedMonth = 'janeiro';
      break;
    case 'Feb':
      translatedMonth = 'fevereiro';
      break;
    case 'Mar':
      translatedMonth = 'março';
      break;
    case 'Apr':
      translatedMonth = 'abril';
      break;
    case 'May':
      translatedMonth = 'maio';
      break;
    case 'June':
      translatedMonth = 'junho';
      break;
    case 'July':
      translatedMonth = 'julho';
      break;
    case 'Aug':
      translatedMonth = 'agosto';
      break;
    case 'Sept':
      translatedMonth = 'setembro';
      break;
    case 'Oct':
      translatedMonth = 'outubro';
      break;
    case 'Nov':
      translatedMonth = 'novembro';
      break;
    default:
      translatedMonth = 'dezembro';
  }

  return `${day} de ${translatedMonth}`;
};

export default formatDate;
