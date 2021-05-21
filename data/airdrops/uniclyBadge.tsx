const uniclyBadges = [
  "0x4edb4161d16c89b71aec027930a943c3d4cf0777",
  "0x86aecfc1e3973108ce14b9b741a99d3466127170",
  "0x6eb13bf70edaade22b0c5a7f0de7138ce96d53db",
  "0x9ff84b91998df96a6587db8dde8d4e47518107d6",
  "0xba12fda058a14eb03c14613601c3a30d6f955196",
  "0x58babcd845405c1a4cb4f6f382954c87a2f0ad0f",
  "0x705ae5aef02b0a8ceaa712af547d39a051da5d4a",
  "0x7e4724c60718a9f87ce51bcf8812bf90d0b7b9db",
  "0xd949ea0610d4517dc2a79cce5ad866f7d17cccd8",
  "0x35001a8bdb3a224d05f086094c12fd4c9009986d",
  "0x47d6f96ba098816389db7c87cbf077de7181b853",
  "0xb02dc63b4e234e1abc36ead88df610d67f4920dd",
  "0x2b29518e5ac3eda4cfc138facd6f023bffc5d65a",
  "0xb71d05cf5cdf7a9b15b20b9aab5e91332c271c96",
  "0x938a0af4b86057489bc651dd02c080890d8ed5e5",
  "0x7fd93c8cfd654b24ef2c4b5fa36d41bea4cf2f90",
  "0x36f26e2e5bed062968c17fc770863fd740713205",
  "0xe29555e804e414e295e2a059fc49d002ec18f268",
  "0x25f8cc6c8c4af1076a38872c8b110874dcb144a8",
  "0x6a7c6689b24515bc9983360dfb8e6ed7891ac7cf",
  "0x66697dabffe51a73e506f463b27e388512ed6ecd",
  "0x86f5badc9fb2db49303d69ad0358b467cfd393e0",
  "0x73b46a49e5f92480710b07be849500b772b6a995",
  "0x18b3b4363fbee8cbf040132b60fa47f22c89b1e6",
  "0xe1a1d5c32888c5b140917b296e82cf3a448f37a6",
  "0x02206509a713e003bd099fd12a2edfef9af84665",
  "0xefab7517a9c252ab1a0b8645215bccdf339f85f9",
  "0xfb0f19b05d65149f7582be847bf4dcc1c4e0b76c",
  "0x8e29b3f71a8c7276d122c88d9bf317e857abb376",
  "0xfeac872a93df8939df3face650945fbf3ea705e9",
  "0x043f8524f87efb25990b65ff4918f9128acf742e",
  "0x262944448ec574dd5f82136964bbf189cc1ab579",
  "0x0c404f55595ab844d519a084ff1b8cb36aaad1d1",
  "0xe2bc8f821d4ded2d995cc7116885769ec690fc2c",
  "0xb923cf46609d7fbcf1b923092c7636d05506cbc9",
  "0x683c6cb00dde8605d44dd038f341528a16666666",
  "0xee5cda91e4ddcde24d44dafd74bed4ba068f8ac2",
  "0x2c123fc5c27888571cd525e8ae9b0c5ff848386d",
  "0x0628ff854c191d4b80d2f07b3f1a39d878cd2e3a",
  "0x071d217637b6322a7faac6895a9eb00e529d3424",
  "0x0d204ac57a5cc7682cb1985041ed366cd2cb3826",
  "0x137c0f7d6b2558edf5b8f69eec0635dd43fad6af",
  "0x257b5a6b4e777b14b00c31f5e3874a5fa1c4145b",
  "0x287b635a6b1007b39a5c8561be5a56899aaaa7c4",
  "0x2bf120458d1270d0f666cc75a70e8379270bc6e3",
  "0x34ec9c1d89ce8afa701d079fd908fca95f49667a",
  "0x3742f0fd8fce40411c450e74d270d4d5faaf92fd",
  "0x40cf6bb888ca670e20139b1caa0ba0996f65371c",
  "0x41c63953aa3e69af424ce6873c60ba13857b31bb",
  "0x449b824730eeb34ef524ed68b304977b7029bbb9",
  "0x45c7811c459a43d0c17ef18f33a2c8921ac4ecf8",
  "0x4a25e4df835b605a5848d2db450fa600d96ee818",
  "0x51208e5cc9215c6360210c48f81c8270637a5218",
  "0x5da5f4c020f856abdb168fd35c957d6006ba2ede",
  "0x5fc75cbbcddf4398c5c2949a5736e299c1440576",
  "0x60c4ae0ee854a20ea7796a9678090767679b30fc",
  "0x683c6cb00dde8605d44dd038f341528a16666666",
  "0x69a77b9ca4d106690751866360f7bb5952b2666d",
  "0x7fce563e9f39ab7dfbd61978f10037cc32a95a4d",
  "0x83df69502a9b45e4f9093257ac2204423e6b09a9",
  "0x9080196182f77b89bb5b0eee3ddb48cfa716c4c3",
  "0x9e5b1f637a03976f2c472265806aa1bcc969ca85",
  "0xa499df2bdae854093e5576c26c9e53e1b30d25e5",
  "0xaec7d9e4216758e88b926695df4a6d47abccc0ef",
  "0xb4845049cf818dccd320eb715c1a475b0cffa1c3",
  "0xb53cf0a586973ab15c0a045990d06b4fa083dd5a",
  "0xc4cb9c709deac4ccba0eee788a1ffe65bf84b38f",
  "0xcef4d05050a9b342991fa7b06b27df1ae03c7d1b",
  "0xd184cbc30ef3b21842bb2515526ee2280661d88b",
  "0xd3cba4614e1f2bc23bf7bcf53e7b441d2528965a",
  "0xde34393312c0c1e97e404d18a04580e9610e063c",
  "0xf09d1acbf092ec47970a2aa9e16bc658b2ecf15e",
  "0xf22f00d0b95b1b728078066e5f4410f6b2be8fae",
  "0xf65edf34797567ca62ee0628bb14a47bce7333d7",
  "0xfce761d7e0d99300897de97025558670bb269dd2",

  //v1
  "0x3c5ef6a0af2f5147a53c689a31b8aeed12fb6f3d",
  "0xbd1eb910a8e77d75d7e334f7adb7660750d7bb45",
  "0x61477eaa5e33400acc353390ca001be0eb706eb4",
  "0x923bbe01b2404986a16d95313aafa222ec539f4c",
  "0x787b4b7ffef8eddad54f311039acf4c36fec9593",
  "0xb139b6217bda0c51c3cd2decf8fc07a3ee3c9648",
  "0x4893ce4d89f4d3626e9ce9dbfd71a2d315a774b7",
  "0x0b81747f504dfc906a215e301d8b8ad82e44cbd2",
  "0xae729ced561c19803169d8ca421551bf039a4bb0",
  "0x60dd91585629806b59c5f330e8c4d542a3be7fc9",
  "0x174b079bb5aeb7a7ffa2a6407b906a844738428d",
  "0xdc973be53d311d172650dde43a8c11ec47699864",
  "0x54688a441c8e9f17253038ff8a4336b679c02a4b",
  "0x6541e84af0b25f3e084e9ed17d8f255a12d125d3",
  "0x6032cc6c2d95817034c987c826c999077cff9ae0",
  "0xb0c4cc1aa998df91d2c27ce06641261707a8c9c3",
  "0x6360ea0e3af36b7b51cf7e4f810370dd5a8cdc0f",
  "0xecab3ed0d13c9172f54d433106ece2a8aa0e674a",
  "0x727df4ab614e0025637c4d23b48171054e0f6dde",
  "0x2e0584f067fcb90d26bfec92b841c2dd6401577a",
  "0xe9d349b1e9713df62734757149b061356cec2e68",
  "0x83bb781a2a2ca1fec0350f178c911848811cc440",
  "0x5761ac2e1cb06cc3f8e1dd7e40b358bb35558def",
];

