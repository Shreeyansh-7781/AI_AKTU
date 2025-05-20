export const extractSkills = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('http://localhost:3001/api/extract-skills', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) throw new Error('Failed to extract skills');

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
