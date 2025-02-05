# Number-Classification-API
This API classifies a given number and provides interesting mathematical properties and a fun fact.
## Endpoint

**GET** `/api/classify-number?number=<number>`

### Example Request

GET /api/classify-number?number=371

### Example Response
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
Installation
Clone the repository.

Run npm install to install dependencies.

Start the server using npm start.

Testing
Run npm test to execute unit tests.