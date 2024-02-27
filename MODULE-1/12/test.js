fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  })
  .finally(() => {
    console.log('Fetch operation completed.');
  });
