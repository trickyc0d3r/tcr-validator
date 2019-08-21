const eng = /^[-!#$%&'*+\/0-9=?A-ZА-Я^_a-zа-я{|}~](\.?[-!#$%&'*+\/0-9=?A-ZА-Я^_a-zа-я`{|}~])*@[a-zA-ZА-Яа-я0-9](-*\.?[a-zA-ZА-Яа-я0-9])*\.[a-zA-Zа-яА-Я](-?[a-zA-Zа-яА-Я0-9])+$/;

//const rus = /^[-!#$%&'*+\/0-9=?А-Я^_а-я{|}~](\.?[-!#$%&'*+\/0-9=?А-Я^_а-я`{|}~])*@[а-яА-Я0-9](-*\.?[а-яА-Я0-9])*\.[а-яА-Я](-?[а-яА-Я0-9])+$/;

export const Validator = (email) => {
  if (!email) return false;

  if (email.length > 254) return false;

  let valid = eng.test(email)
  if (!valid) return false;

  let parts = email.split("@");
  if (parts[0].length > 64) return false;

  let domainParts = parts[1].split(".");
  if (domainParts.some((part) => part.length > 63)) return false;

  return true;
};
