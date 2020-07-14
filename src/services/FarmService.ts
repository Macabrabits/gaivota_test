import { Farm } from '../typeorm/entity/Farm';

const index = async (req: any) => {
  const where = req.query;
  return Farm.find({ order: { id: 'DESC' }, where });
};

const show = async (req: { params: { id: any } }) => {
  const id = req.params.id;
  const farm: any = await Farm.findOne(id);
  if (!farm) throw ['Fazenda não encontrada.'];
  return farm;
};

const save = async (req: { body: any; params: { id?: any } }) => {
  const errors = [];
  const body = req.body;
  const id = req.params.id;  

  const dbFarm = async () => (id ? Farm.findOne(id) : new Farm());

  if (!id) {
    if (!body.farm_id) errors.push('O campo "farm_id" é obrigatório.');
    if (!body.name) errors.push('O campo "name" é obrigatório.');
    if (!body.latitude) errors.push('O campo "latitude" é obrigatório.');
    if (!body.longitude) errors.push('O campo "longitude" é obrigatório.');
    if (!body.culture) errors.push('O campo "culture" é obrigatório.');
    if (!body.variety) errors.push('O campo "variety" é obrigatório.');
    if (!body.total_area) errors.push('O campo "total_area" é obrigatório.');
    if (!body.yield_estimation) errors.push('O campo "yield_estimation" é obrigatório.');
    if (!body.price) errors.push('O campo "price" é obrigatório.');        
  }  

  if (errors.length) throw errors;

  const farm = await dbFarm();
  if (!farm) throw ['Fazenda não encontrada para edição.'];

  if (errors.length) throw errors;

  for (let field of Object.keys(body)) farm[field] = body[field];

  const errCalback = (err) => {
    if(err.code === 'ER_DUP_ENTRY'){
      const duplicatedField =  err.sqlMessage.split("'")[1]
      err = `O campo de valor ${duplicatedField} já existe e não pode ser duplicado.`
    }
    throw err      
  }
  return await farm.save().catch(errCalback);
};

const remove = async (req: any) => {
  const id = req.params.id;
  const farm = await Farm.findOne(id);
  if (!farm) throw ['Fazenda não encontrada para exclusão.'];
  return await farm.remove();
};

const FarmService = {
  index,
  show,
  save,
  remove,
};

export { FarmService };
