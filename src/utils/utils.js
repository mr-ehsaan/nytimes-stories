export const extractImageUrl = (multimedia, format) => {
    const media = multimedia.find(item => item.format === format);
    return media ? media.url : null;
  };
  