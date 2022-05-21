export const omitField = (field: string) => (data: any) =>
  Object.keys(data).reduce((acc: any, key: any) => {
    if (key === field) {
      return acc;
    }
    const item = data[key];
    return { ...acc, [key]: item };
  }, {});

export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
