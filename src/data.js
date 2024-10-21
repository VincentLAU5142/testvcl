export default function getId() {
  let data = [
    {
      Id: "8541",
      Name: "CK Hutchison",
      Symbol: "0001",
    },
    {
      Id: "8542",
      Name: "CLP Holdings",
      Symbol: "0002",
    },
    {
      Id: "8543",
      Name: "HK & China Gas",
      Symbol: "0003",
    },
    {
      Id: "8544",
      Name: "Wharf Holdings",
      Symbol: "0004",
    },
    {
      Id: "8545",
      Name: "HSBC",
      Symbol: "0005",
    },
    {
      Id: "8546",
      Name: "Power Assets",
      Symbol: "0006",
    },
    {
      Id: "8547",
      Name: "PCCW",
      Symbol: "0008",
    },
    {
      Id: "8548",
      Name: "Hang Seng Bank",
      Symbol: "0011",
    },
    {
      Id: "8549",
      Name: "Henderson Land",
      Symbol: "0012",
    },
    {
      Id: "8551",
      Name: "SHK Ppt",
      Symbol: "0016",
    },
    {
      Id: "8552",
      Name: "New World",
      Symbol: "0017",
    },
    {
      Id: "8553",
      Name: "Swire Pacific A",
      Symbol: "0019",
    },
    {
      Id: "8554",
      Name: "Bank Of E Asia",
      Symbol: "0023",
    },
    {
      Id: "8555",
      Name: "MTR",
      Symbol: "0066",
    },
    {
      Id: "8556",
      Name: "Sino Land",
      Symbol: "0083",
    },
    {
      Id: "8557",
      Name: "Hang Lung Ppt",
      Symbol: "0101",
    },
    {
      Id: "8558",
      Name: "China Mer Hold",
      Symbol: "0144",
    },
    {
      Id: "8559",
      Name: "Citic Pacific",
      Symbol: "0267",
    },
    {
      Id: "8560",
      Name: "China Resources Beer Holdings",
      Symbol: "0291",
    },
    {
      Id: "8561",
      Name: "Cathay Airways",
      Symbol: "0293",
    },
    {
      Id: "8562",
      Name: "Esprit Holdings",
      Symbol: "0330",
    },
    {
      Id: "8563",
      Name: "China Petrol & Chemical H",
      Symbol: "0386",
    },
    {
      Id: "8564",
      Name: "HKEX",
      Symbol: "0388",
    },
    {
      Id: "8566",
      Name: "Yue Yuen Ind",
      Symbol: "0551",
    },
    {
      Id: "8567",
      Name: "China Overseas",
      Symbol: "0688",
    },
    {
      Id: "8568",
      Name: "China Unicom Hong Kong",
      Symbol: "0762",
    },
    {
      Id: "8569",
      Name: "PetroChina H",
      Symbol: "0857",
    },
    {
      Id: "8570",
      Name: "CNOOC",
      Symbol: "0883",
    },
    {
      Id: "8572",
      Name: "China Construction Bank",
      Symbol: "0939",
    },
    {
      Id: "8573",
      Name: "China Mobile",
      Symbol: "0941",
    },
    {
      Id: "8574",
      Name: "CK Infrastructure",
      Symbol: "1038",
    },
    {
      Id: "8576",
      Name: "COSCO Shipping Ports HK",
      Symbol: "1199",
    },
    {
      Id: "8577",
      Name: "Industrial Commercial Bank of China ltd",
      Symbol: "1398",
    },
    {
      Id: "8578",
      Name: "FIH Mobile Ltd",
      Symbol: "2038",
    },
    {
      Id: "8579",
      Name: "Ping An Insurance",
      Symbol: "2318",
    },
    {
      Id: "8580",
      Name: "BOC Hong Kong",
      Symbol: "2388",
    },
    {
      Id: "8581",
      Name: "China Life Insurance",
      Symbol: "2628",
    },
    {
      Id: "8582",
      Name: "Bank of Communications",
      Symbol: "3328",
    },
    {
      Id: "9215",
      Name: "China Resources Power",
      Symbol: "0836",
    },
    {
      Id: "9216",
      Name: "Aluminum Corp of China",
      Symbol: "2600",
    },
    {
      Id: "13830",
      Name: "Hengan Intl Group",
      Symbol: "1044",
    },
    {
      Id: "13871",
      Name: "China Everbright Environment Group",
      Symbol: "0257",
    },
    {
      Id: "13872",
      Name: "Angang Steel",
      Symbol: "0347",
    },
    {
      Id: "13873",
      Name: "Jiangxi Copper",
      Symbol: "0358",
    },
    {
      Id: "13874",
      Name: "China Gas",
      Symbol: "0384",
    },
    {
      Id: "13875",
      Name: "China Railway",
      Symbol: "0390",
    },
    {
      Id: "13876",
      Name: "Dongfeng Group",
      Symbol: "0489",
    },
    {
      Id: "13877",
      Name: "GOME",
      Symbol: "0493",
    },
    {
      Id: "13879",
      Name: "ZTE Corp-H",
      Symbol: "0763",
    },
    {
      Id: "13880",
      Name: "Datang Intl Power",
      Symbol: "0991",
    },
    {
      Id: "13881",
      Name: "Harbin Electric",
      Symbol: "1133",
    },
    {
      Id: "13882",
      Name: "COSCO Shipping Energy",
      Symbol: "1138",
    },
    {
      Id: "13883",
      Name: "China Railway",
      Symbol: "1186",
    },
    {
      Id: "13884",
      Name: "BYD Co Ltd-H",
      Symbol: "1211",
    },
    {
      Id: "13886",
      Name: "China Communications",
      Symbol: "1800",
    },
    {
      Id: "13887",
      Name: "COSCO Shipping H",
      Symbol: "1919",
    },
    {
      Id: "13888",
      Name: "China Mengniu Dairy",
      Symbol: "2319",
    },
    {
      Id: "13889",
      Name: "PICC Property & Casualty",
      Symbol: "2328",
    },
    {
      Id: "13890",
      Name: "Nine Dragons",
      Symbol: "2689",
    },
    {
      Id: "13891",
      Name: "Guangzhou R&F",
      Symbol: "2777",
    },
    {
      Id: "13892",
      Name: "Cosco Shipping Develop",
      Symbol: "2866",
    },
    {
      Id: "13893",
      Name: "Zijin Mining Group",
      Symbol: "2899",
    },
    {
      Id: "13894",
      Name: "China National Building",
      Symbol: "3323",
    },
    {
      Id: "28426",
      Name: "China e-Wallet Payment",
      Symbol: "0802",
    },
    {
      Id: "32483",
      Name: "Kingboard Chem",
      Symbol: "0148",
    },
    {
      Id: "32484",
      Name: "Tingyi",
      Symbol: "0322",
    },
    {
      Id: "32486",
      Name: "Huaneng Power",
      Symbol: "0902",
    },
    {
      Id: "32487",
      Name: "Swire Properties",
      Symbol: "1972",
    },
    {
      Id: "32488",
      Name: "Agricultural Bank Of China",
      Symbol: "1288",
    },
    {
      Id: "32490",
      Name: "Want Want China",
      Symbol: "0151",
    },
    {
      Id: "32491",
      Name: "Zoomlion Heavy Industry",
      Symbol: "1157",
    },
    {
      Id: "32492",
      Name: "China Pacific Insurance",
      Symbol: "2601",
    },
    {
      Id: "32493",
      Name: "China Minsheng Banking",
      Symbol: "1988",
    },
    {
      Id: "32494",
      Name: "China Resources Land",
      Symbol: "1109",
    },
    {
      Id: "32495",
      Name: "China Merchants Bank H",
      Symbol: "3968",
    },
    {
      Id: "32496",
      Name: "Yankuang Energy HK",
      Symbol: "1171",
    },
    {
      Id: "32497",
      Name: "Anhui Conch Cement",
      Symbol: "0914",
    },
    {
      Id: "32498",
      Name: "China Coal Energy",
      Symbol: "1898",
    },
    {
      Id: "32499",
      Name: "Tsingtao Brew",
      Symbol: "0168",
    },
    {
      Id: "32500",
      Name: "Lenovo Group",
      Symbol: "0992",
    },
    {
      Id: "32501",
      Name: "China Telecom",
      Symbol: "0728",
    },
    {
      Id: "32502",
      Name: "AIA Group",
      Symbol: "1299",
    },
    {
      Id: "38047",
      Name: "Kunlun Energy",
      Symbol: "0135",
    },
    {
      Id: "38075",
      Name: "Sands China",
      Symbol: "1928",
    },
    {
      Id: "49961",
      Name: "Hysan Development",
      Symbol: "0014",
    },
    {
      Id: "49962",
      Name: "Galaxy Entertainment Group",
      Symbol: "0027",
    },
    {
      Id: "49964",
      Name: "Shangri-La Asia",
      Symbol: "0069",
    },
    {
      Id: "49965",
      Name: "Poly Property Group",
      Symbol: "0119",
    },
    {
      Id: "49966",
      Name: "Yuexiu Property Co",
      Symbol: "0123",
    },
    {
      Id: "49967",
      Name: "China Everbright",
      Symbol: "0165",
    },
    {
      Id: "49968",
      Name: "Geely Automobile",
      Symbol: "0175",
    },
    {
      Id: "49969",
      Name: "Uni-President China",
      Symbol: "0220",
    },
    {
      Id: "49970",
      Name: "Guangdong Investment",
      Symbol: "0270",
    },
    {
      Id: "49971",
      Name: "Shui On Land Ltd",
      Symbol: "0272",
    },
    {
      Id: "49972",
      Name: "Mongolia Energy",
      Symbol: "0276",
    },
    {
      Id: "49973",
      Name: "Sinofert Holdings",
      Symbol: "0297",
    },
    {
      Id: "49975",
      Name: "Orient Overseas Int",
      Symbol: "0316",
    },
    {
      Id: "49976",
      Name: "Huabao International Holdings",
      Symbol: "0336",
    },
    {
      Id: "49977",
      Name: "Shanghai Industrial",
      Symbol: "0363",
    },
    {
      Id: "49978",
      Name: "Beijing Enterprises Holdings",
      Symbol: "0392",
    },
  ];
  return data;
}
