export const isValidScript = (embedScript: string) => {
  const regex = /<script src="https:\/\/(.*).js.ubembed.com" async><\/script>/;
  return regex.test(embedScript);
};
