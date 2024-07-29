const typeServices = {
  async getAllTypes() {
    const response = await fetch("http://localhost:3000/types");

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`${response.status} - ${error}`);
    }

    const data = await response.json();
    return data;
  },
};

export default typeServices;
