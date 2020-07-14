const secret = 'lmnopqrstuvwxyz';

const encode = async (req: any) => {
  const baseNumber = req.params.number;
  const errors = [];
  if (baseNumber.length > 8) errors.push('Número não deve conter mais de 8 dígitos.');
  if (!/^\d+$/.test(baseNumber)) errors.push('O valor a ser codificádo deve conter apenas números.');
  if(errors.length) throw errors

  const number: string = baseNumber.padStart(8, '0');
  let text = '';

  for (let i = 0; i < number.length; i++) text += secret[parseInt(number[i])];

  return text;
};

const decode = async (req: any) => {
  const text: string = req.params.text;
  let number = '';

  for (let i = 0; i < text.length; i++) number += secret.indexOf(text[i]);

  return parseInt(number);
};

const EncodeService = {
  encode,
  decode,
};

export { EncodeService };
