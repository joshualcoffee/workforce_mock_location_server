const fs = require('fs');
const Location = require('./location');
require('./database.js');
const wf = require('./workforce_connector');
const data = [
  {
    "_id": 1,
    "agency_id": "54f0b5e48f0b8254a5fba6f7",
    "client_id": "578690a7debf7a174e0a24d2",
    "apikey": "5550dd11259a30f1681384c2",
    "name": "Home Centers",
    "address": "2610 Bridgeport Rd",
    "city": "Collingwood",
    "province": "Ontario",
    "country": "Canada",
    "postalCode": "L9Y 1X1",
    "phone": "705-607-6493",
    "geo": [
      -80.217796,
      44.494652
    ]
  },
  // {
  //   "_id": 2,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Sunny",
  //   "address": "1542 St. John Street",
  //   "city": "Domremy",
  //   "province": "Saskatchewan",
  //   "country": "Canada",
  //   "postalCode": "S4P 3Y2",
  //   "phone": "306-423-1679",
  //   "geo": [
  //     -104.611742,
  //     50.4517
  //   ]
  // },
  // {
  //   "_id": 3,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Nelson Brothers",
  //   "address": "2661 11th Ave",
  //   "city": "Calgary",
  //   "province": "Alberta",
  //   "country": "Canada",
  //   "postalCode": "T2P 1M6",
  //   "phone": "403-517-8896",
  //   "geo": [
  //     -114.06514,
  //     51.047142
  //   ]
  // },
  // {
  //   "_id": 4,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Glicks Furniture",
  //   "address": "373 St. John Street",
  //   "city": "Strongfield",
  //   "province": "Saskatchewan",
  //   "country": "Canada",
  //   "postalCode": "S4P 3Y2",
  //   "phone": "306-857-0043",
  //   "geo": [
  //     -104.611636,
  //     50.451858
  //   ]
  // },
  // {
  //   "_id": 5,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Sears Homelife",
  //   "address": "3760 Front Street",
  //   "city": "Pictou",
  //   "province": "Nova Scotia",
  //   "country": "Canada",
  //   "postalCode": "B0K 1H0",
  //   "phone": "902-382-8558",
  //   "geo": [
  //     -62.707598,
  //     45.675612
  //   ]
  // },
  // {
  //   "_id": 6,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "LaBelle",
  //   "address": "556 Township Rd",
  //   "city": "Bonnyville",
  //   "province": "Alberta",
  //   "country": "Canada",
  //   "postalCode": "T9N 2J6",
  //   "phone": "780-813-1794",
  //   "geo": [
  //     -110.738246,
  //     54.268118
  //   ]
  // },
  // {
  //   "_id": 7,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "County Seat",
  //   "address": "1569 5th Avenue",
  //   "city": "Fox Creek",
  //   "province": "Alberta",
  //   "country": "Canada",
  //   "postalCode": "T0H 1P0",
  //   "phone": "780-622-8957",
  //   "geo": [
  //     -116.809218,
  //     54.402207
  //   ]
  // },
  // {
  //   "_id": 8,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Soft Warehouse",
  //   "address": "3303 Kennedy Rd",
  //   "city": "Cobourg",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "K9A 4J7",
  //   "phone": "289-251-8012",
  //   "geo": [
  //     -78.239204,
  //     44.002587
  //   ]
  // },
  // {
  //   "_id": 9,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Star Interior Design",
  //   "address": "1036 Port Washington Road",
  //   "city": "Nanton",
  //   "province": "Alberta",
  //   "country": "Canada",
  //   "postalCode": "T0L 1R0",
  //   "phone": "403-646-0625",
  //   "geo": [
  //     -113.774822,
  //     50.345842
  //   ]
  // },
  // {
  //   "_id": 10,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Pleasures and Pasttimes",
  //   "address": "3561 Halsey Avenue",
  //   "city": "Toronto",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "M3B 2W6",
  //   "phone": "416-648-7095",
  //   "geo": [
  //     -79.346093,
  //     43.745801
  //   ]
  // },
  // {
  //   "_id": 11,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Independent Investors",
  //   "address": "3181 Kinchant St",
  //   "city": "Mission",
  //   "province": "British Columbia",
  //   "country": "Canada",
  //   "postalCode": "V2V 1J7",
  //   "phone": "604-826-7375",
  //   "geo": [
  //     -122.308516,
  //     49.135459
  //   ]
  // },
  // {
  //   "_id": 12,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Quest Technology Service",
  //   "address": "4569 Galts Ave",
  //   "city": "Red Deer",
  //   "province": "Alberta",
  //   "country": "Canada",
  //   "postalCode": "T4N 2A6",
  //   "phone": "403-896-4239",
  //   "geo": [
  //     -113.811015,
  //     52.269895
  //   ]
  // },
  // {
  //   "_id": 13,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Gold Leaf Garden Management",
  //   "address": "2136 Nelson Street",
  //   "city": "Dubreuilville",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "P0S 1B0",
  //   "phone": "705-884-8079",
  //   "geo": [
  //     -84.551559,
  //     48.343471
  //   ]
  // },
  // {
  //   "_id": 14,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Micro Design",
  //   "address": "1545 rue Levy",
  //   "city": "Montreal",
  //   "province": "Quebec",
  //   "country": "Canada",
  //   "postalCode": "H3C 5K4",
  //   "phone": "514-716-2499",
  //   "geo": [
  //     -73.539599,
  //     45.485132
  //   ]
  // },
  // {
  //   "_id": 15,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Sav-A-Center",
  //   "address": "3697 Island Hwy",
  //   "city": "Campbell River",
  //   "province": "British Columbia",
  //   "country": "Canada",
  //   "postalCode": "V9W 4C4",
  //   "phone": "250-204-9179",
  //   "geo": [
  //     -125.242377,
  //     50.024786
  //   ]
  // },
  // {
  //   "_id": 16,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Muscle Factory",
  //   "address": "4094 Craven Place",
  //   "city": "Medicine Hat",
  //   "province": "Alberta",
  //   "country": "Canada",
  //   "postalCode": "T1A 0N1",
  //   "phone": "403-527-0703",
  //   "geo": [
  //     -110.67763,
  //     50.037182
  //   ]
  // },
  // {
  //   "_id": 17,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "National Shirt Shop",
  //   "address": "4957 50th Street",
  //   "city": "Vegreville",
  //   "province": "Alberta",
  //   "country": "Canada",
  //   "postalCode": "T9C 1S1",
  //   "phone": "780-207-9497",
  //   "geo": [
  //     -112.053254,
  //     53.494648
  //   ]
  // },
  // {
  //   "_id": 18,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "On Cue",
  //   "address": "3929 Tanner Street",
  //   "city": "Vancouver",
  //   "province": "British Columbia",
  //   "country": "Canada",
  //   "postalCode": "V5R 2T4",
  //   "phone": "604-816-6781",
  //   "geo": [
  //     -123.024418,
  //     49.232098
  //   ]
  // },
  // {
  //   "_id": 19,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Morrie Mages",
  //   "address": "4433 St. Paul Street",
  //   "city": "St Catharines",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "L2S 3A1",
  //   "phone": "289-407-9092",
  //   "geo": [
  //     -79.246089,
  //     43.119545
  //   ]
  // },
  // {
  //   "_id": 20,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Konsili",
  //   "address": "1687 Birkett Lane",
  //   "city": "Brantford",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "N3T 2Z8",
  //   "phone": "519-753-9741",
  //   "geo": [
  //     -80.264118,
  //     43.141767
  //   ]
  // },
  // {
  //   "_id": 21,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "First Rate Choice",
  //   "address": "3586 Lynden Road",
  //   "city": "Hampton",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "L0B 1J0",
  //   "phone": "905-263-0944",
  //   "geo": [
  //     -78.809257,
  //     43.969923
  //   ]
  // },
  // {
  //   "_id": 22,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Rogersound Labs",
  //   "address": "3025 James Street",
  //   "city": "Cochrane",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "P0L 1C0",
  //   "phone": "705-272-2521",
  //   "geo": [
  //     -81.024971,
  //     49.062472
  //   ]
  // },
  // {
  //   "_id": 23,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Omni Source",
  //   "address": "4609 Eglinton Avenue",
  //   "city": "Toronto",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "M4P 1A6",
  //   "phone": "416-487-6606",
  //   "geo": [
  //     -79.396343,
  //     43.707173
  //   ]
  // },
  // {
  //   "_id": 24,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Al",
  //   "address": "1859 St. Paul Street",
  //   "city": "St Catharines",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "L2S 3A1",
  //   "phone": "905-321-0451",
  //   "geo": [
  //     -79.245145,
  //     43.119076
  //   ]
  // },
  // {
  //   "_id": 25,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Today",
  //   "address": "1107 Rose Street",
  //   "city": "Regina",
  //   "province": "Saskatchewan",
  //   "country": "Canada",
  //   "postalCode": "S4P 3Y2",
  //   "phone": "306-787-4022",
  //   "geo": [
  //     -104.611517,
  //     50.451884
  //   ]
  // },
  // {
  //   "_id": 26,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Big A Auto Parts",
  //   "address": "2841 90th Avenue",
  //   "city": "Elkwater",
  //   "province": "Alberta",
  //   "country": "Canada",
  //   "postalCode": "T0J 1C0",
  //   "phone": "403-893-3485",
  //   "geo": [
  //     -110.281122,
  //     49.661852
  //   ]
  // },
  // {
  //   "_id": 27,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Jack Lang",
  //   "address": "2276 rue des Églises Est",
  //   "city": "Rollet",
  //   "province": "Quebec",
  //   "country": "Canada",
  //   "postalCode": "J0Z 3J0",
  //   "phone": "819-493-4624",
  //   "geo": [
  //     -79.245341,
  //     47.913008
  //   ]
  // },
  // {
  //   "_id": 28,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Buehler Foods",
  //   "address": "2070 rue Levy",
  //   "city": "Montreal",
  //   "province": "Quebec",
  //   "country": "Canada",
  //   "postalCode": "H3C 5K4",
  //   "phone": "514-608-7430",
  //   "geo": [
  //     -73.539019,
  //     45.482627
  //   ]
  // },
  // {
  //   "_id": 29,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Helping Hand",
  //   "address": "4372 Wallbridge Loyalist Rd",
  //   "city": "Belleville",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "K8N 1L9",
  //   "phone": "613-962-8962",
  //   "geo": [
  //     -77.380851,
  //     44.16434
  //   ]
  // },
  // {
  //   "_id": 30,
  //   "agency_id": "54f0b5e48f0b8254a5fba6f7",
  //   "client_id": "578690a7debf7a174e0a24d2",
  //   "apikey": "5550dd11259a30f1681384c2",
  //   "name": "Holly Tree Inn",
  //   "address": "2977 Nelson Street",
  //   "city": "Keewaywin",
  //   "province": "Ontario",
  //   "country": "Canada",
  //   "postalCode": "P0V 3G0",
  //   "phone": "807-771-7504",
  //   "geo": [
  //     -94.558693,
  //     49.758766
  //   ]
  // }
]

const operations = [];
Location.remove({}, () => {
  console.log("removed")
});

for (var index = 0; index < data.length; index++) {
  const location = new Location({payload: data[index]});
  location.save();
  operations.push(wf.createOperation('brownbook', location))
  if(index == data.length -1) {
    wf.batchSendOperations(operations)
  }
}
