function findDuplicate(paths: string[]): string[][] {
  const result: string[][] = [];
  const contentMap: Map<string, string[]> = new Map();

  for (const path of paths) {
    const [dir, ...files] = separateFiles(path);

    for (const file of files) {
      const content = findContent(file);
      const fileName = file.substring(0, file.indexOf('('));
      const fullPath = `${dir}/${fileName}`;

      if (!contentMap.has(content)) {
        contentMap.set(content, []);
      }
      contentMap.get(content)!.push(fullPath);
    }
  }

  for (const group of contentMap.values()) {
    if (group.length > 1) {
      result.push(group);
    }
  }

  return result;
};

const separateFiles = (path: string): string[] => {
  return path.split(' ');
}

const findContent = (file: string): string => {
  const start = file.indexOf('(');
  const end = file.length;
  return file.substring(start + 1, end - 1);
}
