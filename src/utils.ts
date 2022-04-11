export const isValidScript = (embedScript: string) => {
  const regex = /<script src=("|')https:\/\/(.*).(js|js-integration).ubembed.com("|') async><\/script>/;
  return regex.test(embedScript);
};
