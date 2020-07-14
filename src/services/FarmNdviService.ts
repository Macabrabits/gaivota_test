import { FarmNvdi } from '../typeorm/entity/FarmNdvi';

const index = async (req: any) => {
  const where = req.query;
  return FarmNvdi.find({ order: { id: 'DESC' }, where });
};

const show = async (req: { params: { id: any } }) => {
  const id = req.params.id;
  const farm: any = await FarmNvdi.findOne(id);
  if (!farm) throw ['Ndvi não encontrado'];
  return farm;
};

const save = async (req: { body: any; params: { id?: any } }) => {
  const errors = [];
  const body = req.body;
  const id = req.params.id;

  const dbFarmNvdi = async () => (id ? FarmNvdi.findOne(id) : new FarmNvdi());

  if (errors.length) throw errors;

  const farm = await dbFarmNvdi();
  if (!farm) throw ['Ndvi não encontrado para edição.'];

  if (errors.length) throw errors;

  for (let field of Object.keys(body)) farm[field] = body[field];

  return await farm.save();
};

const remove = async (req: any) => {
  const id = req.params.id;
  const farm = await FarmNvdi.findOne(id);
  if (!farm) throw ['Ndvi não encontrado para exclusão.'];
  return await farm.remove();
};

const FarmNvdiService = {
  index,
  show,
  save,
  remove,
};

export { FarmNvdiService };
