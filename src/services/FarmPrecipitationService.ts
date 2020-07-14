import { FarmPrecipitation } from '../typeorm/entity/FarmPrecipitation';

const index = async (req: any) => {
  const where = req.query;
  return FarmPrecipitation.find({ order: { id: 'DESC' }, where });
};

const show = async (req: { params: { id: any } }) => {
  const id = req.params.id;
  const farm: any = await FarmPrecipitation.findOne(id);
  if (!farm) throw ['Precipitação não encontrado'];
  return farm;
};

const save = async (req: { body: any; params: { id?: any } }) => {
  const errors = [];
  const body = req.body;
  const id = req.params.id;

  const dbFarmPrecipitation = async () => (id ? FarmPrecipitation.findOne(id) : new FarmPrecipitation());

  if (errors.length) throw errors;

  const farm = await dbFarmPrecipitation();
  if (!farm) throw ['Precipitação não encontrada para edição.'];

  if (errors.length) throw errors;

  for (let field of Object.keys(body)) farm[field] = body[field];

  return await farm.save();
};

const remove = async (req: any) => {
  const id = req.params.id;
  const farm = await FarmPrecipitation.findOne(id);
  if (!farm) throw ['Precipitação não encontrada para exclusão.'];
  return await farm.remove();
};

const FarmPrecipitationService = {
  index,
  show,
  save,
  remove,
};

export { FarmPrecipitationService };
