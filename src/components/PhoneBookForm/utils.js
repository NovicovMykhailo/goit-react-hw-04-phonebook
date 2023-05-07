export default function formatPhoneNumber(phoneNumber) {
  const cleanNum = phoneNumber.toString().replace(/\D/g, '');
  const match = cleanNum.match(/^(\d{3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (match) {
    return (
      '' +
      match[1] +
      ' ' +
      (match[2] ? match[2] + '-' : '') +
      (match[3] ? match[3] + '-' : '') +
      match[4]
    );
  }
  return cleanNum;
}
