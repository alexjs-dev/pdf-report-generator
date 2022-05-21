// Let's pretend there is some heavy computation to do
const generateMockData = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        fileId: Math.floor(Math.random() * 10000),
        name: Math.random(),
        age: Math.random() * 100,
      });
    }, 5000);
  });

module.exports = {
  generateMockData,
};
