const eng = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const rus = /^[-!#$%&'*+\/0-9=?А-Я^_а-я{|}~](\.?[-!#$%&'*+\/0-9=?А-Я^_а-я`{|}~])*@[а-яА-Я0-9](-*\.?[а-яА-Я0-9])*\.[а-яА-Я](-?[а-яА-Я0-9])+$/;
export const Validator = email => {
  if (!email) return false;
  if (email.length > 254) return false;
  let valid = rus.test(email) || eng.test(email);
  if (!valid) return false;
  let parts = email.split("@");
  if (parts[0].length > 64) return false;
  let domainParts = parts[1].split(".");
  if (domainParts.some(part => part.length > 63)) return false;
  return true;
};