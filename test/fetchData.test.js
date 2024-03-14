const axios = require('axios');
const fetchData = require('../fetchData');

jest.mock('axios');

test("CEP v2 -> 11665071", async () => {
  const data = {
    "cep": "11665071",
  "state": "SP",
  "city": "Caraguatatuba",
  "neighborhood": "Indaiá",
  "street": "Avenida Bahia",
  "service": "correios-alt",
  "location": {
    "type": "Point",
    "coordinates": {
      "longitude": "-45.4261128",
      "latitude": "-23.6364233"
      },
    },
  };

    axios.get.mockResolvedValue({ data });
    
    const result = await fetchData();// then(data => expect(data).toEqual(resp));
    console.log(result);
    expect(result).toEqual(data)
});


