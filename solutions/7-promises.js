import fs from 'fs';

// BEGIN
export const reverse = async (fileSource) => {
    try {
      const fileContent = await fs.promises.readFile(fileSource, 'utf-8');
      const reversedContent = fileContent
        .trim()
        .split('\n')
        .reverse()
        .join('\n');
      await fs.promises.writeFile(fileSource, reversedContent);
    } catch (error) {
      throw error;
    }
  };
// END