const uniclyBadgeGotchisOwned = {
  data: {
    users: [
      {
        gotchisOwned: [
          {
            id: "5004",
          },
          {
            id: "5007",
          },
          {
            id: "5008",
          },
        ],
        id: "0x02206509a713e003bd099fd12a2edfef9af84665",
      },
      {
        gotchisOwned: [
          {
            id: "7623",
          },
          {
            id: "7624",
          },
          {
            id: "7625",
          },
          {
            id: "7626",
          },
        ],
        id: "0x0628ff854c191d4b80d2f07b3f1a39d878cd2e3a",
      },
      {
        gotchisOwned: [
          {
            id: "1080",
          },
          {
            id: "1152",
          },
          {
            id: "1249",
          },
          {
            id: "220",
          },
          {
            id: "2244",
          },
          {
            id: "230",
          },
          {
            id: "232",
          },
          {
            id: "2392",
          },
          {
            id: "2525",
          },
          {
            id: "2802",
          },
          {
            id: "2859",
          },
          {
            id: "2904",
          },
          {
            id: "311",
          },
          {
            id: "345",
          },
          {
            id: "3624",
          },
          {
            id: "412",
          },
          {
            id: "416",
          },
          {
            id: "4403",
          },
          {
            id: "517",
          },
          {
            id: "549",
          },
          {
            id: "654",
          },
          {
            id: "6952",
          },
          {
            id: "6953",
          },
          {
            id: "6954",
          },
          {
            id: "8012",
          },
          {
            id: "8157",
          },
          {
            id: "816",
          },
          {
            id: "8254",
          },
          {
            id: "8363",
          },
          {
            id: "8393",
          },
          {
            id: "8762",
          },
          {
            id: "9167",
          },
          {
            id: "9567",
          },
          {
            id: "986",
          },
        ],
        id: "0x071d217637b6322a7faac6895a9eb00e529d3424",
      },
      {
        gotchisOwned: [
          {
            id: "2582",
          },
          {
            id: "4797",
          },
          {
            id: "5232",
          },
          {
            id: "5796",
          },
          {
            id: "7031",
          },
        ],
        id: "0x0c404f55595ab844d519a084ff1b8cb36aaad1d1",
      },
      {
        gotchisOwned: [
          {
            id: "1421",
          },
          {
            id: "2167",
          },
          {
            id: "2698",
          },
          {
            id: "2713",
          },
          {
            id: "3090",
          },
          {
            id: "3091",
          },
          {
            id: "3290",
          },
          {
            id: "3291",
          },
          {
            id: "3292",
          },
          {
            id: "3293",
          },
          {
            id: "3294",
          },
          {
            id: "3295",
          },
          {
            id: "3296",
          },
          {
            id: "3297",
          },
          {
            id: "3298",
          },
          {
            id: "3299",
          },
          {
            id: "3301",
          },
          {
            id: "3302",
          },
          {
            id: "3305",
          },
          {
            id: "3306",
          },
          {
            id: "3308",
          },
          {
            id: "3309",
          },
          {
            id: "3310",
          },
          {
            id: "3311",
          },
          {
            id: "3312",
          },
          {
            id: "3314",
          },
          {
            id: "4323",
          },
          {
            id: "4414",
          },
          {
            id: "5093",
          },
          {
            id: "5335",
          },
          {
            id: "6582",
          },
          {
            id: "6642",
          },
          {
            id: "725",
          },
          {
            id: "733",
          },
          {
            id: "9243",
          },
        ],
        id: "0x137c0f7d6b2558edf5b8f69eec0635dd43fad6af",
      },
      {
        gotchisOwned: [
          {
            id: "7486",
          },
          {
            id: "7487",
          },
          {
            id: "7488",
          },
          {
            id: "7820",
          },
          {
            id: "7821",
          },
          {
            id: "7822",
          },
          {
            id: "7823",
          },
          {
            id: "7824",
          },
        ],
        id: "0x257b5a6b4e777b14b00c31f5e3874a5fa1c4145b",
      },
      {
        gotchisOwned: [
          {
            id: "1032",
          },
          {
            id: "1046",
          },
        ],
        id: "0x25f8cc6c8c4af1076a38872c8b110874dcb144a8",
      },
      {
        gotchisOwned: [
          {
            id: "1012",
          },
          {
            id: "1668",
          },
          {
            id: "1836",
          },
          {
            id: "1837",
          },
          {
            id: "1838",
          },
          {
            id: "1839",
          },
          {
            id: "1840",
          },
          {
            id: "7717",
          },
          {
            id: "8823",
          },
          {
            id: "9751",
          },
        ],
        id: "0x262944448ec574dd5f82136964bbf189cc1ab579",
      },
      {
        gotchisOwned: [
          {
            id: "6382",
          },
          {
            id: "6874",
          },
          {
            id: "6875",
          },
        ],
        id: "0x287b635a6b1007b39a5c8561be5a56899aaaa7c4",
      },
      {
        gotchisOwned: [
          {
            id: "1780",
          },
          {
            id: "1884",
          },
          {
            id: "2054",
          },
          {
            id: "267",
          },
          {
            id: "3689",
          },
          {
            id: "3880",
          },
          {
            id: "3931",
          },
          {
            id: "3932",
          },
          {
            id: "3933",
          },
          {
            id: "3934",
          },
          {
            id: "3935",
          },
          {
            id: "4336",
          },
          {
            id: "5446",
          },
          {
            id: "5697",
          },
          {
            id: "6558",
          },
          {
            id: "753",
          },
          {
            id: "7953",
          },
          {
            id: "8607",
          },
          {
            id: "922",
          },
          {
            id: "9393",
          },
          {
            id: "9832",
          },
        ],
        id: "0x2b29518e5ac3eda4cfc138facd6f023bffc5d65a",
      },
      {
        gotchisOwned: [
          {
            id: "2874",
          },
          {
            id: "2992",
          },
          {
            id: "2996",
          },
          {
            id: "5855",
          },
          {
            id: "5856",
          },
          {
            id: "5857",
          },
          {
            id: "6332",
          },
          {
            id: "6335",
          },
          {
            id: "7072",
          },
          {
            id: "7403",
          },
          {
            id: "7404",
          },
          {
            id: "7406",
          },
          {
            id: "7850",
          },
          {
            id: "8573",
          },
          {
            id: "8576",
          },
          {
            id: "8845",
          },
          {
            id: "9157",
          },
          {
            id: "9523",
          },
          {
            id: "9524",
          },
          {
            id: "9526",
          },
          {
            id: "9530",
          },
          {
            id: "9535",
          },
          {
            id: "9536",
          },
          {
            id: "9540",
          },
          {
            id: "9541",
          },
          {
            id: "9542",
          },
          {
            id: "9543",
          },
          {
            id: "9544",
          },
          {
            id: "9546",
          },
        ],
        id: "0x2c123fc5c27888571cd525e8ae9b0c5ff848386d",
      },
      {
        gotchisOwned: [
          {
            id: "1098",
          },
          {
            id: "4452",
          },
          {
            id: "4981",
          },
          {
            id: "5136",
          },
          {
            id: "5210",
          },
          {
            id: "6692",
          },
          {
            id: "6693",
          },
          {
            id: "6694",
          },
          {
            id: "6695",
          },
          {
            id: "7533",
          },
          {
            id: "7534",
          },
          {
            id: "7537",
          },
          {
            id: "8280",
          },
        ],
        id: "0x34ec9c1d89ce8afa701d079fd908fca95f49667a",
      },
      {
        gotchisOwned: [
          {
            id: "2500",
          },
          {
            id: "2501",
          },
          {
            id: "2502",
          },
          {
            id: "2503",
          },
          {
            id: "3169",
          },
          {
            id: "3170",
          },
          {
            id: "3171",
          },
          {
            id: "3173",
          },
          {
            id: "3407",
          },
          {
            id: "4636",
          },
          {
            id: "4637",
          },
          {
            id: "4638",
          },
          {
            id: "4639",
          },
          {
            id: "4640",
          },
          {
            id: "5420",
          },
          {
            id: "5681",
          },
          {
            id: "5682",
          },
          {
            id: "5684",
          },
          {
            id: "5737",
          },
          {
            id: "598",
          },
          {
            id: "6058",
          },
          {
            id: "6447",
          },
          {
            id: "6451",
          },
          {
            id: "6843",
          },
          {
            id: "8590",
          },
        ],
        id: "0x35001a8bdb3a224d05f086094c12fd4c9009986d",
      },
      {
        gotchisOwned: [
          {
            id: "7532",
          },
          {
            id: "766",
          },
          {
            id: "768",
          },
          {
            id: "769",
          },
        ],
        id: "0x36f26e2e5bed062968c17fc770863fd740713205",
      },
      {
        gotchisOwned: [
          {
            id: "7844",
          },
          {
            id: "8050",
          },
          {
            id: "9173",
          },
          {
            id: "9174",
          },
        ],
        id: "0x3742f0fd8fce40411c450e74d270d4d5faaf92fd",
      },
      {
        gotchisOwned: [
          {
            id: "7607",
          },
          {
            id: "9123",
          },
          {
            id: "9433",
          },
          {
            id: "987",
          },
        ],
        id: "0x40cf6bb888ca670e20139b1caa0ba0996f65371c",
      },
      {
        gotchisOwned: [],
        id: "0x41c63953aa3e69af424ce6873c60ba13857b31bb",
      },
      {
        gotchisOwned: [
          {
            id: "5671",
          },
          {
            id: "5672",
          },
          {
            id: "8372",
          },
        ],
        id: "0x449b824730eeb34ef524ed68b304977b7029bbb9",
      },
      {
        gotchisOwned: [
          {
            id: "8733",
          },
          {
            id: "9763",
          },
        ],
        id: "0x45c7811c459a43d0c17ef18f33a2c8921ac4ecf8",
      },
      {
        gotchisOwned: [
          {
            id: "1195",
          },
          {
            id: "1852",
          },
          {
            id: "201",
          },
          {
            id: "2269",
          },
          {
            id: "2750",
          },
          {
            id: "3572",
          },
          {
            id: "4441",
          },
          {
            id: "4678",
          },
          {
            id: "5383",
          },
          {
            id: "7052",
          },
          {
            id: "7055",
          },
          {
            id: "728",
          },
          {
            id: "8303",
          },
          {
            id: "9250",
          },
          {
            id: "9936",
          },
        ],
        id: "0x47d6f96ba098816389db7c87cbf077de7181b853",
      },
      {
        gotchisOwned: [
          {
            id: "3152",
          },
          {
            id: "5583",
          },
          {
            id: "6233",
          },
          {
            id: "7209",
          },
          {
            id: "7689",
          },
          {
            id: "8069",
          },
          {
            id: "9338",
          },
          {
            id: "9371",
          },
        ],
        id: "0x4edb4161d16c89b71aec027930a943c3d4cf0777",
      },
      {
        gotchisOwned: [
          {
            id: "4523",
          },
          {
            id: "4627",
          },
          {
            id: "4628",
          },
          {
            id: "4630",
          },
          {
            id: "7622",
          },
          {
            id: "7938",
          },
          {
            id: "8518",
          },
        ],
        id: "0x51208e5cc9215c6360210c48f81c8270637a5218",
      },
      {
        gotchisOwned: [
          {
            id: "2015",
          },
          {
            id: "2620",
          },
          {
            id: "3684",
          },
          {
            id: "452",
          },
          {
            id: "4552",
          },
          {
            id: "5906",
          },
          {
            id: "8019",
          },
          {
            id: "818",
          },
          {
            id: "8271",
          },
          {
            id: "8329",
          },
          {
            id: "8633",
          },
          {
            id: "9047",
          },
          {
            id: "9345",
          },
          {
            id: "973",
          },
          {
            id: "9781",
          },
          {
            id: "985",
          },
        ],
        id: "0x58babcd845405c1a4cb4f6f382954c87a2f0ad0f",
      },
      {
        gotchisOwned: [
          {
            id: "1235",
          },
          {
            id: "3741",
          },
          {
            id: "3742",
          },
          {
            id: "3744",
          },
        ],
        id: "0x5da5f4c020f856abdb168fd35c957d6006ba2ede",
      },
      {
        gotchisOwned: [
          {
            id: "870",
          },
        ],
        id: "0x5fc75cbbcddf4398c5c2949a5736e299c1440576",
      },
      {
        gotchisOwned: [
          {
            id: "1133",
          },
          {
            id: "1372",
          },
          {
            id: "1469",
          },
          {
            id: "1679",
          },
          {
            id: "2091",
          },
          {
            id: "2235",
          },
          {
            id: "225",
          },
          {
            id: "2270",
          },
          {
            id: "2612",
          },
          {
            id: "275",
          },
          {
            id: "2898",
          },
          {
            id: "2902",
          },
          {
            id: "2909",
          },
          {
            id: "3084",
          },
          {
            id: "3085",
          },
          {
            id: "3340",
          },
          {
            id: "3480",
          },
          {
            id: "3481",
          },
          {
            id: "3815",
          },
          {
            id: "4122",
          },
          {
            id: "4124",
          },
          {
            id: "4130",
          },
          {
            id: "4182",
          },
          {
            id: "4472",
          },
          {
            id: "4533",
          },
          {
            id: "4556",
          },
          {
            id: "5560",
          },
          {
            id: "5754",
          },
          {
            id: "5903",
          },
          {
            id: "6135",
          },
          {
            id: "6278",
          },
          {
            id: "6400",
          },
          {
            id: "6564",
          },
          {
            id: "6683",
          },
          {
            id: "6690",
          },
          {
            id: "6963",
          },
          {
            id: "6966",
          },
          {
            id: "7081",
          },
          {
            id: "7407",
          },
          {
            id: "7468",
          },
          {
            id: "7636",
          },
          {
            id: "7661",
          },
          {
            id: "7662",
          },
          {
            id: "7961",
          },
          {
            id: "810",
          },
          {
            id: "8474",
          },
          {
            id: "8478",
          },
          {
            id: "8782",
          },
          {
            id: "8784",
          },
          {
            id: "9448",
          },
          {
            id: "9449",
          },
          {
            id: "9450",
          },
          {
            id: "9451",
          },
          {
            id: "9589",
          },
          {
            id: "9603",
          },
          {
            id: "9983",
          },
          {
            id: "9985",
          },
        ],
        id: "0x60c4ae0ee854a20ea7796a9678090767679b30fc",
      },
      {
        gotchisOwned: [
          {
            id: "1348",
          },
          {
            id: "9464",
          },
        ],
        id: "0x66697dabffe51a73e506f463b27e388512ed6ecd",
      },
      {
        gotchisOwned: [
          {
            id: "1202",
          },
        ],
        id: "0x69a77b9ca4d106690751866360f7bb5952b2666d",
      },
      {
        gotchisOwned: [
          {
            id: "390",
          },
          {
            id: "391",
          },
          {
            id: "392",
          },
        ],
        id: "0x6eb13bf70edaade22b0c5a7f0de7138ce96d53db",
      },
      {
        gotchisOwned: [],
        id: "0x705ae5aef02b0a8ceaa712af547d39a051da5d4a",
      },
      {
        gotchisOwned: [
          {
            id: "1470",
          },
          {
            id: "3237",
          },
          {
            id: "3989",
          },
          {
            id: "6147",
          },
          {
            id: "6443",
          },
          {
            id: "6477",
          },
          {
            id: "7025",
          },
          {
            id: "7067",
          },
          {
            id: "7369",
          },
          {
            id: "7832",
          },
        ],
        id: "0x73b46a49e5f92480710b07be849500b772b6a995",
      },
      {
        gotchisOwned: [
          {
            id: "3538",
          },
          {
            id: "3539",
          },
          {
            id: "3541",
          },
          {
            id: "3542",
          },
          {
            id: "4044",
          },
          {
            id: "6605",
          },
          {
            id: "6665",
          },
          {
            id: "7024",
          },
          {
            id: "9715",
          },
        ],
        id: "0x7e4724c60718a9f87ce51bcf8812bf90d0b7b9db",
      },
      {
        gotchisOwned: [
          {
            id: "2285",
          },
          {
            id: "284",
          },
        ],
        id: "0x7fce563e9f39ab7dfbd61978f10037cc32a95a4d",
      },
      {
        gotchisOwned: [
          {
            id: "2212",
          },
          {
            id: "2213",
          },
          {
            id: "2214",
          },
          {
            id: "4737",
          },
          {
            id: "4738",
          },
          {
            id: "4739",
          },
          {
            id: "4740",
          },
          {
            id: "4741",
          },
          {
            id: "5142",
          },
          {
            id: "6185",
          },
        ],
        id: "0x7fd93c8cfd654b24ef2c4b5fa36d41bea4cf2f90",
      },
      {
        gotchisOwned: [
          {
            id: "6152",
          },
          {
            id: "6153",
          },
          {
            id: "6154",
          },
          {
            id: "6155",
          },
          {
            id: "6156",
          },
          {
            id: "7199",
          },
          {
            id: "7200",
          },
          {
            id: "7201",
          },
          {
            id: "7202",
          },
          {
            id: "7203",
          },
          {
            id: "9673",
          },
        ],
        id: "0x86aecfc1e3973108ce14b9b741a99d3466127170",
      },
      {
        gotchisOwned: [
          {
            id: "2290",
          },
          {
            id: "2851",
          },
          {
            id: "2879",
          },
          {
            id: "3736",
          },
          {
            id: "4228",
          },
          {
            id: "4230",
          },
          {
            id: "4232",
          },
          {
            id: "4701",
          },
          {
            id: "5306",
          },
          {
            id: "5877",
          },
          {
            id: "6853",
          },
          {
            id: "7980",
          },
          {
            id: "8061",
          },
          {
            id: "8588",
          },
        ],
        id: "0x86f5badc9fb2db49303d69ad0358b467cfd393e0",
      },
      {
        gotchisOwned: [
          {
            id: "2881",
          },
          {
            id: "5443",
          },
          {
            id: "6214",
          },
          {
            id: "6721",
          },
          {
            id: "7498",
          },
          {
            id: "8267",
          },
        ],
        id: "0x8e29b3f71a8c7276d122c88d9bf317e857abb376",
      },
      {
        gotchisOwned: [
          {
            id: "1969",
          },
          {
            id: "1970",
          },
          {
            id: "1971",
          },
          {
            id: "1972",
          },
          {
            id: "1973",
          },
        ],
        id: "0x9080196182f77b89bb5b0eee3ddb48cfa716c4c3",
      },
      {
        gotchisOwned: [
          {
            id: "2182",
          },
          {
            id: "2687",
          },
          {
            id: "3154",
          },
          {
            id: "4616",
          },
          {
            id: "4820",
          },
          {
            id: "9996",
          },
        ],
        id: "0x9ff84b91998df96a6587db8dde8d4e47518107d6",
      },
      {
        gotchisOwned: [
          {
            id: "1014",
          },
          {
            id: "1740",
          },
          {
            id: "2364",
          },
          {
            id: "3267",
          },
          {
            id: "4405",
          },
          {
            id: "5572",
          },
          {
            id: "5964",
          },
          {
            id: "7274",
          },
          {
            id: "9686",
          },
        ],
        id: "0xa499df2bdae854093e5576c26c9e53e1b30d25e5",
      },
      {
        gotchisOwned: [
          {
            id: "1486",
          },
        ],
        id: "0xaec7d9e4216758e88b926695df4a6d47abccc0ef",
      },
      {
        gotchisOwned: [
          {
            id: "1124",
          },
          {
            id: "1377",
          },
          {
            id: "1425",
          },
          {
            id: "1447",
          },
          {
            id: "1889",
          },
          {
            id: "3487",
          },
          {
            id: "3618",
          },
          {
            id: "364",
          },
          {
            id: "4423",
          },
          {
            id: "4621",
          },
          {
            id: "4838",
          },
          {
            id: "5032",
          },
          {
            id: "5067",
          },
          {
            id: "5068",
          },
          {
            id: "5069",
          },
          {
            id: "5417",
          },
          {
            id: "5975",
          },
          {
            id: "5979",
          },
          {
            id: "6125",
          },
          {
            id: "6708",
          },
          {
            id: "7356",
          },
          {
            id: "7482",
          },
          {
            id: "7908",
          },
          {
            id: "8044",
          },
          {
            id: "8166",
          },
          {
            id: "8244",
          },
          {
            id: "8501",
          },
          {
            id: "8776",
          },
          {
            id: "9592",
          },
          {
            id: "9831",
          },
          {
            id: "9862",
          },
        ],
        id: "0xb02dc63b4e234e1abc36ead88df610d67f4920dd",
      },
      {
        gotchisOwned: [
          {
            id: "1460",
          },
          {
            id: "6566",
          },
        ],
        id: "0xb4845049cf818dccd320eb715c1a475b0cffa1c3",
      },
      {
        gotchisOwned: [
          {
            id: "1481",
          },
          {
            id: "1790",
          },
          {
            id: "3037",
          },
          {
            id: "3851",
          },
          {
            id: "3855",
          },
          {
            id: "3861",
          },
          {
            id: "4238",
          },
          {
            id: "4815",
          },
          {
            id: "5604",
          },
          {
            id: "621",
          },
          {
            id: "6284",
          },
          {
            id: "6933",
          },
          {
            id: "7894",
          },
          {
            id: "7895",
          },
          {
            id: "7896",
          },
          {
            id: "7897",
          },
          {
            id: "8409",
          },
          {
            id: "8441",
          },
          {
            id: "8830",
          },
          {
            id: "9168",
          },
          {
            id: "9461",
          },
        ],
        id: "0xb53cf0a586973ab15c0a045990d06b4fa083dd5a",
      },
      {
        gotchisOwned: [
          {
            id: "2234",
          },
          {
            id: "4333",
          },
          {
            id: "4356",
          },
          {
            id: "4540",
          },
          {
            id: "4872",
          },
          {
            id: "5091",
          },
          {
            id: "5222",
          },
          {
            id: "6197",
          },
          {
            id: "7851",
          },
          {
            id: "8358",
          },
        ],
        id: "0xb71d05cf5cdf7a9b15b20b9aab5e91332c271c96",
      },
      {
        gotchisOwned: [
          {
            id: "1979",
          },
          {
            id: "2830",
          },
          {
            id: "5613",
          },
          {
            id: "6634",
          },
          {
            id: "6647",
          },
          {
            id: "6648",
          },
          {
            id: "6649",
          },
          {
            id: "6650",
          },
          {
            id: "9170",
          },
        ],
        id: "0xba12fda058a14eb03c14613601c3a30d6f955196",
      },
      {
        gotchisOwned: [],
        id: "0xc4cb9c709deac4ccba0eee788a1ffe65bf84b38f",
      },
      {
        gotchisOwned: [
          {
            id: "4964",
          },
        ],
        id: "0xcef4d05050a9b342991fa7b06b27df1ae03c7d1b",
      },
      {
        gotchisOwned: [
          {
            id: "2784",
          },
          {
            id: "5472",
          },
          {
            id: "5473",
          },
          {
            id: "5474",
          },
          {
            id: "5725",
          },
          {
            id: "6004",
          },
          {
            id: "9745",
          },
        ],
        id: "0xd3cba4614e1f2bc23bf7bcf53e7b441d2528965a",
      },
      {
        gotchisOwned: [
          {
            id: "1367",
          },
          {
            id: "2739",
          },
          {
            id: "3782",
          },
          {
            id: "4944",
          },
          {
            id: "581",
          },
          {
            id: "6239",
          },
          {
            id: "7562",
          },
          {
            id: "7563",
          },
          {
            id: "7885",
          },
          {
            id: "8064",
          },
        ],
        id: "0xde34393312c0c1e97e404d18a04580e9610e063c",
      },
      {
        gotchisOwned: [
          {
            id: "1860",
          },
          {
            id: "4301",
          },
          {
            id: "4302",
          },
          {
            id: "5110",
          },
          {
            id: "7089",
          },
        ],
        id: "0xe1a1d5c32888c5b140917b296e82cf3a448f37a6",
      },
      {
        gotchisOwned: [
          {
            id: "1068",
          },
          {
            id: "1455",
          },
          {
            id: "1998",
          },
          {
            id: "2128",
          },
          {
            id: "2209",
          },
          {
            id: "2359",
          },
          {
            id: "2886",
          },
          {
            id: "3205",
          },
          {
            id: "3515",
          },
          {
            id: "4083",
          },
          {
            id: "4090",
          },
          {
            id: "4416",
          },
          {
            id: "4534",
          },
          {
            id: "4677",
          },
          {
            id: "4679",
          },
          {
            id: "4680",
          },
          {
            id: "4681",
          },
          {
            id: "4682",
          },
          {
            id: "4683",
          },
          {
            id: "4684",
          },
          {
            id: "4686",
          },
          {
            id: "4693",
          },
          {
            id: "522",
          },
          {
            id: "662",
          },
          {
            id: "7384",
          },
          {
            id: "7603",
          },
          {
            id: "7695",
          },
          {
            id: "7816",
          },
          {
            id: "7992",
          },
          {
            id: "8161",
          },
          {
            id: "8196",
          },
          {
            id: "8213",
          },
          {
            id: "8298",
          },
          {
            id: "8334",
          },
          {
            id: "8379",
          },
          {
            id: "8806",
          },
          {
            id: "8936",
          },
          {
            id: "9602",
          },
          {
            id: "9604",
          },
        ],
        id: "0xe29555e804e414e295e2a059fc49d002ec18f268",
      },
      {
        gotchisOwned: [
          {
            id: "7389",
          },
          {
            id: "8439",
          },
          {
            id: "8440",
          },
          {
            id: "8442",
          },
          {
            id: "8443",
          },
          {
            id: "8860",
          },
          {
            id: "8861",
          },
          {
            id: "8862",
          },
          {
            id: "8863",
          },
          {
            id: "8864",
          },
        ],
        id: "0xee5cda91e4ddcde24d44dafd74bed4ba068f8ac2",
      },
      {
        gotchisOwned: [
          {
            id: "1292",
          },
          {
            id: "1293",
          },
          {
            id: "5218",
          },
          {
            id: "5281",
          },
          {
            id: "6802",
          },
          {
            id: "6804",
          },
          {
            id: "6805",
          },
          {
            id: "6807",
          },
          {
            id: "6819",
          },
          {
            id: "7800",
          },
          {
            id: "8667",
          },
          {
            id: "8681",
          },
          {
            id: "8809",
          },
        ],
        id: "0xf09d1acbf092ec47970a2aa9e16bc658b2ecf15e",
      },
      {
        gotchisOwned: [
          {
            id: "1449",
          },
          {
            id: "3588",
          },
          {
            id: "8764",
          },
        ],
        id: "0xf22f00d0b95b1b728078066e5f4410f6b2be8fae",
      },
      {
        gotchisOwned: [
          {
            id: "6769",
          },
          {
            id: "9071",
          },
        ],
        id: "0xfeac872a93df8939df3face650945fbf3ea705e9",
      },
    ],
  },
};

exports.uniclyBadgeGotchisOwned = uniclyBadgeGotchisOwned;
exports.uniclyBadgeAddresses = uniclyBadges;