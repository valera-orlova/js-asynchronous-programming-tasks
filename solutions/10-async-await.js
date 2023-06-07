import fsp from 'fs/promises';
import fs from 'fs';

// BEGIN

export const exchange = async (firsPath, secondPath) => {
  const [firstData, secondData] = await Promise.all([
    fs.promises.readFile(firsPath, 'utf-8'),
    fs.promises.readFile(secondPath, 'utf-8')
  ]);

  await Promise.all([
    fs.promises.writeFile(firsPath, secondData),
    fs.promises.writeFile(secondPath, firstData)
  ]);
};

// END